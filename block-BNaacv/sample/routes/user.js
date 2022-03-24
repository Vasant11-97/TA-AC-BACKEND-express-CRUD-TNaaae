var express = require('express');
var router = express.Router();
var User = require('../model/Users');

router.get('/new', (req, res) => {
  res.render('userForm');
});

// Adding new user in database

router.post('/', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
  });
  res.send(req.body);
});
// Exporting
module.exports = router;

// Finding user

router.get('/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    res.send({ user: user });
  });
});

// Update user

router.put('/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    res.send(updatedUser);
  });
});

// For deleting the user

router.delete('/delete/:id', (req, res) => {
  User.findByIdAndDelete(id, req.body, (err, deletedUser) => {
    res.send(
      `${deletedUser.name} is deleted successfully. Yakken nahi hota to jake dekh records mai😎`
    );
  });
});
