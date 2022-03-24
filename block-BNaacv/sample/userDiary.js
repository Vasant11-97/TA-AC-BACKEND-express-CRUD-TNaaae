// Require
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var userRouter = require('./routes/user');
var User = require('./model/Users');

// Setting up database

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'connected : true');
});

// Setting up the ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Index Route

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/user', userRouter);

// Custom Error middleware

app.use((req, res, next) => {
  res.send('404 : Page not found');
});

// Server

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
