import React from 'react'
import { Link } from 'react-router-dom'
import img from "../img1.webp"

const Home = () => {
  return ( 
        <div>
          <div className='bg-stone-600  w-full relative h-[650px] '>
            <img src={img} alt="" className='brightness-50 w-full h-full object-cover absolute mix-blend-overlay ' />
            <div className=' flex flex-col items-center justify-center text-white h-full p-10  space-y-10 '>
              <h1 className='text-3xl lg:text-4xl  md:text-2xl underline text-center'>Timeless Craftsmanship: Precision Watches for Every Moment</h1>
              <p className='lg:text-4xl md:text-2xl text-xl  text-center'>Founded with precision and innovation at its core, the watch company has been crafting timeless pieces that blend elegance with cutting-edge technology for discerning customers worldwide</p>
             <div>
             <Link to="/watches" className='text-black bg-white hover:bg-gray-300 cursor-pointer px-6 py-2 text-2xl rounded-lg'>Store</Link>
             </div>
            </div>
          </div>
      </div>
  )
}

export default Home

