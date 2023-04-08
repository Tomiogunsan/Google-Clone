'use client'

import { useRouter, useSearchParams } from 'next/navigation';

import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx';
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'


export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');


  function handleSubmit(e){
    e.preventDefault();
    if(!term.trim())return;
    router.push(`/search/web?searchTerm=${term}`)

  }

  return (
    <form 
    onSubmit={handleSubmit}
    className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center '>
      <input type='text' className='w-full focus:outline-none '
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      />
      
    </form>
  )
}
