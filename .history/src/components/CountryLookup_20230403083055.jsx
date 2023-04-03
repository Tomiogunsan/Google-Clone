'use client';

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Nigeria')
  useEffect(()=> {
    fetch('http://ip-api.com/json24.48.0.1')
    .then((res) => res.json)
    .then((data) => console.log(data) )
  }, [])
  
  return (
    <div>{country}</div>
  )
}

