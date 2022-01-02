import React from 'react'

function Card({ pokemon }) {
  let name = pokemon.Name
  let type_1 = pokemon['Type 1']
  let type_2 = pokemon['Type 2']
  let hp = pokemon.HP
  let attack = pokemon.Attack
  let defense = pokemon.Defense
  let speed = pokemon.Speed
  let generation = pokemon.Generation

  return (
    <div>
      <div className='mx-auto h-[320px] flex flex-col items-center text-center justify-center tracking-widest text-white text-xl bg-slate-500 py-8 m-8 w-72 rounded-xl'>
        <h1>Name: {name}</h1>
        <h1>Type 1: {type_1}</h1>
        <h1>Type 2: {type_2}</h1>
        <h1>HP: {hp}</h1>
        <h1>Attack: {attack}</h1>
        <h1>Defense: {defense}</h1>
        <h1>Speed: {speed}</h1>
        <h1>Generation: {generation}</h1>
      </div>
    </div>
  )
}

export default Card
