//server ko create krna
const express = require("express");
const app = express();
const noteModel = require("./models/note.model");

app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(200).json({
    message: "note created successfully",
  });
});

// app.get("/notes", (req, res) => {
//   res.status(200).json({
//     message: "sent successfully",
//     notes: notes,
//   });
// });

// app.delete("/notes/:index", (req, res) => {
//   const index = req.params.index;

//   delete notes[index];

//   res.status(200).json({
//     message: "note deleted succesfully",
//   });
// });

// app.patch("/notes/:index", (req, res) => {
//   const index = req.params.index;
//   const title = req.body.title;

//   notes[index].title = title;

//   res.status(200).json({
//     message: "note updated succesfully",
//   });
// });
module.exports = app;
