const express = require("express");
const router = express.Router();

const conn = require("../db/connection.js");

const subjectsCollection = conn.subjectsCollection;


router.get("/", async (req, res) => {
  const result = await subjectsCollection.find({}).toArray();
  res.json(result);
});

module.exports = router;
