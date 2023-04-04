import React from 'react'

export default async function WebSearchPage() {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures`) 
  const data = await response.json()
  console.log(data)
   const results = data.items
  return (
    <div></div>
  )
}
