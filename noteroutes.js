const path = require("path");
const termData = require('./Develop/db/db.json');
const router = require('express').Router();
const fs = require('fs/promises');

router.get('/notes',  (req, res) => {
    res.sendFile(path.join(__dirname, '../mod11chall/Develop/public/notes.html'));
  });


router.get('/notes/api', (req, res) => {
     const jsonpar = JSON.parse(fs.readFile(termData))
        console.log(jsonpar);
      });


module.exports = router;