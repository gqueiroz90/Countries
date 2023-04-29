import React, { useEffect, useState } from 'react'
import CountryList from 'src/components/CountryList'

type Country = {
  name: string
  flag: string
  languages: { name: string }[]
  currencies: { name: string }[]
}

type Continent = {
  name: string
  countries: Country[]
}

const ContinentPage = () => {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://restcountries.com/v2/all')
      const countries = await response.json()

      const groupedByRegion = countries.reduce((regions, country) => {
        const region = country.region

        if (!regions[region]) {
          regions[region] = { name: region, countries: [] }
        }

        regions[region].countries.push({
          name: country.name,
          flag: country.flag,
          languages: country.languages,
          currencies: country.currencies,
        })

        return regions
      }, {})

      setContinents(Object.values(groupedByRegion))
    }

    fetchData()
  }, [])

  return (
    <>
      {continents.map((continent) => (
        <div key={continent.name}>
          <h2>{continent.name}</h2>
          <CountryList countries={continent.countries} />
        </div>
      ))}
    </>
  )
}

export default ContinentPage
