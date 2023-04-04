'use client'
import React, { useEffect } from 'react'

export default function Error({error, reset}) {
    useEffect(() => {
        console.log('Error: ', error)
    }, [error])
  return (
    <div>
        <h1></h1>
    </div>
  )
}
