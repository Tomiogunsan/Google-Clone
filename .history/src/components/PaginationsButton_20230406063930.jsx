'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {BsChevronRight} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'
import React from 'react'

export default function PaginationsButton() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm')
    const startIndex = +searchParams.get('start') || 1;
  return (
    <div>PaginationsButton</div>
  )
}
