import React from 'react'
import { Outlet , Link } from 'react-router-dom'
import data from '../../data/data'

const Watch = () => {
  return (
    <div>
        <div>
            {
                data.map((item) => {
                    return(
                        <Link to={`/admin/watches/${item.id}`}>
                            <div   className='flex items-center gap-6  p-5'>
                            <div>
                                <img src={item.image} alt="" className=' h-40 ' />
                            </div>
                           <div className='flex flex-col'>
                           <h1 className='text-4xl font-mono'>{item.title}</h1>
                           <h1 className='text-2xl'>{item.Price}</h1>
                           </div>
                           </div>
                        </Link>
                    )
                })
            }
        </div>
        <Outlet/>
    </div>
    
  )
}

export default Watch