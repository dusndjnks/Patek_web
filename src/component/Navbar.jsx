import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
  const [extendNavbar,setExtendNavbar] = useState(false)
  return (
    <div className={`lg:text-3xl md:text-xl xs:text-md s:text-lg text-sm text-gray-800 flex items-center duration-500 justify-between lg:px-40 md:px-10  s:px-10 sm:px-5 px-2 lg:h-24 relative  bg-gray-300 ${extendNavbar ? "h-40" : "h-24"}`}>
        <div className='flex items-center'>
          <img src="https://www.freeiconspng.com/thumbs/watch-icon/watch-icon-1.png" className='s:w-16 w-12' alt="" />
      <Link to="/" className='font-semibold font-serif lg:text-3xl md:text-xl sm:w-auto w-20  text-gray-800'>PATEK PHILIPPE</Link>
      </div>
      <div className={`lg:space-x-5 md:space-x-2   duration-500 absolute md:static space-x-1 md:flex-row flex flex-col items-center ${extendNavbar ? "right-20" : "right-[-100px] top-[-100px]"}`}>
        <NavLink to="/about"  className={({isActive}) => isActive ? "text-gray-800 underline" : "text-black"}>About</NavLink>
        <NavLink to="/watches" className={({isActive}) => isActive ? "text-gary-800 underline" : "text-black"} >Watches</NavLink> 
        <NavLink to="/admin" className={({isActive}) => isActive ? "text-gray-800 underline" : "text-black"}  >Admin</NavLink>
      </div>  
      <div className='md:hidden' onClick={ () => {setExtendNavbar(open => !open)}}>
          {
            extendNavbar ? <CloseIcon/> : <MenuIcon/>
          }
        </div>    
    </div>
  )
}

export default Navbar