'use'
import React, { useState } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState('Nigeria')
  return (
    <div>{country}</div>
  )
}

