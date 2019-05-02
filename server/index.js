var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();
var PORT = 3010;


app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/users', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

