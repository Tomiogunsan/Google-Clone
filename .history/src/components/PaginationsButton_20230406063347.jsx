'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import React from 'react'

export default function PaginationsButton() {
    const pathname = usePathname();
    const searchParams = useSearchParams
  return (
    <div>PaginationsButton</div>
  )
}
