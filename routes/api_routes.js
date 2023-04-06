const generateID = require('generate-unique-id');
const fs = require('fs');
const router = require('express').Router();

const editNote = (newNotesArray) => {
  fs.writeFile('./db/db.json', JSON.stringify(newNotesArray), (err) => {
    if (err) throw err;
  });
}

  // GET request
  router.get('/api/notes/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) throw err;

      res.json(JSON.parse(data));
    });
  });

  // POST request
  router.post('/api/notes/', (req, res) => {
    const newNote = req.body;
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) throw err;

      const notesArray = JSON.parse(data);
      newNote.id = generateID({ length: 10});
      notesArray.push(newNote);

      editNote(notesArray);
      console.log(
        `New note successfully added. Title: ${JSON.stringify(
          newNote.title
        )}, Text: ${JSON.stringify(newNote.text)}, ID: ${newNote.id}`
      );

      res.send(notesArray);
    });
  });

  // PUT request
  router.put("/api/notes/:id", (req, res) => {
    const editID = req.params.id;

    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;

      let notesArray = JSON.parse(data);

      let chosenNote = notesArray.find((note) => note.id === editID);

      if (chosenNote) {
        let updatedNote = {
          title: req.body.title, 
          text: req.body.text, 
          id: chosenNote.id,
        };
        
        let targetIndex = notesArray.indexOf(chosenNote);

        notesArray.splice(targetIndex, 1, updatedNote);

        res.sendStatus(204);
        editNote(notesArray);
        res.json(notesArray);
      } else {
        res.sendStatus(404);
      }
    });
  });

  // DELETE request
  router.delete("/api/notes/:id", (req, res) => {
    const deleteId = req.params.id;

    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      let notesArray = JSON.parse(data);
      
      for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === deleteId) {
          notesArray.splice(i, 1);
        }
      }
      editNote(notesArray);
      console.log(`Note removed. Note ID: ${deleteId}`);
      res.send(notesArray);
    });
  });

module.exports = router;