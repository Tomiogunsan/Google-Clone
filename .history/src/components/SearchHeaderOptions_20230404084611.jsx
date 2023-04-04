'use client'

import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { usePathname } from 'next/navigation'

export default function SearchHeaderOptions() {
  const pathname = usePathname();

  return (
    <div>
      <div className={`flex items-center space-x-1 border-b-4 border-transparemnt active:text-blue-500
       cursor-pointer pb-3 px-2  ${pathname ==}`}>
        <AiOutlineSearch className='text-md '/>
        <p>All</p>
      </div>
    </div>
  )
}
