
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

const europe = data.filter(country => country.continents == 'Europe')
const europeCard = europe.map(country => (
  <section key={country.ccn3}>
    <Link href={country.name.common.split(' ').join('-')}>
        <Image src={country.flags.svg} width={100} height={100} />
        <h2>{country.name.common}</h2>
    </Link>
    </section>
))


  
  return (
    <div className='grid grid-cols-3'>{europeCard}</div>
  )
}
