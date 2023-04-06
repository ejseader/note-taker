const path = require('path');
const router = require('express').Router();


  router.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), './index.html'));
  });
  
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(process.cwd(), './views/notes.html'));
  });

module.exports = router;