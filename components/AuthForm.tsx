'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
{  }
const AuthForm = ({type}:{type:string}) => {
    const [user, setUser]=useState(null)
  return (
    <section className='auth-form'>
        <header className="flex flex-col gap-5 md:gap-8">  
        <Link href="/"className=" cursor-pointer flex gap-1 items-center" >
            <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt='verizon console'
                
            />
            <h1 className='font-ibm-plex-serif font-bold text-black-1'>verizon</h1>
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-24">
                {type

                ?'Link Account'
                : type ==='reister'
                  ? 'register'
                    :'Login'

                
                }
                </h1>
            </div>

        </header>
      
        </section>
  )
}

export default AuthForm