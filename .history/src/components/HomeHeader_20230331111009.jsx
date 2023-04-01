import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header>
        <div className=''>
    <Link href='https://mail.google.com' className='hover:underline'>
        Gmail
    </Link>
    <Link href='https://image.google.com' className='hover:underline'>
        Images
    </Link>
    <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 '/>
    <button className='bg-blue-500 '>Sign in</button>
        </div>
        
    </header>
  )
}
