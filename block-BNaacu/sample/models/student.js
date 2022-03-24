var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 18 },
});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;
