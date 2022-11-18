const express = require('express');
const termData = require('./mod11chall/Develop/db/db.json');

const PORT = 3001;

const app = express();

app.get('/api/terms', (req, res) => res.json(termData));

app.get('/api/terms/:term', (req, res) => {

  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  return res.json('No match found');
});

app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);