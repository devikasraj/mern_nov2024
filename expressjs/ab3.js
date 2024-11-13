express = require('express');

var app = express();

app.get('/', function(req, res) {

 res.send('Welcome to Express Middleware');

});

app.get('/help', function(req, res) {

 res.send('How can I help You?');

});

var server = app.listen(8000, function () {

 var host = server.address().address

 var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)

})