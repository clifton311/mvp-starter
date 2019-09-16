var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
let db = require('../database-mysql/db')
let model = require('../database-mysql/models');
let { check, validationResult } = require('express-validator');
var cookieParser = require('cookie-parser');
var app = express();
var PORT = 3011;




//Authentication Packages
var session = require('express-session')
var passport = require('passport')
LocalStrategy = require('passport-local'). Strategy
var MySQLStore = require('express-mysql-session')(session);
 

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

var options = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'MVP'
};

var sessionStore = new MySQLStore(options);

app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: false, store: sessionStore, cookie: {secure:true}}))
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy (
  function(username, password, done)  {
    console.log('username',username);
    console.log('password',password)

    db.query('SELECT password FROM users WHERE username = ?,' [username], (err, results, field)=> {
      if (err) {
        done(err)
      } 

      if (results.length === 0) {
        done(null,false)
      }

      return done (null,'asdf')
    })
  })
)

passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  done(err, user_id);
});


//Routes
app.get('/', function(req, res){
  res.cookie('name', 'express').send('cookie set'); //Sets name = express
  console.log('user',req.user_id)
  console.log(req.isAuthenticated())
  
});


app.get('/api/users',  (req, res) => {
  model.selectAll(req,res)
  console.log('user',req.user)
  console.log(req.isAuthenticated())
  
});

app.post('/api/users/new', [
  //check('userName').isEmail().withMessage('Username must be an Email'), 
  check('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
] , (req, res) => {

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(error => {
        console.log(error.msg)
      })
      return res.status(422).json({ errors: errors.array() });
    } else {
      model.registerUser(req,res)
      console.log('register success')
    }
})

app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`
      req.session.passport.user: ${JSON.stringify(req.session.passport)}`
    )

    if (req.isAuthenticated())
      return next();
      res.redirect('/login')
  }
}