import React from 'react'


async function countries (){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = response.json()
    return data
  }
  
  export default async function page( {params} ) {
    const scode = await countries()

    const countryDetail = scode.find(country => country.name.common.split(' ').join('-') == params.slug)


  return (
    <div>{countryDetail.name.common}</div>
  )
}
