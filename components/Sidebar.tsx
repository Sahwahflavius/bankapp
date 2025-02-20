"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ITEMS, sidebarLinks } from '@/constants'
import { link } from 'fs'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}:SiderbarProps) => {
  const pathname=usePathname();
  return (
    <section className='sidebar'>
        <nav className="flex flex-col gap-4">
            <Link href="/"className="mb-12 cursor-pointer flex gap-2 items-center" >
            <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt='verizon console'
                className='size-[24px] max-xl:size-14'
            />
            <h1 className='sidebar-logo'>verizon</h1>
            </Link>
            {sidebarLinks.map((item)=>{
              const isActive=
              pathname===item.route ||pathname.startsWith(`${item.route}/`)
              return(
                <Link
                   href={item.route}
                   key={item.label}
                   className={cn('sidebar-link',{'bg-bank-gradient':isActive})}
                  >{/*item.label*/}
                  <div className='relative size-6'>
                    <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({
                      'brightness-(3) invert-0':isActive
                    })}
                  /></div>
                 <p className={cn("sidebar-label",{"!text-white":isActive})}>{item.label}</p>
                  </Link>
              )
            })}
            
        </nav>
    </section>
  )
}

export default Sidebar