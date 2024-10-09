import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../data/data'

const AdminWatchDetails = () => {

    const{id} = useParams()
    console.log(id);
    const watch = data.find((item) => Number(item.id) === Number(id))
    console.log(watch);
  return (
    <div className=''>
       <div className='s:m-13  sm:m-16 m-6 '>
       <div className='flex items-center md:gap-20 s:gap-14 gap-3 '>
        <img src={watch.image} alt="" className='md:w-96 s:w-72 w-40 ' />
        <div>
          <h1 className='md:text-5xl text-xl font-semibold  font-serif'>{watch.title}</h1>
          <h1 className='s:text-xl text-md'>{watch.rent}</h1>
        </div>
        </div>
        <div>
          <h1 className='text-3xl mt-5'>{watch.title}</h1>
          <h1 className='text-lg'>{watch.Price}</h1>
          <h1 className='text-lg mb-5'>{watch.description}</h1>
          <p className='md:w-96 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis neque, a optio nihil numquam, quibusdam et delectus porro voluptas, quas tempora in exercitationem dolore esse possimus excepturi autem totam.</p>
        </div>
       </div>
        <div className='flex items-center w-screen justify-center my-3 s:my-5 '>
      <Link to="/admin/watches" className='s:text-2xl text-lg font-bold bg-black text-white lg:px-8 xs:px-5  s:px-6 py-3 '>Back to the Watches</Link>
      </div>
    </div>
  )

}

export default AdminWatchDetails