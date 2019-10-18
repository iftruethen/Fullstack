import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchWord, setNewSearchWord ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  const nameFilter = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchWord))
    console.log({searchWord})

  const hanleSearchWordChange = (event) => {
    setNewSearchWord(event.target.value)
    console.log(event.target.value.length, event.target.value)

    if (event.target.value.length === 0) {
      setShowAll(true)
    } else {
      setShowAll(false)
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    var unique = true

    persons.forEach(function(item, index, array) {
      if (item.name === newName) {
        alert(`${newName} is already added to phonebook`)
        unique = false
      }
    })

    if (unique) {
      const noteObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }
      setPersons(persons.concat(noteObject))
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input value={searchWord} onChange={hanleSearchWordChange} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {nameFilter.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )

}

export default App