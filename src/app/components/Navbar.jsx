"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function onclick(){
    setShowNav(!showNav)
  }
  return (
    <nav>

      <RxHamburgerMenu className={`${showNav ? "hidden" : 'block md:hidden'} m-auto cursor-pointer`} onClick={onclick}/>
      <MdCancel className={`${showNav ? 'block md:hidden' : 'hidden'} m-auto cursor-pointer md:hidden`}/>

        <ul className={`md:flex md:flex-row md:h-20 h-[60vh] items-center flex-col justify-around ${showNav ? 'hidden' : 'flex'}`}>
            <Link href='/'>
            <li className='px-9'>All</li>
            </Link>
            <Link href='/europe'>
            <li className='px-9'>Europe</li>
            </Link>
            <li className='px-9'>North America</li>
            <li className='px-9'>South America</li>
            <Link href='/africa'>
            <li className='px-9'>Africa</li>
            </Link>
            <li className='px-9'>Asia</li>
            <li className='px-9'>Oceania</li>
            <li className='px-9'>Australia</li>
        </ul>
    
    </nav>
  )
}
