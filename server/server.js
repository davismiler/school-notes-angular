const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:4200", // Allow only your Angular app to access the API
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"], // Specify allowed HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Specify allowed headers
  })
);

app.use(express.json());

const conn = require("./db/connection.js");
const db = conn.connectToDatabase();

app.get("/", async (req, res) => {
  res.redirect("/api/v1/notes");
});

const notesRouter = require("./routes/notes");
const subjectsRouter = require("./routes/subjects");
app.use("/api/v1/subjects", subjectsRouter);
app.use("/api/v1/notes", notesRouter);

app.listen(PORT || 8080, () => {
  console.clear();
  console.log(`API is running on http://localhost:${PORT}/.`);
});
