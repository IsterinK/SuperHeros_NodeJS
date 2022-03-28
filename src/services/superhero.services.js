const SuperheroModel = require('../models/superheroModel');

class SuperheroService{
  /* Promesas y funciones ásincronicas */
  /* Función ásincronicas devuelven una promesa */
  /* JS solo ejecuta un hilo -> Una cosa a la vez*/
  async createSuperHero(superhero){
    superhero.save();
    return superhero;
  }

  async listSuperhero(){
    return SuperheroModel.find();
  }

  async showSuperhero(superheroId){
    return SuperheroModel.findById({ _id: superheroId });
  }

  async editSuperhero(superheroId){
    return SuperheroModel.findById({ _id: superheroId }).then(
      (superheroFind) => {
        if(!superheroFind) throw Error('No se encontró el superHeroe');
        return SuperheroModel.updateOne(
          {superheroId},
          {superhero, realname, feature}
        );
      }
    );
  }

  async removeSuperhero(superheroId){
    const superhero_remove = SuperheroModel.findById({ _id:superheroId});
    return SuperheroModel.deleteOne(superhero_remove);
  }
};

module.exports = SuperheroService;