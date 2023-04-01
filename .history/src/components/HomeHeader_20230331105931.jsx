import Link from 'next/link'
import React from 'react'

export default function HomeHeader() {
  return (
    <header>
        <div className=''>
    <Link href='https://mail.google.com' className='hover:underline'>
        Gmail
    </Link>
    <Link href='https://mail.google.com' className='hover:underline'>
        I
    </Link>
        </div>
        
    </header>
  )
}
