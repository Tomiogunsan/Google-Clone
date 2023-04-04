import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchHeaderOptions() {
  return (
    <div>
      <div className='flex items-center space-x'>
        <AiOutlineSearch className='text-md '/>
        <p>All</p>
      </div>
    </div>
  )
}
