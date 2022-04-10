
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var cors = require('cors');

//router folder setup
var todoRouter = require('./routes/todo');
var userRouter = require('./routes/user');
var authorRouter = require('./routes/author');
var bookRouter = require('./routes/book');
var old_TodoRouter = require('./routes/old_Todo');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: true, credentials: false}))

app.use('/todo', todoRouter);
app.use('/user', userRouter);
app.use('/author', authorRouter);
app.use('/book', bookRouter);
app.use('/', old_TodoRouter);

//For connecting mongo Url
let mongoConnUrl = "mongodb://localhost/marchnode22";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("Error came in connecting" + error);
});
db.on("open", function () {
  console.log("yes, we are connected to mongodb and the database");
});

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

var port = process.env.PORT || '3000';
app.listen(port);
module.exports = app;
