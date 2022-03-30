var express = require('express');
var router = express.Router();
var User = require('../model/User');

// Routes
// Rendering users page

router.get('/', async (req, res, next) => {
  try {
    const user = await User.find({});
    res.render('user', { user });
  } catch (err) {
    return next(err);
  }
});

router.get('/new', (req, res) => {
  res.render('newUser');
});

// Adding new user in Database

router.post('/new', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
    res.redirect('/');
  });
});

// Getting by id route

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(user,"body");
    console.log(user.name,"name")
    if (err) return next(err);
    res.render('userDetails',{user:user});
  });
});

module.exports = router;
