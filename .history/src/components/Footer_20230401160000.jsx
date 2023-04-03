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
                <li className=''>About</li>
                <li className=''>Advertising</li>
                <li className=''>Business</li>
                <li className=''>How Search works</li>
            </ul>

    <ul>
        <li className=''>Privacy</li>
        <li className=''>Terms</li>
        <li className=''>Settings</li>
    </ul>
        </div>


    </footer>
  )
}
