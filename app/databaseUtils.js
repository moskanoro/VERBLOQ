import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://mostapha:<db_password>@verbloq.nncxu.mongodb.net/?retryWrites=true&w=majority&appName=verbloq";
import { NextResponse } from 'next/server';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect(database_name) {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    return client.db(database_name);
}


export async function getUserName(uid) { 
    try{
        const database = await connect('profile')
        const query = await database.collection('profile').findOne({'_id': uid}).toArray()
        console.log(query)
        return NextResponse.json({data: query})
    } catch(err) {
        console.log(err)
    }
}