import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <Outlet class="h-96"/>
        <Footer/>
    </div>
  )
}

export default Layout