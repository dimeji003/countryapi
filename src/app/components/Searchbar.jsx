import React from 'react'

export default function Searchbar() {
  return (
    <div className='w-[100%] pt-4'>
        <form className='w-[100%] text-center'>
            <input type="text" className='border border-red-600  md:w-[30%] w-[50%] h-9 rounded-2xl pl-4' placeholder='Search Keyword'/>
        </form>
    </div>
  )
}
