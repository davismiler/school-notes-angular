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
    try {
      const result = await subjectsCollection.find({}).toArray();
      res.json(result);
    } catch (error) {
      console.error("Error fetching subjects:", error);
      res.status(500).json({ error: "Failed to fetch subjects" });
    }
  })

  // Create a new subject
  .post(async (req, res) => {
    try {
      if (!req.body.name || !req.body.color) {
        return res.status(400).json({ error: "Name and color are required" });
      }
      const result = await subjectsCollection.insertOne(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error creating subject:", error);
      res.status(500).json({ error: "Failed to create subject" });
    }
  });

router
  .route("/:id")

  // Update Subject By ID
  .patch(async (req, res) => {
    try {
      const subjectObjectId = req.params.id;
      const filter = { _id: new ObjectId(subjectObjectId) };

      if (!req.body.name || !req.body.color) {
        return res.status(400).json({ error: "Name and color are required" });
      }

      const result = await subjectsCollection.updateOne(filter, {
        $set: {
          name: req.body.name,
          color: req.body.color,
        },
      });

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Subject not found" });
      }

      res.json({ updated: req.body });
    } catch (error) {
      console.error("Error updating subject:", error);
      res.status(500).json({ error: "Failed to update subject" });
    }
  })

  // Delete Subject by ID
  .delete(async (req, res) => {
    try {
      const subjectObjectId = req.params.id;
      const result = await subjectsCollection.deleteOne({
        _id: new ObjectId(subjectObjectId),
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Subject not found" });
      }

      res.json({ deleted: true });
    } catch (error) {
      console.error("Error deleting subject:", error);
      res.status(500).json({ error: "Failed to delete subject" });
    }
  });

module.exports = router;
