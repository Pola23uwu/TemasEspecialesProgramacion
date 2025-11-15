import { MongoClient } from "mongodb";

const uri = 'mongodb://localhost:27017/app'
const client = new MongoClient(uri);

const db = client.db();

export default db;