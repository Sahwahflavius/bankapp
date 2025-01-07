import Mobilenav from "@/components/Mobilenav";
import Sidebarbar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn ={firstName:'Sahwah', lastName:'Flavius'};
  return (
    <main className="flex h-screen w-full font-inter">
      {/*loyout for desktop devices*/}
      <Sidebarbar
          user={loggedIn}
      />
           {/*loyout for mobile devices*/}
           <div className="flex size-full flex-col">
            <div className="root-layout">
              <Image src='/icons/logo.svg'
              width={30}
              height={30}
              alt='menu icon'
              />
              <div className="">
                <Mobilenav user={loggedIn}/>
              </div>
            </div> {children}
           </div>

     
    </main>
  );
}
