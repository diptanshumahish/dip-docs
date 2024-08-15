import Image from 'next/image'
import React from 'react'
import {Plus_Jakarta_Sans} from "next/font/google"
import LinkButton from '../common/Buttons/LinkButton';
import { ArrowUpRight, GithubLogo, Heart, InstagramLogo, LinkedinLogo, MediumLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
const js = Plus_Jakarta_Sans({subsets:["latin"]});
//basic setup and responsiveness done 🚀

export default function Header() {
  return (
   <div>
    <Image src="/assets/svg/screen.svg" height={900} width={1920} alt='diptanshu docs home' className='w-full h-auto border-b border-white border-opacity-20 md:block hidden'  />
    <Image src="/assets/svg/mobscreen.svg" height={900} width={1920} alt='diptanshu docs home' className='w-full h-auto border-b border-white border-opacity-20 md:hidden block'  />

        <div className=" flex  border-b border-white border-opacity-20">
           <div className='flex flex-col justify-between '>
             <div className={` ${js.className} py-[5%] px-[5%] flex flex-col md:gap-4 gap-2`}>
              <h1 className="lg:text-[48px] lg:leading-[48px] md:text-[32px]  md:leading-[32px] text-[24px] leading-[24px] font-bold lg:max-w-[70%]">The official docs for all things I make and a quick guide on setting them up</h1>
               <p className='text-slate-400 tracking-wide md:text-[16px] text-sm'>Hey, I am Diptanshu Mahish, and probably you already know about me since you are reading the docs . Well I&apos;m a developer, No I don&apos;t develop feelings, rather I develop stuff for the web and sometimes for the phones and such devices. <br /> This website has all the docs you need to work with things I make, such as the  <code className='bg-slate-400 bg-opacity-10 text-white'> windows_utlities</code> and the <code className='bg-slate-400 bg-opacity-10 text-white'>calendify</code>. All upcoming things I make will be linked here. You can always check out the blogs on my original website <a className='underline text-yellow-200' href='https://diptanshumahish.in/blogs'>visit blogs here</a> </p>

            {/* to add the buttons  */}
            <div className='py-4 flex gap-4 md:flex-row flex-col'>
              <LinkButton color='#f9c47f' link='' text='Read the docs' icon={<ArrowUpRight/>}  />
              <LinkButton color='#ffffff' link='https://diptanshumahish.in' text='Visit main website' icon={<Heart/>}  />
            </div>
            </div>

            <div className='px-[5%] py-[5%]  '>
              <div className='flex items-center gap-4 border md:w-fit px-4 py-2 rounded-md border-opacity-20 border-white'>
                <span className='text-pink-200 md:text-md text-sm'>CONNECT WITH ME :</span>
              <Link href="https://www.instagram.com/_diptanshuu_"> <InstagramLogo weight='fill'  className='md:h-6 md:w-6  h-4 w-4 ' /> </Link>
              <Link href="https://github.com/diptanshumahish"> <GithubLogo weight='fill' className='md:h-6 md:w-6  h-4 w-4 ' /> </Link>
              <Link href="https://in.linkedin.com/in/diptanshumahish"> <LinkedinLogo weight='fill'  className='md:h-6 md:w-6  h-4 w-4 ' /> </Link>
              <Link href="https://medium.com/@uiuxwithdiptanshu"> <MediumLogo weight='fill' className='md:h-6 md:w-6  h-4 w-4 ' /> </Link>
              </div>
            </div>
           </div>
            <Image src="/assets/png/me.webp" height={900} width={600} alt='diptanshu ascii' className='grayscale object-cover md:block hidden' />


        </div>

   </div>

  )
}
