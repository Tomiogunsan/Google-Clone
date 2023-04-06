'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import React from 'react'

export default function PaginationsButton() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm')
    const startIndex = searchParams.get('start') || 1
  return (
    <div>PaginationsButton</div>
  )
}
