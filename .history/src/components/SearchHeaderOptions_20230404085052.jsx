'use client'

import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router';

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
function selectTab(tab){

}

  return (
    <div>
      <div 
      onClick={()=> selectTab('All')}
      className={`flex items-center space-x-1 border-b-4 border-transparemnt active:text-blue-500
       cursor-pointer pb-3 px-2  ${pathname === '/search/web' && '!text-blue-600 !border-blue-600'}`}>
        <AiOutlineSearch className='text-md '/>
        <p>All</p>
      </div>
    </div>
  )
}
