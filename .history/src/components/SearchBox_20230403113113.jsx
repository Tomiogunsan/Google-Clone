import React from 'react'
import {RxCross2} from 'react-icons/rx';
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

export default function SearchBox() {
  return (
    <form className='flex'>
      <input type='text' className='w-full focus:outline-none '/>
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2'/>
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 '/>
      <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer '/>
    </form>
  )
}
