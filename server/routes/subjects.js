const express = require("express");
const router = express.Router();

const conn = require("../db/connection.js");

const subjectsCollection = conn.subjectsCollection;

router
  .route("/")

  // Get All the Subjects
  .get(async (req, res) => {
    const subjects = await subjectsCollection.find({}).toArray();
    res.json(subjects);
  })

  // Create a new subject
  .post(async (req, res) => {
    const subject = await subjectsCollection.insertOne(req.body);
    res.status(201).json(subject);
    res.json(subject);
  });

// Get Subject by Id
router
  .route("/:id")
  .get(async (req, res) => {
    // console.log(req.body);
    const subjectID = Number(req.params.id);
    const result = await subjectsCollection
      .find({ id: subjectID }, { projection: { _id: 0 } })
      .toArray();

    res.json(result);
  })
  .put(async (req, res) => {
    const subjectID = Number(req.params.id);
    const filter = { id: subjectID };

    const result = await myColl.updateOne(filter, {
      $set: {
        name: req.body.name,
        color: req.body.color,
      },
    });

    res.json({});
  });

module.exports = router;

// {
//   "id": 23,
//   "title": "Note Title",
//   "content": "Lorem Ipsum..",
//   "date": "2024-01-09",
//   "time": "22:00"
//   "subject": {
//     "id": "ObjectId(3453453453)",
//   },
// }

// {
//   id: ObjectId(34534)
//   name: "Maths",
//   color: "Red",
//   isEditing: false
// }

// MongoDB Query
// [
//   {
//     "id": 1,
//     "name": "Biology",
//     "color": "#4CAF50",
//     "isEditing": false
//   },
//   {
//     "id": 2,
//     "name": "Computer Science",
//     "color": "#2196F3",
//     "isEditing": false
//   },
//   {
//     "id": 3,
//     "name": "Mathematics",
//     "color": "#FF9800",
//     "isEditing": false
//   },
//   {
//     "id": 4,
//     "name": "Astronomy",
//     "color": "#9C27B0",
//     "isEditing": false
//   },
//   {
//     "id": 5,
//     "name": "Economics",
//     "color": "#795548",
//     "isEditing": false
//   }
// ]
