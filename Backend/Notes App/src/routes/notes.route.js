const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getfindByIdNoteController,
  updatedNotesController,
  deleteNoteController
} = require("../controllers/note.controller");

const router = express.Router();


// Create Note
router.post("/create", createNotesController);

// Getting All Notes
router.get("/allNotes", getAllNotesController);

// Find Unique controller
router.get("/:id", getfindByIdNoteController);


// Update Note
router.put("/:id", updatedNotesController);


// Delete Via PUT
router.delete("/:id", deleteNoteController);

module.exports = router;
