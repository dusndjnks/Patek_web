import React from 'react'
import { NavLink, Outlet } from 'react-router-dom' 

const AdminLayout = () => {
  return (
    <div className=''>
        <div className='text-4xl space-x-40 px-20 bg-black text-white h-24 flex  items-center justify-center'>
        <NavLink to="."              className={({isActive}) => isActive ? "underline font-serif " : ""}>Dashboard</NavLink>
        <NavLink to="/admin/income"  className={({isActive}) => isActive ? "underline" : ""}>Income</NavLink>
        <NavLink to="/admin/review"  className={({isActive}) => isActive ? "underline" : ""}>Review</NavLink>
        <NavLink to="/admin/watches" className={({isActive}) => isActive ? "underline" : ""}>Watches</NavLink>
        </div>
            <div className='w-screen my-10 text-center '>
            <h1 className='text-4xl  underline font-semibold'>Your Listed Watches</h1>
            </div>
        <Outlet/>
    </div>
  )
}

export default AdminLayout  