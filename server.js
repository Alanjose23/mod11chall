const express = require('express');

const fs = require('fs');
const path = require('path');
const PORT = 5000;
const api = require('./noteroutes')


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));
app.use('/',api)




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);