'use client';

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Nigeria')
  useEffect(()=> {
    fetch(`http://ip-api.com/json/197.210.53.96`).then((res) => res.json).then((data) => setCountry() )
  }, [])
  return (
    <div>{country}</div>
  )
}

