import React, { forwardRef } from 'react'
import Card from './Card'

const Display = React.forwardRef(({ pokemons }, ref) => {
    return (
        <div className='bg-red-300'>
            <div className='container px-6 flex flex-wrap flex-grow justify-around items-center bg-blue-400'>
                {pokemons.map((mon, index) => {
                    if (index == pokemons.length - 1)
                        return <Card pokemon={mon} ref={ref} key={index} />

                    return <Card pokemon={mon} key={index} />
                })}
            </div>
        </div>
    )
})

export default Display
