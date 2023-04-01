import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'

export default function HomeSearch() {
  return (
    <>
    <form className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input type='text' />
        <BsFillMicFill className='text-lg'/>

    </form>
    </>
  )
}
