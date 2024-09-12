import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:text-3xl md:text-xl xs:text-md s:text-lg text-sm text-gray-800 flex items-center justify-between lg:px-40 md:px-10  s:px-10 sm:px-5 px-2 h-24 bg-gray-300'>
        <div className='flex items-center'>
          <img src="https://www.freeiconspng.com/thumbs/watch-icon/watch-icon-1.png" className='w-16' alt="" />
      <Link to="/" className='font-semibold font-serif lg:text-3xl md:text-xl sm:w-auto w-20  text-gray-800'>PATEK PHILIPPE</Link>
      </div>
      <div className='lg:space-x-5 md:space-x-2 space-x-1' >
        <Link to="/about" className='font-semibold'>About</Link>
        <Link to="/watches" className='font-semibold'>Watches</Link>
      </div>
    </div>
  )
}

export default Navbar