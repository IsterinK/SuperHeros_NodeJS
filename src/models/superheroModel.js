const mongoose = require('mongoose');
const superheroSchema = mongoose.Schema({
  superhero: {
    type: String,
    require: true
  },

  real_name: {
    type: String,
    require: true
  },

  feature: {
    type: Object,
    require: true,
    universe: {
      type: String,
      require: true
    },
    super_powers: {
      type: Array,
      require: true
    },
  },
});

const superheroCollection = mongoose.model('superheroCollection', superheroSchema)

module.exports = superheroCollection;
