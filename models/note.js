//template for a note
var mongoose = require('mongoose');
var noteSchema = mongoose.Schema({
  noteName: String,
  noteBody: String
});

module.exports = mongoose.model('Note', noteSchema);