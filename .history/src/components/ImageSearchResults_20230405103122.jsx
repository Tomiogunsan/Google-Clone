import React from 'react'

export default function ImageSearchResults({results}) {
  return (
    <div className=''>
        {results.items.map((result) => (
            <div key={result.link}>
                <div className='group'>
                    <Link href={result.link}>
                    
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

