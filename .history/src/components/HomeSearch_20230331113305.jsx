import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/'

export default function HomeSearch() {
  return (
    <>
    <form>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input type='text' />
        <BsFillMicFill/>

    </form>
    </>
  )
}
