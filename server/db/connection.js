const { MongoClient, ServerApiVersion } = require("mongodb");
const URI = process.env.MDB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mdb = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function pingDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mdb.connect();
    // Send a ping to confirm a successful connection
    await mdb.db("admin").command({ ping: 1 });
    console.log("\nPinged your MongoDB Server!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mdb.close();
  }
}
// pingDB().catch(console.dir);

module.exports = { mdb, pingDB };
