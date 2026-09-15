const mongoose = require('mongoose')


//Notes Schema
const notesSchema = mongoose.Schema({
   title : {
      type : String,
      required : true,
   },
   description : {
      type : String,
      required : true,
      minLength : [15 , "Minimum 15 Characters Are Required"],
   }
})

// Notes Model
const NotesModel = mongoose.model('notes' , notesSchema)
module.exports = NotesModel;