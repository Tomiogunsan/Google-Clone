import React from 'react'

export default function WebSearchResults({results}) {
  return (
    <div>
        <p>About {results.searchInformation.formattedTotalResults}
        resul
        </p>
    </div>
  )
}
