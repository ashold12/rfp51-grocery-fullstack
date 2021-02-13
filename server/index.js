// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());


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

app.post('/', (req, res) => {
  var data = req.body //contains item and counter properties
  var query = `INSERT INTO groceryList (name, count) VALUES ('${data.item}', ${data.count})`
  db.query(query, (err, msg) => {
    if (err) {
      console.log(err)
      res.status(404).send(err)
    } else {
      console.log(msg)
      res.status(201).send(msg)
    }
  });
});


app.listen(port, () => {
  console.log("listening on 8080");
});
