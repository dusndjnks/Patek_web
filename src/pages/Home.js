import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return ( 
      <div >
        {/* <img src="http://www.time4diamonds.com/media/mgs_blog/i/m/img_4247_1.jpg" className='bg-cover relative brightness-50  h-full w-screen' alt="" />
        <div className='absolute lg:top-72 md:top-48 sm:top-40 top-32 lg:px-16 md:px-10 sm:px-8 px-2 flex flex-col items-center justify-center text-white  space-y-5'>
        <h1 className='text-lg lg:text-4xl  md:text-2xl underline text-center '>Timeless Craftsmanship: Precision Watches for Every Moment</h1>
        <p className='lg:text-4xl md:text-2xl text-sm  text-center'>Founded with precision and innovation at its core, the watch company has been crafting timeless pieces that blend elegance with cutting-edge technology for discerning customers worldwide</p>
        <Link to="/watches" className='bg-white md:text-lg rounded-lg text-black lg:px-10 xs:px-5 md:px-8 md:py-3 px-1 lg:text-4xl '>Store</Link>
        </div> */}

        <div>
          <div className='bg-stone-600  w-full relative h-screen '>
            <img src="http://www.time4diamonds.com/media/mgs_blog/i/m/img_4247_1.jpg" alt="" className='brightness-50 w-full h-full object-cover absolute mix-blend-overlay ' />
            <div className=' flex flex-col items-center justify-center text-white  space-y-10 p-10'>
              <h1 className='text-2xl lg:text-4xl  md:text-2xl underline text-center'>Timeless Craftsmanship: Precision Watches for Every Moment</h1>
              <p className='lg:text-4xl md:text-2xl text-lg  text-center'>Founded with precision and innovation at its core, the watch company has been crafting timeless pieces that blend elegance with cutting-edge technology for discerning customers worldwide</p>
              <Link to="/watches" className='bg-white md:text-lg rounded-lg text-black lg:px-10 xs:px-5 md:px-8 md:py-3 px-1 lg:text-4xl '>Store</Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home

