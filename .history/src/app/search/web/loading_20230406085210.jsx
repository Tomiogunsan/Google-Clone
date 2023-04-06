import React from 'react'

export default function loading() {
  return (
    <>
      <div className='mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse'>
        <div className='bg-gray-200 h-2.5 w-48 rounded-full mb-2.5'></div>
        <div className='bg-gray-200 h-3.5  w-[360px] rounded-full mb-2.5'></div>
        <div className='bg-gray-200  w-[560px] rounded-full mb-2.5'></div>
        <div className='bg-gray-200  w-[530px] rounded-full mb-2.5'></div>
      </div>
    </>
  )
}
