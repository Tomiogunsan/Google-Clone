'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {BsChevronRight} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'
import React from 'react'
import Link from 'next/link'

export default function PaginationsButton() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm')
    const startIndex = +searchParams.get('start') || 1;
  
    return (
    <div>
        {startIndex >= 10 && (
            <Link>
            <div>
               <BsChevronLeft 
            </div>
            </Link>
        )}
    </div>
  )
}
