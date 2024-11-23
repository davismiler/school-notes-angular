const express = require("express");
const router = express.Router();

const conn = require("../db/connection.js");

const subjectsCollection = conn.subjectsCollection;
const notesCollection = conn.notesCollection;

router
  .route("/")

  // Get All the Subjects
  .get(async (req, res) => {
    const result = await subjectsCollection.find({}).toArray();
    res.json(result);
  })

  // Create a new subject
  .post(async (req, res) => {
    const result = await subjectsCollection.insertOne(req.body);
    res.json(req.body);
    // res.json(subject);
  });

// Get Subject by Id
router
  .route("/:id")
  .get(async (req, res) => {
    const subjectID = Number(req.params.id);
    const result = await subjectsCollection
      .find({ id: subjectID }, { projection: { _id: 0 } })
      .toArray();

    res.json(result);
  })
  // Update Subject
  .put(async (req, res) => {
    const subjectID = Number(req.params.id);
    const filter = { id: subjectID };

    const result = await subjectsCollection.updateOne(filter, {
      $set: {
        name: req.body.name,
        color: req.body.color,
      },
    });
    res.json(req.body);
  })
  // Delete Subject by ID
  .delete(async (req, res) => {

    const subjectID = await Number(req.params.id);
    const result = await subjectsCollection.deleteOne({ id: subjectID });
    res.json({ "deleted": true });

    // const result;
  });


  router.get("/getSubjectByNoteID/:id", async (req, res) => {
    const noteID = Number(req.params.id);
  
    let noteSubjectId = await notesCollection
      .find({ id: noteID }, { projection: { _id: 0, subject_id: 1 } })
      .toArray();
  
    noteSubjectId = noteSubjectId[0].subject_id;
  
    const subjectData = await subjectsCollection
      .find({ id: noteSubjectId }, { projection: { _id: 0 } })
      .toArray();
  
    res.json(subjectData);
  });

module.exports = router;

module.exports = router;