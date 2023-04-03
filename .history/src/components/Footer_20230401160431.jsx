import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer>
        <div>
          <CountryLookup />  
        </div>
        <div className=''>
            <ul className=''>
                <li className='link'>About</li>
                <li className='link'>Advertising</li>
                <li className='link'>Business</li>
                <li className='link'>How Search works</li>
            </ul>

    <ul className=''>
        <li className='link'>Privacy</li>
        <li className='link'>Terms</li>
        <li className='link'>Settings</li>
    </ul>
        </div>


    </footer>
  )
}
