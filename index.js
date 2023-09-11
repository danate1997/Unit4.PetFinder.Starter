// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();
const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
res.send ("home page")
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
res.send(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner/:owner', (req, res) => {
    const { owner } = req.params;
    const pet = pets.find(pet => pet.owner === owner);
    res.send(pet);

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const { name } = req.params;
    const pet = pets.find(pet => pet.name === name);
    res.send(pet);
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;