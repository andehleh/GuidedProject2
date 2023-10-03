const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";
const DB= "swapi";
const characterCollection = "characters";
const filmsCollection = "films";
const planetCollection = "planets"

async function getCharacter() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(DB);
    const collection = db.collection(characterCollection);
    return await collection.find().toArray()
}

async function getFilms() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(DB);
    const collection = db.collection(filmsCollection);
    return await collection.find().toArray()
}

async function getPlanets() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(DB);
    const collection = db.collection(planetCollection);
    return await collection.find().toArray()
}

async function getCharactersId(id) {
    console.log(id)
    const client = new MongoClient(url);
    await client.connect(); 
    const db = client.db(DB);
    const collection = db.collection(characterCollection);
    return await collection.find({getCharactersId: id}).toArray()
}

async function getFilmsIdPlanets() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(DB);
    const collection = db.collection(planetCollection);
    return await collection.find().toArray()
}

module.exports = {
    getFilmsIdPlanets,
    getCharacter,
    getFilms,
    getPlanets,
    getCharactersId,
}

// module.exports = {
//     getFilmsIdPlanets,
//     getCharacter,
//     getFilms,
//     getPlanets,
//     getCharactersId,
//     getFilmsId,
//     getPlanetsId,
//     getFilmsIdCharacters,
//     getFilmsCharactersIdFilms,
//     getPlanetIdFilms,
//     getPlanetsIdCharacters
// };