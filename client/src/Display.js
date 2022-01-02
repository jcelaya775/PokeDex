import React from 'react'
import Card from './Card'

function Display({ pokemons }) {
    return (
        <div className='bg-red-300'>
            <div className='container px-6 flex flex-wrap flex-grow justify-around items-center bg-blue-400'>
                {pokemons.map((mon, key) => {
                    return <Card pokemon={mon} key={key} />
                })}
            </div>
        </div>
    )
}

export default Display
