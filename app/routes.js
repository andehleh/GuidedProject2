const express = require( "express");
const getCharacter =  require("./controller");

const characterRouter = express.Router().get('/', async (req, res) => {
    const characters = await getCharacter(); 
    res.status(200).send(characters)
  });

module.exports = characterRouter; 