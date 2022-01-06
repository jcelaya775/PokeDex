import React, { useState, useEffect, useRef, useCallback } from 'react'
import useSearch from './useSearch'
import Navbar from './Navbar'
import Display from './Display'
import LoadingSpinner from './LoadingSpinner'

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { mons, hasMore, loading, error } = useSearch(query, pageNumber)

  const observer = useRef()
  const lastElementRef = useCallback((node) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore)
        setPageNumber(prev => prev + 1)
    })
    if (node) observer.current.observe(node)
    console.log(node);
  }, [loading, hasMore])

  const searchPokemon = async (s) => {
    s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

    setQuery(s)
    setPageNumber(1)
  }

  return (
    <div>
      <Navbar onInput={searchPokemon} />
      {loading ? <LoadingSpinner className='h-fit w-fit flex justify-self-auto self-auto' /> :
        mons && <Display ref={lastElementRef} pokemons={mons} />}
    </div>
  )
}

export default App
