const express = require('express');
const superheroRoute = express.Router();
const superheroSchema = require('../models/superheroModel');
const SuperheroService = require('../services/superhero.services');
/* Crear una instancia de la clase superhero service */
const service = new SuperheroService();

/* Métodos */

/* POST */
superheroRoute.post('/superhero', async(req,res)=>{
  const superhero = superheroSchema(req.body);
  await service
   .createSuperHero(superhero)
   .then((superheroBody) => res.status(201).json({message: superheroBody}))
   .catch((error)=>res.status(404).json({message: error}));
});

/* GET */
superheroRoute.get('/superhero', async(req,res)=>{
  const superheroSchema = await service
    .listSuperhero()
    .then((superheroBody) => res.status(200).json({message:superheroBody}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* GET */
superheroRoute.get('/:superHeroId', async(req,res)=>{
  const {superHeroId} = req.params;
  const superheroes = await service
    .showSuperhero(superHeroId)
    .then((superheroes) => res.status(200).json({superheroes}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* PUT */
superheroRoute.put('/:superHeroId', async(req,res) => {
  const {superHeroId} = req.params;
  const {superhero, realname, feature} = req.body;
  await service
    .editSuperhero(superHeroId, superhero, realname, feature)
    .then((superheroes) => res.status(200).json(superheroes))
    .catch((err) => res.status(404).json({ message: err}));
});

/* DELETE */
superheroRoute.delete('/:superHeroId', async(req,res)=>{
  const {superHeroId} = req.params;
  await service
  .removeSuperhero(superHeroId)
  .then((data) => res.status(200).json(data))
  .catch((err) => res.status(404).json({ message: err}));
});

module.exports = superheroRoute;
