var mysql = require('mysql')


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
  console.log('body',req.body)
  let sql = `INSERT INTO users (firstName, lastName, email, userName) VALUES (?,?,?,?)`;
  let params = [req.body.firstName, req.body.lastName, req.body.email, req.body.userName]
  db.query(sql, params ,(err, results) => {
    if (err) {
      res.sendStatus(500)
      console.log(err)
    } else {
      console.log('db updated');
      res.send(results)
    }
  });
};



module.exports = {
  selectAll,
  registerUser
}