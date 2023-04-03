'use client';

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Nigeria')
  useEffect(()=> {
    fetch(`http://ip-api.com/json/`)
  }, [])
  return (
    <div>{country}</div>
  )
}

