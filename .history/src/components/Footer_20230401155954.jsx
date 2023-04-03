import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer>
        <div>
          <CountryLookup />  
        </div>
        <div>
            <ul>
                <lic>About</lic>
                <lic>Advertising</lic>
                <lic>Business</lic>
                <lic>How Search works</lic>
            </ul>

    <ul>
        <lic>Privacy</lic>
        <lic>Terms</lic>
        <lic>Settings</lic>
    </ul>
        </div>


    </footer>
  )
}
