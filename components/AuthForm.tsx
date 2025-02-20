"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
      email: z.string().email(),
  })
  import { Button } from "@/components/ui/button"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"


import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Divide } from "lucide-react"

const AuthForm = ({type}:{type:string}) => {
    const [user, setUser] = useState(null)
         // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className="auth-form">
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/"className=" cursor-pointer flex gap-1 items-center" >
            <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt='verizon console'
                
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>verizon</h1>
            </Link>
        <div className="flex flex-col gap-1 md:gap-3">
        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
            ?'Link Account'
            :type==='register'
              ?'register'
                :'login'
            }
            <p className="text-16 font-normal text-gray-600">
                {user
                ? 'Link your account to get started'
                : 'Please enter your details'
                }
            </p>
            </h1>
         </div>
           </header>
                 {user ? (
            <div className="flex flex-col gap-4">
               {/* plaidlink */} 
           </div>
        ):(
            <>
       
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
         <div className="form-items">
          <FormLabel className="form-label">
            Email
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl className="">
              <Input
              placeholder=""
              className="input-class"
              {...field}
              />
            </FormControl>
            <FormMessage
            className="form-message mt-2"
            />
          </div>
         </div>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

            </>
        )
        }

       
        </section>
  )
}

export default AuthForm