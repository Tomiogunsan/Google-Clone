import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
                <SearchN
            </div>
        </div>
    </header>
  )
}
