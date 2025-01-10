import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu = [
        {
            id:1,
            name:'Ride',
            icon:'/taxi.png'
            
        },
        {
          id:2,
          name:'Package',
          icon:'/box1.png'
         
        }
    ]
    return (
      <div className="p-1 pb-1 pl-10 border-b-[4px] border-grey-200 flex items-center justify-between">
        <div className='flex gap-24 items-center'>
          <Image src="/logo.png" alt="logo" width={120} height={120} />
          <div className="flex flex-wrap items-center gap-4 mt-center">
            {headerMenu.map((item) => (
              <div key={item.name} className="flex flex-row items-center gap-2">
                <Image src={item.icon} width={30} height={30} alt={item.name} />
                <h2 className="text-[14px] font-medium">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <UserButton />
      </div>
    );   
}

export default Header