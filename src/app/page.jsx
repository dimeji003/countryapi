import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export let countriesData = []

async function countries (){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = response.json()
  countriesData = data
  return data
}

export default async function Home() {
  const data = await countries()
  const names = data.map(country =>(
    <section key={country.ccn3} className='flex items-center flex-col'>
      <Link href={country.name.common.split(' ').join('-')}>
      <Image src= {country.flags.svg} width={100} height={100} />
      </Link>
      <h2>{country.name.common}</h2>
      <p>{country.continents}</p>
      <Link href={country.maps.googleMaps} target='_blank'>
      <p>Check maps</p>
      </Link>
    </section>

  ))
  return (
    <div>

      <div  className='grid md:grid-cols-4 gap-8 sm:grid-cols-3 grid-cols-2 pt-12'>
      {names}

      </div>

    </div>
  )
}
