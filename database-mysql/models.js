var mysql = require('mysql')
var bcrypt = require('bcrypt')
const saltRounds = 10;


var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'MVP'
});

db.connect((err)=> {
  if (err) {
    console.error
  }
  console.log("connected to MYSQL");
})

var selectAll = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.send(results)
    }
  });
};

const registerUser = (req, res) => {
  console.log(req.body)
  const password = req.body.password
  // Store hash in your password DB.
  bcrypt.hash( password, saltRounds, (err, hash) => {
    let sql = `INSERT INTO users (firstName, lastName, email, userName, password) VALUES (?,?,?,?,?)`;
    let params = [req.body.firstName, req.body.lastName, req.body.email, req.body.userName, hash]
    db.query(sql, params ,(err, results) => {
      if (err) {
        res.sendStatus(500)
        console.log(err)
      } else {
        console.log('db updated');
        res.send(results)
      }
    });
  });
};

const logIn = (req, res) => {

}

module.exports = {
  selectAll,
  registerUser
}