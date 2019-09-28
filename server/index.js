const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// TODO

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.listen(port, console.log(`${port} is listening`))