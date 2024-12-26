import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import Rightsidebar from '@/components/Rightsidebar';
const home = ()=>
{
    const loggedIn={
            firstName: 'Flavius',
            lastName:'Miechak',
            email:'flaviusmiechak601@outlook.com'
        }
    return(
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and Transactions efficiently."

                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={15000}
                
                />
                </header>
                RECENT TRANSACTIONS


            </div>
            <Rightsidebar
            user={loggedIn}
            transactions={[]}
            banks={[]}/>
        </section>

    )
}
export default home;
