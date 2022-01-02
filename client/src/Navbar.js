import React, { useState, useEffect, useRef } from 'react'

function Navbar({ onInput }) {
  const inputRef = useRef()
  const [search, updateSearch] = useState('default State')

  useEffect(() => {
    const inp = inputRef.current
  }, [])

  useEffect(() => {
    inputRef.current.addEventListener('keyup', onKeyUp)

    return () => {
      inputRef.current.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  const onKeyUp = (event) => {
    const searchTerm = inputRef.current.value
    onInput(searchTerm) // make get request to server
  }

  return (
    <div>
      <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='#' className='flex'>
            <div className='flex-shrink-0 mr-2'>
              <img
                src={require('./img/pokemon.png')}
                alt=''
                className='h-12 w-12'
              />
            </div>
            <span className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
              PokeDex
            </span>
          </a>
          <div className='flex md:order-2'>
            <div className='hidden relative mr-3 md:mr-0 md:block'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                ref={inputRef}
                id='search-field'
                className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              ></input>
            </div>
            <button
              data-collapse-toggle='mobile-menu-3'
              type='button'
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='mobile-menu-3'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
