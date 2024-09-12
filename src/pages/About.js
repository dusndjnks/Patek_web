import React from 'react'
import Layout from '../component/Layout'

const About = () => {
  return (
    <Layout>
      <div className='bg-gray-200 h-full flex flex-col '>
      <div className='p-10 space-y-4 bg-gray-200 '>
        <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg" className=' lg:px-64' alt="" />
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold underline text-center'>"More Than Time: A Statement of Style & Craft"</h1>
        <p className='text-center  text-md lg:text-2xl'>At PATEK PHILIPPE , we believe that a watch is more than just a tool to tell time—it's an expression of style, identity, and craftsmanship. Since our inception, we have been dedicated to creating high-quality, precision-engineered watches that combine elegance with functionality. Every timepiece we produce is crafted with meticulous attention to detail, using the finest materials and cutting-edge technology.</p>
      </div>
      <div className='text-2xl bg-gray-400 m-10 text-black py-5 px-4 md:mx-20 mx-5  space-y-4 flex flex-col justify-center items-center text-center '>
        <h1 className='md:text-2xl text-lg font-semibold'>Own Your Time-Discover Your Perfect Watch Today!</h1>
        <button className='bg-gray-800 text-white md:text-2xl px-5 py-2'>Go To Store</button>
      </div>
      </div>
    </Layout>
  )
}

export default About