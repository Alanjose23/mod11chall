const express = require('express');
const api2 = require('./routes/apiroutes');
const path = require('path');
const PORT = 5000;
const api = require('./routes/noteroutes');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));
app.use('/',api)
// app.use('/api',api2)




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../mod11chall/public/index.html'));
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);