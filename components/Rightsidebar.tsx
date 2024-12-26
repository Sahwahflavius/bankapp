import Link from 'next/link'
import React from 'react'

const Rightsidebar = ({user, transactions, banks}:RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'/>
                <div className='profile'>
                    <div className='profile-img'>
                            <span className='text-5xl font-bold text-blue-500'>{user.firstName[0]}</span>
                    </div>
                    <div className='profile-details'>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <p className='profile-email'>
                            {user.email}
                        </p>
                    </div>
                </div>
           
        </section>
        <section className='banks'>
                    <div className='flex justify-between w-full'>
                        <h2 className='header-2'>My card</h2>
                        <Link>
                        </Link>
                    </div>
        </section>
    </aside>
  )
}

export default Rightsidebar