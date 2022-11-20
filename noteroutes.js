const path = require("path");
const termData = require('./Develop/db/db.json');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes',  (req, res) => {
    res.sendFile(path.join(__dirname, '../mod11chall/Develop/public/notes.html'));
  });


router.get('/notes/api', (req, res) => res.send('hello'));

module.exports = router;