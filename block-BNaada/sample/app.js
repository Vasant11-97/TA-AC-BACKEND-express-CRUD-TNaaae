// Require Moduels
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var userRouter = require('./router/user');
var User = require('./model/User');

// Setting-up  the database

mongoose.connect('mongodb://localhost/users', (err) => {
  console.log(err ? err : 'connected : true');
});

// Setting up the ejs engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setting up the css file

app.use(express.static(path.join(__dirname, 'public')));

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/user', userRouter);

// Custom Middlewares
// 404 custom middleware
app.use((req, res, next) => {
  res.send('404: Page not fount');
});

// Error custom middleware

app.use((err, req, res, next) => {
  res.send(err);
});

// Server listening

app.listen(3000, () => {
  console.log('Server is listening on pork 3k');
});
