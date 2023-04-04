'use client'
import React, { useEffect } from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
        console.log('Error: ', error)
    }, [error])
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className=''>Something went wrong</h1>
        <button onClick={()=> reset()}>Try again</button>
    </div>
  )
}
