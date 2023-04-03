import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons'

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

        </div>
    </header>
  )
}
