import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri';
import {TbGridDots} from 'react-icons/tb'

export default function SearchHeader() {
  return (
    <header>
        <div>
            <Link href={'/'}>
                <Image 
                width='120'
                height='40'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
                alt='google image'
                />
            </Link>
            <div>
                <SearchBox />
            </div>
            <div>
              <RiSettings3Line  className='header-icon'/>
              <TbGridDots className='header-icon'/>
            </div>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded'>Sign in</button>

        </div>
    </header>
  )
}
