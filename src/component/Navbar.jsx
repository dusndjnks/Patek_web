import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
  const [extendNavbar,setExtendNavbar] = useState(false)
  return (
    <div className={`lg:text-3xl md:text-xl md:items-center  text-lg text-gray-800 flex xs:pt-5 s:pt-3 md:pt-0  items-start duration-500 justify-between lg:px-40 md:px-10  s:px-10 sm:px-5 px-4 lg:h-24 relative  bg-gray-300 ${extendNavbar ? "h-48" : "h-24"}`}>
        <div className='flex'>
          <img src="https://www.freeiconspng.com/thumbs/watch-icon/watch-icon-1.png" className='w-16' alt="" />
      <Link to="/" className='font-semibold font-serif lg:text-3xl md:text-xl sm:w-auto w-20 md:pt-3 s:pt-5 pt- text-gray-800'>PATEK PHILIPPE</Link>
      </div>
      <div className={`lg:space-x-5 md:space-x-2   items-end  duration-500 absolute md:static space-x-1 md:flex-row flex flex-col ${extendNavbar ? "right-16  top-16" : "top-40 right-16 "}`}>
        <NavLink to="/about"  className={({isActive}) => isActive ? "text-gray-800 underline" : "text-black"}>About</NavLink>
        <NavLink to="/watches" className={({isActive}) => isActive ? "text-gary-800 underline" : "text-black"} >Watches</NavLink> 
        <NavLink to="/admin" className={({isActive}) => isActive ? "text-gray-800 underline" : "text-black"}  >Admin</NavLink>
      </div>  
      <div className={`md:hidden pt-3 pr-5 s:pt-5`} onClick={ () => {setExtendNavbar(open => !open)}}>
          {
            extendNavbar ? <CloseIcon/> : <MenuIcon/>
          }
        </div>    
    </div>
  )
}

export default Navbar