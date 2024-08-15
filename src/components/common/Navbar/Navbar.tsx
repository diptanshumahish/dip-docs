import WidthLimiter from '@/components/wrappers/Layout/WidthLimiter'
import { List } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full fixed z-20  flex items-center justify-center py-4'>
        <WidthLimiter>
            <div className='flex justify-between bg-back-color bg-opacity-80  w-full items-center border p-2 px-4 border-white border-opacity-10 rounded-md'>
                <div className='font-semibold lg:text-xl'>dptnshu</div>
                <button>
                    <List  className='h-6 w-6' />
                </button>
            </div>
        </WidthLimiter>
    </nav>
  )
}
