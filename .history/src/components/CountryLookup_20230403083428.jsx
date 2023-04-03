'use client';

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Nigeria')
  useEffect(()=> {
    fetch(`http://extreme.com/json/24.48.0.1`)
    .then((res) => console.log(res))
    // .then((data) => console.log(data) )
  }, [])
  
  return (
    <div>{country}</div>
  )
}

