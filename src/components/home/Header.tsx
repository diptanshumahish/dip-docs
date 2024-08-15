import Image from 'next/image'
import React from 'react'
import {Plus_Jakarta_Sans} from "next/font/google"
import { textStyles } from '@/constants/texts';
const js = Plus_Jakarta_Sans({subsets:["latin"]});
//basic setup and responsiveness done 🚀

export default function Header() {
  return (
   <div>
    <Image src="/assets/svg/screen.svg" height={900} width={1920} alt='diptanshu docs home' className='w-full h-auto border-b border-white border-opacity-20 md:block hidden'  />
    <Image src="/assets/svg/mobscreen.svg" height={900} width={1920} alt='diptanshu docs home' className='w-full h-auto border-b border-white border-opacity-20 md:hidden block'  />

        <div className=" flex  border-b border-white border-opacity-20">
            <div className={` ${js.className} py-[5%] px-[5%] flex flex-col md:gap-4 gap-2`}>
            <h1 className={`${textStyles.heading}  font-bold lg:max-w-[70%]`}>The official docs for all things I make and a quick guide on setting them up</h1>
            <p className='text-slate-400 tracking-wide md:text-[16px] text-sm'>Hey, I am Diptanshu Mahish, and probably you already know about me since you are reading the docs . Well I&apos;m a developer, No I don&apos;t develop feelings, rather I develop stuff for the web and sometimes for the phones and such devices. <br /> This website has all the docs you need to work with things I make, such as the  <code className='bg-slate-400 bg-opacity-10 text-white'> windows_utlities</code> and the <code className='bg-slate-400 bg-opacity-10 text-white'>calendify</code>. All upcoming things I make will be linked here. You can always check out the blogs on my original website <a className='underline text-yellow-200' href='https://diptanshumahish.in/blogs'>visit blogs here</a> </p>

            {/* to add the buttons  */}
            </div>
            <Image src="/assets/png/me.webp" height={900} width={600} alt='diptanshu ascii' className='grayscale object-cover md:block hidden' />


        </div>

   </div>

  )
}
