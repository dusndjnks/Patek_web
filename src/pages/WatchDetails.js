import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data'
import { Link } from 'react-router-dom'



const WatchDetails = () => {
  const {id} = useParams()
  console.log(id);
  const watch = data.find((item) => Number(item.id) === Number(id))
  console.log(watch);
  
  return (
    <div className=' w-screen  flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center'>
      <img src={watch.image} alt="" className='px-80 py-10' />
        <h1 className='text-6xl'>{watch.title}</h1>
        <h1 className='text-3xl'>{watch.Price}</h1>
        <h1 className='text-3xl'>{watch.description}</h1>
        <p className='text-center px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet laboriosam totam similique atque! Non cupiditate nam numquam iusto. Eligendi consectetur perferendis voluptate fuga dicta odit temporibus nam sit illum! Et commodi est laboriosam, quia dignissimos doloribus distinctio facere adipisci?</p>
      </div>
      <div className='m-14'>
      <Link to="/watches" className='text-2xl font-bold bg-black text-white px-8 py-3 '>Back to the Watches</Link>
      </div>
    </div>

  )
}


export default WatchDetails