const express = require('express');
const app = express();
const path = require('path');
const controllers = require('./controllers');
const port = 3003;

/**
 * Middleware to use when creating express servers
 *  express.json() = body parsing middleware
 *    Means all things coming in will be in JSON
 */
app.use(express.json());

// Use the static files at the designated path
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants', controllers.getAll);

/**
 * :id lets us send request with different paramneters
 * Data populates inside req.params
 * Place at the end to avoid catching the wrong request endpoints
 */
app.get('/restaurants/:id', controllers.getOne);

app.post('/restaurants', controllers.postOne);

app.delete('/restaurants/:id', controllers.deleteOne);

app.listen(port, () => console.log(` listening to port ${port}`));
