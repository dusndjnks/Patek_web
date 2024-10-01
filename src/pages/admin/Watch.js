import React from 'react'
import { Outlet , Link } from 'react-router-dom'
import data from '../../data/data'

const Watch = () => {
  return (
    <div>
        <div>
            <div className='w-screen my-10 text-center '>
                <h1 className='md:text-4xl s:text-2xl text-xl  underline font-semibold'>Your Listed Watches</h1>
            </div>
            {
                data.map((item) => {
                    return(
                        <Link to={`/admin/watches/${item.id}`}>
                            <div   className='flex items-center s:gap-6 gap-2  p-'>
                            <div>
                                <img src={item.image} alt="" className='' />
                            </div>
                           <div className='flex flex-col'>
                           <h1 className='s:text-4xl text-xl font-mono'>{item.title}</h1>
                           <h1 className='s:text-2xl text-md'>{item.Price}</h1>
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