const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve index.html
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Make sure index.html is in 'public' folder
});

// Handle form submission with POST method
app.post('/process_post', urlencodedParser, (req, res) => {
  // Prepare output in JSON format
  const response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };

  console.log(response);
  res.end(JSON.stringify(response)); // Send JSON response back to client
});

// Start the server
const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
