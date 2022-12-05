import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline'

function Header() {
    

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>

      <div className='flex items-center justify-center md:w-1/5'>

      <Link href='/'>
      
        <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 '>
            <Image  src='https://rb.gy/vsvv2o' layout='fill' objectFit='contain' alt={''}/>
        </div>
      </Link>

      </div>

      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <Link href='' className='headerLink'>Product</Link>
        <Link href='' className='headerLink'>Explore</Link>
        <Link href='' className='headerLink'>Support</Link>
        <Link href='' className='headerLink'>Business</Link>
        
      </div>
      <div className=''>
        <SearchIcon className='headerIcon'/>
        <div>
          
        </div>
      </div>

    </header>
  )
}

export default Header