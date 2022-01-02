const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokeSchema = new Schema({
    Number: Number,
    Name: String,
    Name_lower: {
        type: String,
        lowercase: true
    },
    'Type 1': String,
    'Type 2': String,
    HP: Number,
    Attack: Number,
    Defense: Number,
    Sp: {
        ' Atk': Number,
        ' Def': Number
    },
    Speed: Number,
    Generation: String,
    Legendary: Boolean,
    date: {
        type: Date,
        default: Date.now()
    },
}, { collection: 'pokemon' });

module.exports = Pokemon = mongoose.model('Pokemon', PokeSchema)