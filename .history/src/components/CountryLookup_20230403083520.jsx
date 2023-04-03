'use client';

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Nigeria')
  useEffect(()=> {
    fetch(`http://extreme-ip-lookup.com/json/?key=${process.env.NEXT}`)
    .then((res) => console.log(res))
    // .then((data) => console.log(data) )
  }, [])
  
  return (
    <div>{country}</div>
  )
}

