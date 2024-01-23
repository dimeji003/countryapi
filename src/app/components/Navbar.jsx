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

  function closeNav(){
    setShowNav(false)
  }
  return (
    <nav className='md:bg-black text-white flex flex-row md:justify-normal justify-between items-center  h-12 '>
      <div className='md:hidden pl-3 flex flex-row items-center'><h2 className='text-black text-2xl'>Locate.</h2></div>



      <div className='pr-5 md:pr-0 md:w-[100%]'>
      <RxHamburgerMenu className={`${showNav ? "hidden" : 'block md:hidden'} m-auto cursor-pointer text-2xl text-red-600`} onClick={onclick}/>

 
        <ul className={`md:flex md:flex-row flex bg-black md:bg-none fixed md:relative top-0 bottom-0 right-0 md:h-[100%] h-[100vh] md:w-[100%] w-[60%] items-center flex-col md:justify-between justify-around transition-transform transform ease-in-out duration-700 ${showNav ? 'translate-x-0' : 'translate-y-full md:translate-y-0'}`}>
            <li><MdCancel className={`md:hidden block m-auto cursor-pointer`} onClick={onclick} /></li>
            <Link href='/' onClick={closeNav}>
            <li className='px-9'>All</li>
            </Link>
            <Link href='/europe'  onClick={closeNav}>
            <li className='px-9'>Europe</li>
            </Link>
            <Link href='/northamerica' onClick={closeNav}>
            <li className='px-9'>North America</li>
            </Link>
            <Link href='/southamerica' onClick={closeNav}>
            <li className='px-9'>South America</li>
            </Link>
            <Link href='/africa'  onClick={closeNav}>
            <li className='px-9'>Africa</li>
            </Link>
            <Link href='/asia' onClick={closeNav}>
            <li className='px-9'>Asia</li>
            </Link>
            <Link href='/oceania' onClick={closeNav}>
            <li className='px-9'>Oceania</li>
            </Link>
            <Link href='/australia' onClick={closeNav}>
            <li className='px-9'>Australia</li>
            </Link>
        </ul>

      </div>
      

    
    </nav>
  )
}
