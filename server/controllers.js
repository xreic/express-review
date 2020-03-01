var restaurants = require('../restaurants.json');

const controllers = {
  getAll: (request, response) => {
    response
      .status(200)
      .send(restaurants)
      .end();
  },

  getOne: (request, response) => {
    /**
     * Is 'id' because of app.get('/restaurants/:id', controllers.getOne);
     * 'id' will populate to whatever :id is
     */
    let restaurant = restaurants[request.params.id];

    if (restaurant) {
      response
        .status(200)
        .send(restaurant)
        .end();
    } else {
      response
        .status(404)
        .send(
          `No such restaurant ID in database. (Requested ID: ${request.params.id})`
        )
        .end();
    }
  },

  postOne: (request, response) => {
    /**
     * Anytime a client sends a request
     * Check if they sent something that exists
     */

    let name = request.body.name;
    let rating = request.body.rating;

    if (name !== undefined && rating !== undefined) {
      restaurants.push({
        /**
         * No need for id: restaurants.length
         * Because these are automatically created and incremented per insertion
         */
        restaurant_name: name,
        rating,
      });

      response
        .status(201)
        .send(`Added ${name} to database with a rating of ${rating}`)
        .end();
    } else {
      response
        .status(404)
        .send(`Invalid format.`)
        .end();
    }
  },

  deleteOne: (request, response) => {
    let restaurant = restaurant[request.params.id];

    if (restaurant) {
      restaurant.splice(request.params.id, 1);
      response
        .status(200)
        .send(`Remmoved restaurant at index ${request.params.id}.`)
        .end();
    } else {
      response
        .status(404)
        .send(`No restaurant at index. (Index: ${request.params.id}).`)
        .end();
    }
  },
};

module.exports = controllers;
