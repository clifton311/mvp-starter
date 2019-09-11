var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'MVP'
});

connection.connect((err)=> {
  if (err) {
    console.error
  }
  console.log("connected to MYSQL");
})


module.exports = connection
