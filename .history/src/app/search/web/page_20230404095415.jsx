import React from 'react'

export default async function WebSearchPage() {
  const response = await fetch(` https://www.googleapis.
  com/customsearch/v1?key=${process.env.API_KEY}&cx=017576662512468239146:omuauf_lfve&q=lectures`) 
  return (
    <div>WebSearchPage</div>
  )
}
