const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://gpkothareb23:6pIkiZwJ2etxRiEn@apple.jvwwaej.mongodb.net/userDB")
.then(()=>{
    console.log("mongodb connected");
}).catch(()=>{
    console.log("failed");
})
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://gpkothareb23:6pIkiZwJ2etxRiEn@apple.jvwwaej.mongodb.net/?retryWrites=true&w=majority&appName=apple";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const newSchema =  new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = mongoose.model("collection", newSchema)
module.exports=collection