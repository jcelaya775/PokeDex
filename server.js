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
const url = process.env.URL
mongoose.connect(url)

// Bodyparse Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
    res.sendFile('Server Running...');
})

// Routes
app.use('/api/pokemons', pokemons)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Launch Server
const port = process.env.PORT || 5000
app.listen(port, () => console.log('server running...'));   