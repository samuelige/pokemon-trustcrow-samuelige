import React from 'react'
import Image from 'next/image'
import { rounded_primary } from '@/_shared/assets/images'


const Header = () => {
  return (
    <header className="px-4 lg:px-8 xl-1:px-0 w-full flex flex-col h-[5rem] justify-center shadow-md">
        <div className="flex flex-row items-center w-full xl-1:max-w-[80rem] xl-1:m-auto ">
            <div className="w-12">
                <Image src={rounded_primary} width={0} height={0}  alt="logo-img" className={`w-full object-fill`}/>
            </div>
        </div>
    </header>
  )
}

export default Header