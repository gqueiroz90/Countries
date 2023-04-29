import React from 'react'

type Country = {
  name: string
  flag: string
  languages: { name: string }[]
  currencies: { name: string }[]
}

type CountryListProps = {
  countries: Country[]
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>
          <h3>{country.name}</h3>
          <img src={country.flag} alt={`Flag of ${country.name}`} />
          <p>
          <strong>Languages:</strong> {country.languages ? country.languages.map((language) => language.name).join(', ') : ''}
          </p>
          <p>
          <strong>Currencies:</strong> {country.currencies && country.currencies.map((currency) => currency.name).join(', ')}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default CountryList
