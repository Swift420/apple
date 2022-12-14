import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Header() {
    
  const session = false;
  const items = useSelector(selectBasketItems)

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
      <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <SearchIcon className='headerIcon'/>
        <Link href='/checkout'>
        <div className='relative cursor-pointer'>
          {items.length > 0 && (<span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
            {items.length}
          </span> )}
          <ShoppingBagIcon className='headerIcon'/>
       
        </div>
        </Link>
        {session ? (
          <UserIcon/>
        ): (
          <UserIcon className='headerIcon'/>

        )}
      </div>

    </header>
  )
}

export default Header