import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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

  const handleSearchWordChange = (event) => {
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

      <Filter 
        value={searchWord}
        handleSearchWordChange={handleSearchWordChange}
      />

      <h3>add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={handleAdd}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleAdd={handleAdd}
      />

      <h3>Numbers</h3>

      <Persons 
        persons={persons}
        showAll={showAll}
        searchWord={searchWord}
      />

    </div>
  )

}

export default App