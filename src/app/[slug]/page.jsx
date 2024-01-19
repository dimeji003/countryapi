import React from 'react'
import Image from 'next/image'


async function countries (){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
  }
  
  export default async function page( {params} ) {
    const scode = await countries()

    const countryDetail = scode.find(country => country.name.common.split(' ').join('-') == params.slug)


  return (
    <div>
      <h2>{countryDetail.name.common}</h2>
      <Image src= {countryDetail.flags.svg} width={100} height={100} />

      

      </div>
  )
}
