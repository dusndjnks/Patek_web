import React from 'react'

const SearchBar = ({setSearchTerm}) => {
  return (
    <div>
        <form>
        <input type="text" placeholder='Type Here' className='bg-black border-none outline-none text-white px-5 py-2 rounded-lg text-2xl'  onChange={(e) => {setSearchTerm(e.target.value)}}/>
        </form>
    </div>
  )
}


export default SearchBar
    