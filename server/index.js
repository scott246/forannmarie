const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL, //"postgres://localhost:5432/local-db"
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
app.get('/messages', function(req, res) {
  //res.send('respond with a resource');
  res.send(res.json(JSON.stringify(response)));
});

// // Answer message requests.
// app.get('/messages', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
