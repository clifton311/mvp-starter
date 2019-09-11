var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
let db = require('../database-mysql/db')
let model = require('../database-mysql/models');
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var app = express();
var PORT = 3011;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));


//Authentication Packages
var session = require('express-session')
var passport = require('passport')
LocalStrategy = require('passport-local'). Strategy
app.use(session({
  secret: 'lkajdfsinvad',
  resave: false,
  saveUninitialized: false,
  // cookie: {secure:true}
}))
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

//Routes
app.get('/api/users',  (req, res) => {
  model.selectAll(req,res)
  
});

app.post('/api/users/new', [
  check('userName').isEmail().withMessage('Username must be an Email'), 
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
    }
})

app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   
    done(err, user);
  
});