const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

const scb = {
  baseUrl: 'http://api.scb.se/OV0104/v1/doris/sv/ssd'
};

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getQuery = (year) => ({
  query: [
    {
      code: 'Tid',
      selection: {
        filter: 'item',
        values: [year]
      }
    }
  ],
  response: {
    format: 'json'
  }
});

const toJson = (resp) => resp.json();

app.get('/api/names', (req, res) => {
  const url = `${scb.baseUrl}/BE/BE0001/BE0001D/BE0001T05AR`;
  const { year } = req.query;
  const sendJson = (json) => res.json(json);

  if (year) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(getQuery(year)),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then((resp) => resp.text())
      .then((text) => res.send(text))
      .catch((err) => res.status(500).json(err));
  }

  return fetch(url)
    .then(toJson)
    .then(sendJson);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
