const path = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');


router.get('/notes',  (req, res) => {
 let data = fs.readFileSync('./db/db.json');
let data2 = JSON.parse(data);
return data2;

  });

module.exports = router;