const express = require("express");
const router = express.Router();

const conn = require("../db/connection.js");
const { ObjectId } = require("mongodb");

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
    res.json(result);
  });

router
  .route("/:id")

  // Update Subject By ID
  .patch(async (req, res) => {
    const subjectObjectId = req.params.id;
    const filter = { _id: new ObjectId(subjectObjectId) };

    const result = await subjectsCollection.updateOne(filter, {
      $set: {
        name: req.body.name,
        color: req.body.color,
      },
    });
    res.json({ updated: req.body });

    console.log(result);
  })

  // Delete Subject by ID
  .delete(async (req, res) => {
    const subjectObjectId = req.params.id;
    const result = await subjectsCollection.deleteOne({
      _id: new ObjectId(subjectObjectId),
    });
    res.json({ deleted: true });
    // console.log(result);
  });

module.exports = router;
