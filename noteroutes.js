const path = require("path");
const router = require('express').Router();

router.get('/notes',  (req, res) => {
    res.sendFile(path.join(__dirname, '../mod11chall/Develop/public/notes.html'));
  });


module.exports = router;