const express = require('express');
const router = express.Router();

// Pokemon Model
const Pokemon = require('../../models/Pokemon');

// @route   GET api/pokemons
// @desc    Get all pokemons
// @accss   Public
router.get('/', (req, res) => {
    Pokemon.find()
        .sort({ name: 1 })
        .then(pokemons => {
            res.json(pokemons);
        });

});

// @route   GET api/pokemons/name
// @desc    Get pokemons that match a specified name
// @accss   Public
router.get('/:name', (req, res) => {
    const s = req.params.name;

    Pokemon.find({ Name: { "$regex": s, "$options": "i" } })
        .then(pokemons => {
            res.json(pokemons);
        })
        .catch(err => console.log(err))
});

// @route   POST api/pokemons
// @desc    Create a pokemon
// @accss   Public (usually private if using authentication)
router.post('/', async (req, res) => {
    const newPokemon = new Pokemon({
        Number: req.body.Number,
        Name: req.body.Name,
        'Type 1': req.body['Type 1'],
        'Type 2': req.body['Type 2'],
        Name: req.body.HP,
        Attack: req.body.Attack,
        Defense: req.body.Defense,
        Sp: {
            Atk: req.body.Sp[' Atk'],
            Def: req.body.Sp[' Def']
        },
        Speed: req.body.Speed,
        Generation: req.body.Generation,
        Legendary: req.body.Legendary,
    });

    try {
        pokemon = await newPokemon.save()
        res.json(pokemon)
    } catch (e) {
        return next(e)
    }
});

// @route   DELETE api/pokemons/id
// @desc    Delete a pokemon
// @accss   Public (usually private if using authentication)
router.delete('/:id', (req, res) => {
    Pokemon.findById(req.params.id)
        .then(pokemon => pokemon.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;