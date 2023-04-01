import Link from 'next/link'
import React from 'react'

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
    <TbGridDots/>
        </div>
        
    </header>
  )
}
