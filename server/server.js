const express = require("express");
const app = express();
const PORT = 8080;

const db = require("./db/connection");

app.get("/", (req, res) => {
  res.json({"hello": "world"});
});

const notesRouter = require("./routes/notes");
app.use("/api/v1/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}/.`);
});
