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
                
                />
            </Link>
        </div>
    </header>
  )
}
