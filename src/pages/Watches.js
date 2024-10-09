import React, { useState } from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom'
import SearchBar from '../component/SearchBar'


const Watches = () => {
  const [searchTerm , setSearchTerm] = useState("")
  return (
    <div>
        <div className='w-screen flex flex-col items-center transition-700 my-3'>
        <SearchBar  setSearchTerm={setSearchTerm} />
          <h1 className='md:text-4xl sm:text-4xl s:text-3xl text-xl font-semibold underline my-5'>Explore Our Watches</h1>
            <div className='flex flex-wrap  gap-10 s:p-10 p-8  justify-center '>
            {
              data && data.filter((item) => {
                return searchTerm.toLowerCase() === "" ? item : item.title.toLowerCase().includes(searchTerm)
              })
              .map((item) => {
                return(
                  <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <Link to={`/watches/${item.id}`}>
                    <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 xs:mx-2" />
	                <div className="flex flex-col justify-between p-6 space-y-8">
		                <div className="space-y-2">
			                <h2 className="text-3xl font-semibold tracking-wide">{item.title}</h2>
			                <p className="dark:text-gray-800">{item.description}</p>
                      <p>{item.Price}</p>
		                </div>
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