const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const createNotesController = require("./controllers/note.controller");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("You Are In Home Page");
});

app.use("/notes", notesRoute);


module.exports = app;
