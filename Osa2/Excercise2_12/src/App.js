import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries,setCountries ] = useState([])
  const [ showAll, setShowAll ] = useState(false)
  const [ searchWord, setSearchWord ] = useState('')
  const [ weatherData, setWeatherData ] = useState([])
  var showed = ''

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
    axios
      .get('http://api.weatherstack.com/current?access_key=4cf035647c4a0a31ae72f44ebb1aab2f&query='.concat(showed))
      .then(response => setWeatherData(response.data))
  }, [searchWord])

  const renderCountry = ({match}) => {
    var weather = []
    try {
      weather = weatherData.current
    } catch(err) {}

    if (weather !== undefined) {
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
          <h3>Weather in {match.capital}</h3>
          <p><b>temperature:</b> {weather.temperature} Celsius</p>
          <img src={weather.weather_icons[0]}></img>
          <p><b>wind:</b> {weather.wind_speed} kph direction {weather.wind_dir} </p>
        </div>
      )
    } else {
      return null
    }
  }

  const renderer = () => {
    var countriesToShow = showAll
    ? countries
    : countries.filter(country => country.name.toLowerCase().includes(searchWord))

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
      showed = match.capital
      console.log(showed)
      return(
        renderCountry({match})
      )
    } else {
      return(
        <div>
          {countriesToShow.map(match => <p key={match.numericCode}>{match.name}<button onClick={() => setSearchWord(match.name.toLowerCase())}>show</button></p> )}
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