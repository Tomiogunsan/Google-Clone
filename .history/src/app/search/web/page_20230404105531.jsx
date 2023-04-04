import Link from 'next/link'
import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`) 
  // if(!response.ok){
  //   throw new Error('Something went wrong');
  // }
  const data = await response.json()
  
   const results = data.items

   if(!results){
    return <div className='flex flex-col just'>
      <h1>No results found</h1>
      <p>Try searching for something else or go back to homepage. 
        <Link href='/'>
          HOME
        </Link>
         </p>
      </div>
   }
  return (
    <>
    {results && results.map((result, idx) => 
    <h1 key={idx}>{result.title}</h1>)}
    </>
  )
}
