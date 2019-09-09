var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
let db = require('../database-mysql/models')



var app = express();
var PORT = 3010;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));


app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/users',  (req, res) => {
  db.selectAll(req,res)
  
});

app.post('/users/new',  (req, res)=> {
  db.registerUser(req,res)
})


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

