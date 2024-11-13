const express = require('express');

const app = express();

// Handle GET request for the homepage
app.get('/', (req, res) => {
  console.log("Got a GET request for the homepage");
  res.send('Welcome to Express Js');
});

// Handle POST request for the homepage
app.post('/', (req, res) => {
  console.log("Got a POST request for the homepage");
  res.send('I am Impossible!');
});

// Handle DELETE request for /del_student
app.delete('/del_student', (req, res) => {
  console.log("Got a DELETE request for /del_student");
  res.send('I am Deleted!');
});

// Handle GET request for /enrolled_student
app.get('/enrolled_student', (req, res) => {
  console.log("Got a GET request for /enrolled_student");
  res.send('I am an enrolled student.');
});

// Pattern matching for GET requests that match /ab*cd
app.get('/ab*cd', (req, res) => {
  console.log("Got a GET request for /ab*cd");
  res.send('Pattern Matched.');
});

// Start the server
const server = app.listen(8000, () => {
  const port = server.address().port;
  console.log("Example app listening at http://localhost:%s", port);
});
