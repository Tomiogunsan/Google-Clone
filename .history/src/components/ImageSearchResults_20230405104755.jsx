import Link from 'next/link'
import React from 'react'

export default function ImageSearchResults({results}) {
  return (
    <div className=''>
        hi
        {/* {results.items.map((result) => (
            <div key={result.link}>
                <div className='group'>
                    <Link href={result.image.contextLink}>
                        <img 
                        src={result.link} 
                        alt={result.title} />
                    </Link>
                </div>
            </div>
        ))} */}
    </div>
  )
}

