import React from 'react'
import InputItem from './InputItem'

function SearchSection() {
  return (
    <div className='p-2 md:pd-6 
    border-[2px] rounded-xl'>
        <p className='text-[20px]'>Get a Ride</p>
        <InputItem type='source'/>
        <InputItem type='destination'/>
        <button className='bg-black p-3 w-full mt-5 text-white rounded-lg'>Search</button>

    </div>
  )
}

export default SearchSection