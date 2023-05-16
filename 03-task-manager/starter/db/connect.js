// const mongoose = require('mongoose')
// const connectionString = 'mongodb+srv://admin:1234@nodeexpress.wn22dl9.mongodb.net/?retryWrites=true&w=majority'

// mongoose
// .connect(connectionString, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useFindAndModify:false,
//     useCreateIndex: true
// })
// .then(()=>console.log('Connecting to mongo DB'))
// .catch(err=>console.log(err)) 



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://john_cena_31:1234@nodeexpress.wn22dl9.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);