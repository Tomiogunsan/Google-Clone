import React from 'react'

export default function ImageSearchResults({results}) {
  return (
    <div className=''>
        {results.items.map((result) => (
            <div key={result}>
                <div className='group'>

                </div>
            </div>
        ))}
    </div>
  )
}

