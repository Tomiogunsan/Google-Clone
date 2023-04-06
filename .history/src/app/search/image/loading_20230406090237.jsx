import React from 'react'

export default function loading() {
  return (
    <div className='pt'>
      <div className='animate-pulse'>
        <div className='h-48 w-48 mb-4 bg-200 rounded-md'></div>
        <div className='h-2 w-48 mb-2.5 bg-200 rounded-md'></div>
        <div className='h-2 w-44 mb-2.5 bg-200 rounded-md'></div>
      </div>
    </div>
  )
}
