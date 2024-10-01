import React from 'react'
import { NavLink, Outlet } from 'react-router-dom' 

const AdminLayout = () => {
  return (
    <div className=''>
        <div className='lg:text-4xl text-md md:text-2xl s:text-xl lg:space-x-40 space-x-5 px-2 s:space-x-16 md:space-x-32 px-20 bg-black text-white h-24 flex  items-center justify-center'>
        <NavLink to="."              className={({isActive}) => isActive ? "underline font-serif " : ""}>Dashboard</NavLink>
        <NavLink to="/admin/income"  className={({isActive}) => isActive ? "underline" : ""}>Income</NavLink>
        <NavLink to="/admin/review"  className={({isActive}) => isActive ? "underline" : ""}>Review</NavLink>
        <NavLink to="/admin/watches" className={({isActive}) => isActive ? "underline" : ""}>Watches</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default AdminLayout  