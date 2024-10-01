import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../data/data'

const AdminWatchDetails = () => {

    const{id} = useParams()
    console.log(id);
    const watch = data.find((item) => Number(item.id) === Number(id))
    console.log(watch);
  return (
    <div className='m-20'>
        <div className='flex items-center gap-20 '>
        <img src={watch.image} alt="" className='w-96 ' />
        <div>
          <h1 className='text-5xl font-semibold  font-serif'>{watch.title}</h1>
          <h1 className='text-xl'>{watch.rent}</h1>
        </div>
        </div>
        <div>
          <h1 className='text-3xl mt-5'>{watch.title}</h1>
          <h1 className='text-lg'>{watch.Price}</h1>
          <h1 className='text-lg mb-5'>{watch.description}</h1>
          <p className='w-96'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis neque, a optio nihil numquam, quibusdam et delectus porro voluptas, quas tempora in exercitationem dolore esse possimus excepturi autem totam.</p>
        </div>
        <div  className='flex items-center w-auto justify-center'>
        <Link to="/admin/watches" className='text-2xl font-bold bg-black text-white px-8 py-3 '>Back to the Watches</Link>
        </div>
    </div>
  )

}

export default AdminWatchDetails