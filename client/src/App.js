import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Display from './Display'
import Card from './Card'
import LoadingSpinner from './LoadingSpinner'

function App() {
  const [mons, setMons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = 'http://localhost:5000/api/pokemons'

    setTimeout(async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMons(data)
          setLoading(true)
        })
        .catch((err) => console.log(err))

      setLoading(false)
    })
  }, [])

  const searchPokemon = async (s) => {
    s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
    const url = `http://localhost:5000/api/pokemons/${s}`

    setLoading(true)

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMons(data)
      })
      .catch((err) => console.log(err))

    setLoading(false)
  }

  return (
    <div>
      <Navbar onInput={searchPokemon} />
      {loading ? <LoadingSpinner className='h-fit w-fit flex justify-self-auto self-auto' /> :
        mons && <Display pokemons={mons} />}
    </div>
  )
}

export default App
