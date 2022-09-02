import React from 'react'

function hero(props) {
  return (
    <>
    <div className='mt-36 max-w-7xl mx-auto'>
    <a href='/blogs'><img className='w-16 ml-3' src='https://res.cloudinary.com/dckwf6med/image/upload/v1662136014/Web%20Dev%20Projects/Frame_ogtaop.svg'/></a>
    <h1 className='sm:ml-7 max-w-4xl text-center sm:text-left !leading-tight mt-4 text-white text-4xl xsm:text-3xl pr-7 sm:text-4xl md:6xl md-lg:text-5xl lg:text-6xl font-bold '>{props.title}</h1>
    <p className='sm:ml-7 mt-3 text-center sm:text-left text-gray-subtext font-extralight'>{props.readTime}</p>    </div>
    <img className='w-screen mt-16' src={props.image}/>
    </>
  )
}

export default hero