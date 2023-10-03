const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";
const characterDb = "swapi";
const collectionName = "characters"

async function getCharacter () {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(characterDb);
    const collection = db.collection(collectionName);
    return await collection.find().toArray()
}

module.exports = getCharacter; 