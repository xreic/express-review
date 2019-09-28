var restaurants = require('../restaurants.json');

const controllers = {
  // TODO
  getAll: (req, res) => {
    // THIS IS WHERE WE'D GET DATA FROM OUR DATABASE
    res.status(200).send(restaurants)
  },

  getOne: (req, res) => {
    // THIS IS WHERE WE'D GET DATA FROM THE DATABASE
    var restaurant = restaurants[req.params.id - 1]
    if (restaurant) {
      res.status(200).send(restaurant);
    } else {
      res.status(404).send('No restaurant with id ' + req.params.id)
    }
  },

  postRestaurant: ({ body }, res) => {
    // THIS IS WHERE WE'D ADD DATA TO THE DATABASE
    if (body.name && body.rating) {
      restaurants.push({
        restaurant_name: body.name,
        rating: body.rating
      });
      res.status(201).send('Added ' + body.name + ' to restaurants')
    } else {
      res.status(400).send('Invalid restaurant format');
    }

  },

  deleteRestaurant: ({ params }, res) => {
    var restaurant = restaurants[params.id]
    if (restaurant) {
      // THIS IS WHERE WE'D USE OUR DATABASE
      restaurants.splice(params.id, 1);
      res.status(200).send('Removed restaurant at index ' + params.id)
    } else {
      res.status(404).send('No restaurant at index ' + params.id)
    }
  }
}

// Why won't this data persist?
module.exports = controllers;