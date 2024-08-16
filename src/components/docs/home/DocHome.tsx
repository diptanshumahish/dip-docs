import WidthLimiter from '@/components/wrappers/Layout/WidthLimiter';
import { data } from '@/data/docshome/docs_home'
import Image from 'next/image';
import {Plus_Jakarta_Sans} from "next/font/google"

import React from 'react'
const js = Plus_Jakarta_Sans({subsets:["latin"]});

export default function DocHome() {
  const cards = data;
  return (
    <div className={`${js.className}  min-h-screen`}>
          <Image src="/assets/svg/docshome.svg" height={900} width={1920} alt='diptanshu docs home' className='w-full h-auto border-b border-white border-opacity-20 md:block hidden'  />
          <Image src="/assets/svg/docshomemob.svg" height={900} width={1920} alt='diptanshu docs home' className='w-full h-auto border-b border-white border-opacity-20 md:hidden block'  />

     <WidthLimiter>
      <div className='pt-8'>
        <h1 className='lg:text-[48px] md:text-[32px] text-[24px] font-semibold'>Docs homepage</h1>
        <p className='text-gray-400'> Maybe you will get something useful here? who knows</p>
      </div>
     <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-4 py-[5%]'>
      {cards.map((ele,idx)=>
      <div key={idx} className={` border border-white border-opacity-15 rounded-md `}>
          <Image src={ele.icon_name} height={500} width={1000} alt={ele.name} className='aspect-video w-full object-cover border-b border-white border-opacity-20'  />
          <div className='flex flex-col py-2 px-2'>
            <h2 className='text-lg font-semibold'>{ele.name}</h2>
            <p className='text-sm text-gray-400 tracking-wide'>{ele.details}</p>
          </div>
      </div> )}
      </div>
     </WidthLimiter>
    </div>
  )
}
