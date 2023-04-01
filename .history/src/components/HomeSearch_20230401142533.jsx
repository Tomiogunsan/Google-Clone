"use client"

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function HomeSearch() {
    const router = useRouter();
const[input , setInput] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim())return;
        router.push(`/search/web?serachTerm=${input}`)


    }

   async  function randomSearch(){
        const response = a
    }
  return (
    <>
    <form 
    onSubmit={handleSubmit}
    className='flex w-full mt-5 mx-auto max-w-[90%] border
     border-gray-200 px-5 py-3 rounded-full hover:shadow-md 
     focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input type='text' className='focus:outline-none flex-grow'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        />
        <BsFillMicFill className='text-lg'/>

    </form>

    <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 '>
        <button
        onClick={handleSubmit}
        className='btn'>Google Search</button>
        <button 
        onClick={randomSearch}
        className='btn'>I Am Feeling Lucky</button>
    </div>
    </>
  )
}
