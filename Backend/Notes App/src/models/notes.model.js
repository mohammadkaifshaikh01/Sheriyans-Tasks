const mongoose = require('mongoose')

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


const NotesModel = mongoose.model('notes' , notesSchema)
module.exports = NotesModel;