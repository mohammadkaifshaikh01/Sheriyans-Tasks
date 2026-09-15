const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getfindByIdNoteController,
  updatedNotesController,
  deleteNoteController
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/create", createNotesController);

router.get("/allNotes", getAllNotesController);

router.get("/:id", getfindByIdNoteController);

router.put("/:id", updatedNotesController);

router.delete("/:id", deleteNoteController);

module.exports = router;
