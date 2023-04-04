import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`) 
  if(!response.ok){
    throw new Error('Something went ')
  }
  const data = await response.json()
  
   const results = data.items
  return (
    <>
    {results && results.map((result, idx) => 
    <h1 key={idx}>{result.title}</h1>)}
    </>
  )
}
