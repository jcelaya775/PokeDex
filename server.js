const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser');
require('dotenv').config()

// pokemon routes
const pokemons = require('./routes/api/pokemons');

const app = express();

// Note: Order of mongoose statements does not matter b/c mongoose will queue operations if necessary
// But, ideal order is 
const url = process.env.URL
mongoose.connect(url)

// Bodyparse Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
    res.send('Server Running...');
})

// Routes
app.use('/api/pokemons', pokemons)
app.use(express.static(path.resolve(__dirname, './src')));

// Launch Server
const port = process.env.PORT || 5000
app.listen(port, () => console.log('server running...'));   