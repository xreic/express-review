var restaurants = require('../restaurants.json');

const controllers = {
  // TODO
  getAll: (req, res) => {
    res.status(200).send(restaurants)
  },
  getOne: (req, res) => {
    var restaurant = restaurants[req.params.id - 1]
    if (restaurant) {
      res.status(200).send(restaurant);
    } else {
      res.status(404).send('No restaurant with id ' + req.params.id)
    }
  }
}

module.exports = controllers;