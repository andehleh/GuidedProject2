const express = require("express");
const { getCharacter, getFilms } = require("./controller");

const characterRouter = express.Router().get('/', async (req, res) => {
    const characters = await getCharacter();
    res.status(200).send(characters)
});

const filmsRouter = express.Router().get('/', async (req, res) => {
    const films = await getFilms(); 
    res.status(200).send(films)
});

const planetsRouter = express.Router().get('/', async (req, res) => {
    const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const charactersIdRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const filmsIdRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const planetsIdRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const filmsIdCharactersRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const filmsIdPlanetsRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});


const filmsCharactersIdFilmsRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const planetIdFilmsRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

const planetsIdCharactersRouter = express.Router().get('/', async (req, res) => {
    // const characters = await getCharacter(); 
    // res.status(200).send(characters)
});

module.exports = { filmsIdPlanetsRouter, characterRouter, filmsRouter, planetsRouter, charactersIdRouter, filmsIdRouter, planetsIdRouter, filmsIdCharactersRouter, filmsCharactersIdFilmsRouter, planetIdFilmsRouter, planetsIdCharactersRouter }; 