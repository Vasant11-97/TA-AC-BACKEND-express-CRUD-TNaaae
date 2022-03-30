var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, default: 18 },
  email: { type: String, required: /@/ },
  bio: { type: String, minlength: 20, maxlength: 200 },
});

var User = mongoose.model('User', userSchema);

module.exports = User;
