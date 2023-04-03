'use client'

import { useSearchParams } from 'next/navigation';

import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx';
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');
  return (
    <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center '>
      <input type='text' className='w-full focus:outline-none '
      value={term}
      />
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2'/>
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 '/>
      <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer '/>
    </form>
  )
}
