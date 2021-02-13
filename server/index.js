// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");

app.use(cors());


app.get('/', (req, res) => {
  db.query('SELECT name, count FROM groceryList', (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      console.log('query successful')
      res.status(201).send(data)
    }
  });
});

app.post('/', (req, res) =>
  res.send('Post Success'));


app.listen(port, () => {
  console.log("listening on 8080");
});
