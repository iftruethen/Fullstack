import React from 'react'

const PersonForm = ({newName, newNumber, handleNameChange, handleNumberChange, handleAdd}) => {
    return (
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
    )
}

export default PersonForm