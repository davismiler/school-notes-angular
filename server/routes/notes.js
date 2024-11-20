const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Notes List");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`GET Note With ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE Note with ID`);
  });

router.get("/new", (req, res) => {
  res.send("New Note");
});

module.exports = router;
