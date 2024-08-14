import Image from 'next/image'
import React from 'react'
import WidthLimiter from '../wrappers/Layout/WidthLimiter'
import LinkButton from '../common/Buttons/LinkButton'
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react/dist/ssr'

export default function Header() {
  return (

    <WidthLimiter>
        <div className='w-full flex flex-col items-center justify-center py-[10%] '>
        <Image src="/assets/svg/header.svg" height={400} width={1000} className='w-[30%] h-auto' alt='dptnshu Home' />
        <div className='flex flex-col items-center justify-center'>
           <div className='flex flex-col gap-2 py-4 items-center  justify-center'>
           <h1 className='md:text-[48px] font-bold'>dptnshu | Docs.</h1>
           <p>The docs all by Diptanshu Mahish</p>
           </div>
            <div className='flex gap-4'>
                <LinkButton link={'/'} text={'Read the docs'} color='#ffffff' icon={<ArrowUpRight/>}  />
                <LinkButton link="https://diptanshumahish.in" text={'Visit Portfolio'} color='#edf45d' icon={<Sparkle/>}  />
            </div>
        </div>
    </div>
    </WidthLimiter>

  )
}
