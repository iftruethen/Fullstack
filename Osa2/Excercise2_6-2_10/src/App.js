import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
      {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )

}

export default App