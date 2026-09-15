const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
   try {
      let { title, description } = req.body;

      let newNote = await NotesModel.create({
         title,
         description,
      });

      return res.status(201).json({
         message: "Note Created Successfully!....",
         data: newNote,
      });
   } catch (error) {
      console.log("Error In Creating Note", error);
       return res.status(500).json({
         message: "Error In Creating Note",
         
      });
   }
};

const getAllNotesController = async (req, res) => {
   try {
      const allNotes = await NotesModel.find();
      return res.status(200).json({
         message: "Notes Got Successfully!....",
         data: allNotes,
      });
   } catch (error) {
      console.log("Error In Fetching Notes From DB", error);
   }
};

const getfindByIdNoteController = async (req, res) => {
   try {
      let noteId = req.params.id;

      let note = await NotesModel.findById(noteId);

      return res.status(200).json({
         message: "Unique Id Found",
         data: note,
      });
   } catch (error) {
      console.log("Error in finding single unique id Api", error);
       return res.status(500).json({
         message: "Error In Finding Note",
         
      });
   }
};

const updatedNotesController = async (req, res) => {
   try {
      let noteId = req.params.id;
      let body = req.body;

      const updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, { new: true });

      return res.status(200).json({
         message: "Note Updated Successfully",
         data: updatedNote,
      });
   } catch (error) {
      console.log("Internal Server Error", error);
       return res.status(500).json({
         message: "Error In Updating Note",
         
      });
   }
};

const deleteNoteController = async (req, res) => {
   try {
      let noteID = req.params.id

      let deleteNote = await NotesModel.findByIdAndDelete(noteID)
      return res.status(200).json({
         message: "Note Deleted Successfully",
         data: deleteNote,
      });
   } catch (error) {
      console.log("Error In Deleting Note", error)
       return res.status(500).json({
         message: "Error In Deleted Note",
         
      });
   }
}

module.exports = {
   createNotesController,
   getAllNotesController,
   getfindByIdNoteController,
   updatedNotesController,
   deleteNoteController,
};
