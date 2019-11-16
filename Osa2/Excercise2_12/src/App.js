import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries,setCountries ] = useState([])
  const [ showAll, setShowAll ] = useState(false)
  const [ searchWord, setSearchWord ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const renderer = () => {
    const countriesToShow = showAll
    ? countries
    : countries.filter(country => country.name.toLowerCase().includes(searchWord))
    console.log({countriesToShow})

    if (countriesToShow.length > 10) {
      return(
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      )
    } else if (countriesToShow.length === 0) {
      return(
        <div>
          <p>No matches found</p>
        </div>
      )
    } else if (countriesToShow.length === 1) {
      const match = countriesToShow[0]
      return(
        <div>
          <h2>{match.name}</h2>
          <p>
            capital {match.capital} <br/>
            population {match.population}
          </p>
          <h3>languages</h3>
          <ul>
            {match.languages.map(language => <li>{language.name}</li>)}
          </ul>
          <img src={match.flag} width="10%" height="10%"></img>
        </div>
      )
    } else {
      return(
        <div>
          {countriesToShow.map(country => <p key={country.numericCode}>{country.name}</p> )}
        </div>
      )
    }
  }

  const handleChange = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <div>
      find countries <input value={searchWord} onChange={handleChange} />
      {renderer()}
    </div>
    
  )
}

export default App;