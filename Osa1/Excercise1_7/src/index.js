import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => <button onClick={onClick} >{text}</button>

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setSum(sum + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setSum(sum - 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <Header text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {sum/all}</p>
      <p>positive {good/all*100} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)