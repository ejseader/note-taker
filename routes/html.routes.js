const path = require('path');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), './public/views/index.html'));
  });
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(process.cwd(), './public/views/notes.html'));
  });

};