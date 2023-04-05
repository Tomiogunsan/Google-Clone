import Link from 'next/link'
import React from 'react'

export default function ImageSearchResults({results}) {
  return (
    <div >
    <div className=''>
        
        {results.items.map((result) => (
            <div key={result.link}>
                <div className='group'>
                    <Link href={result.image.contextLink}>
                        <img 
                        src={result.link} 
                        alt={result.title} />
                    </Link>
                    <Link href={result.image.contextLink}>
                       <h2>{result.title}</h2>
                    </Link>
                    <Link href={result.image.contextLink}>
                        {result.displayLink}
                    </Link>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

