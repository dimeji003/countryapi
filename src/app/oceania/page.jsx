import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { countriesData } from '../page'


async function countries (){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = response.json()
  return data
}


export default async function page() {
  const data = await countries()
// const countryData = countriesData

const oceania = data.filter(country => country.continents == 'Oceania')
const oceaniaCard = oceania.map(country => (
  <section key={country.ccn3}>
    <Link href={country.name.common.split(' ').join('-')} className='flex flex-col items-center'>
        <Image src={country.flags.svg} width={100} height={100} />
        <h2 className='text-center'>{country.name.common}</h2>
        <p className='text-center'>{country.continents}</p>
    </Link>
      <Link href={country.maps.googleMaps} target='_blank'>
      <p className='text-blue-700 text-center'>Check maps</p>
      </Link>
    </section>
))


  
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 gap-5 w-[90%] py-11 m-auto'>{oceaniaCard}</div>
  )
}
