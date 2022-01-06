import React, { useState, useEffect, useRef, useCallback } from 'react'
import useSearch from './useSearch'
import Navbar from './Navbar'
import Display from './Display'
import LoadingSpinner from './LoadingSpinner'

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const observer = useRef()

  const searchPokemon = async (s) => {
    s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

    setQuery(s)
    setPageNumber(1)
  }

  const { mons, hasMore, loading, error } = useSearch(query, pageNumber)

  // console.log('mons:')
  // console.log(mons)

  return (
    <div>
      <Navbar onInput={searchPokemon} />
      {loading ? <LoadingSpinner className='h-fit w-fit flex justify-self-auto self-auto' /> :
        mons && <Display pokemons={mons} />}
    </div>
  )
}

export default App
