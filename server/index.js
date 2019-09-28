const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers.js');
// TODO

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/restaurants', controllers.getAll);
app.get('/restaurants/:id', controllers.getOne)

app.listen(port, console.log(`${port} is listening`))