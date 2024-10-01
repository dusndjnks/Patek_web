import React from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom'


const Watches = () => {
  return (
    <div>
        <div className=''>
          <h1 className='text-4xl font-semibold underline pt-20 pl-20'>Explore Our Watches</h1>
            <div className='flex flex-wrap  gap-10 p-10 justify-center '>
            {
              data.map((item) => {
                return(
                  <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <Link to={`/watches/${item.id}`}>
                    <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	                <div className="flex flex-col justify-between p-6 space-y-8">
		                <div className="space-y-2">
			                <h2 className="text-3xl font-semibold tracking-wide">{item.title}</h2>
			                <p className="dark:text-gray-800">{item.description}</p>
                      <p>{item.Price}</p>
		                </div>
		                {/* <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-default-600 text-black">Read more</button> */}
	                </div></Link>
                </div>
                )
              })
            }
            </div>
        </div>
    </div>
  )
}

export default Watches