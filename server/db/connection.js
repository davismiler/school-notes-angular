const { MongoClient } = require("mongodb");

const URI = process.env.MDB_URL;
const client = new MongoClient(URI);

const database = client.db("schoolnotes");

const notesCollection = database.collection("notes");
const subjectsCollection = database.collection("subjects");

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Could not connect to MongoDB: ", error);
    throw error;
  }
}

module.exports = {
  client,
  database,
  notesCollection,
  subjectsCollection,
  connectToDatabase,
};