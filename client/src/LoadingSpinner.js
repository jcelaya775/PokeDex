import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='container h-screen pb-52 flex flex-col justify-center items-center'>
      <h1 className='text-xl'>Loading...</h1>
      <svg
        version='1.1'
        id='loader-1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='100px'
        height='100px'
        viewBox='0 0 50 50'
        style={{ enableBackground: '0 0 50 50' }}
      >
        <path
          fill='#eb3443'
          d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'
        >
          <animateTransform
            attributeType='xml'
            attributeName='transform'
            type='rotate'
            from='0 25 25'
            to='360 25 25'
            dur='0.6s'
            repeatCount='indefinite'
          />
        </path>
      </svg>
    </div>
  )
}

export default LoadingSpinner
