const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://jlzshsrrcyraju:e0dbae095eab086eeac1e657d242fca3560ad5ff1963dc12084f0f2f7147297b@ec2-107-22-173-160.compute-1.amazonaws.com:5432/d9jrd8gsqm329o?ssl=true"
});

client.connect();

var messageResponse = [];

client.query('SELECT * FROM Messages;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    messageResponse.push(row);
  }
  client.end();
});

/* GET messages listing. */
app.get('/messages', function(req, res) {
  //res.send('respond with a resource');
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(messageResponse));
});

// // Answer message requests.
// app.get('/messages', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
