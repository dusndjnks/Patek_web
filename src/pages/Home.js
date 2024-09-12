import React from 'react'
import Layout from '../component/Layout'

const Home = () => {
  return (
   <Layout>
      <div >
        <img src="http://www.time4diamonds.com/media/mgs_blog/i/m/img_4247_1.jpg" className='bg-cover relative brightness-50 h-full w-screen' alt="" />
        <div className='absolute lg:top-96 md:top-48 top-32 lg:px-16 md:px-10 px-2 flex flex-col items-center justify-center text-white  space-y-5'>
        <h1 className='text-lg lg:text-4xl  md:text-2xl underline text-center '>Timeless Craftsmanship: Precision Watches for Every Moment</h1>
        <p className='lg:text-4xl md:text-2xl text-sm  text-center'>Founded with precision and innovation at its core, the watch company has been crafting timeless pieces that blend elegance with cutting-edge technology for discerning customers worldwide</p>
        <button className='bg-indigo-200   md:text-lg   rounded-full text-gray-800 lg:px-10 xs:px-5 md:px-8 md:py-3 px-1 lg:text-3xl '>Store</button>
        </div>
      </div>
   </Layout>
  )
}

export default Home

