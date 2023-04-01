import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'

export default function HomeSearch() {
  return (
    <>
    <form className='flex w-full mt-5 mx-auto max-w-[90%] border
     border-gray-200 px-5 py-3 rounded-full hover:shadow-md 
     focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input type='text' className='focus:outline-none flex-grow'/>
        <BsFillMicFill className='text-lg'/>

    </form>

    <div className='flex flex-col space-y-2 '>
        <button className='btn'>Google Search</button>
        <button className='btn'>I Am Feeling Lucky</button>
    </div>
    </>
  )
}
