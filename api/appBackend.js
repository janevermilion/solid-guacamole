var createError = require('http-errors');
var express = require('express');
var app = express();
const session = require('express-session')
const bodyParser = require("body-parser");
const passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var multer = require('multer');
var upload = multer();
app.use(cors());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
const env = require('dotenv').config({
  path: 'app/.env'
});
app.use(bodyParser.json());

let loginRouter = require('./routes/login')(app,passport);
let protectedRouter = require('./routes/protected')(app, passport);
const models = require("./models");

models.sequelize.sync().then(function () {
  console.log('Database created')
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

require('./config/passport.js')(passport, models.user);

app.use(express.static('public'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
