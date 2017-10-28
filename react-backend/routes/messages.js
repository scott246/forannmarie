var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL, //"postgres://localhost:5432/local-db" for local
});

client.connect();

var response = [];

client.query('SELECT * FROM Messages;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    response.push(row);
    console.log(JSON.stringify(row));
  }
  client.end();
});

/* GET messages listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(JSON.stringify(response));
});

module.exports = router;
