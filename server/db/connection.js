const { MongoClient } = require("mongodb");

const URI = process.env.MDB_URL;
const client = new MongoClient(URI);
const database = client.db("schoolnotes");

const notesCollection = database.collection("notes");
const subjectsCollection = database.collection("subject");

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

// async function run() {
//   try {
//     // Connect to the "insertDB" database and access its collections
//     const client = new MongoClient(URI);
//     const database = client.db("schoolnotes");

//     const notesCollection = database.collection("notes");
//     const subjectCollection = database.collection("subject");

//     // Create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     };
//     // Insert the defined document into the "haiku" collection
//     const result = await notesCollection.insertOne(doc);
//     // Print the ID of the inserted document
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     // Close the MongoDB client connection
//     await client.close();
//   }
// }
// // Run the function and handle any errors
// run().catch(console.dir);
