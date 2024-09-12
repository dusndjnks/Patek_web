import React from 'react'
import Layout from '../component/Layout'
import data from '../data/data'

const Watches = () => {
  return (
    <Layout>
        <div className=''>
          <h1 className='text-3xl'>Explore Our Watches</h1>
            <div className='flex gap-10'>
            {
              data.map((item) => {
                return(
                  <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	                  <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	                <div className="flex flex-col justify-between p-6 space-y-8">
		                <div className="space-y-2">
			                <h2 className="text-3xl font-semibold tracking-wide">{item.title}</h2>
			                <p className="dark:text-gray-800">{item.description}</p>
                      <p>{item.Price}</p>
		                </div>
		                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-default-600 dark:text-gray-50">Read more</button>
	                </div>
                </div>
                )
              })
            }
            </div>
        </div>
    </Layout>
  )
}

export default Watches