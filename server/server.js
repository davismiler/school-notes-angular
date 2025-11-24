const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const cors = require("cors");

// Configure CORS - allow environment variable for production
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ["http://localhost:4200"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const conn = require("./db/connection.js");

// Connect to database before starting server
async function startServer() {
  try {
    await conn.connectToDatabase();
    
    app.get("/", async (req, res) => {
      res.redirect("/api/v1/notes");
    });

    const notesRouter = require("./routes/notes");
    const subjectsRouter = require("./routes/subjects");
    app.use("/api/v1/subjects", subjectsRouter);
    app.use("/api/v1/notes", notesRouter);

    app.listen(PORT, () => {
      console.clear();
      console.log(`API is running on http://localhost:${PORT}/`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
