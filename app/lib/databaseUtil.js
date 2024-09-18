import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://mostapha:<db_password>@verbloq.nncxu.mongodb.net/?retryWrites=true&w=majority&appName=verbloq";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connect(database_name) {
  await client.connect();
  return client.db(database_name);
}
