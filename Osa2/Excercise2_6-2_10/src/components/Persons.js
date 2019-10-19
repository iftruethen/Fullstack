import React from 'react'
import PersonRender from './PersonRender'

const Persons = ( {persons, showAll, searchWord} ) => {
    const nameFilter = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchWord))

    return (
        nameFilter.map(person => <PersonRender key={person.id} person={person} />)
    )
}

export default Persons