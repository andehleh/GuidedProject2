const express = require( "express");
const MongoClient = require('mongodb').MongoClient;

const characterRouter = express.Router().get('/', (req, res) => {
  getCharacter(); 
  res.send(200)
});

var url = "mongodb://localhost:27017";
const characterDb = "characters";
const collectionName = "books"

async function getCharacter () {
    console.log("hello")
    const client = new MongoClient(url);
    // connect to the db server
    await client.connect();

    // set the database to use
    const db = client.db(characterDb);
    // set the collection to use
    const collection = db.collection(collectionName);

    console.log(collection.find().toArray())
    
}

module.exports = characterRouter; 