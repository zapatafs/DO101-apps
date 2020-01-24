var express = require('express');
app = express();

var response;

app.get('/', function (req, res) {
  response = 'This is version 2 of the app.' + '\n';

  //send the response to the client
  res.send(response);

});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});