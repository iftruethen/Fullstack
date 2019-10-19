import React from 'react'

const PersonRender = ({person}) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}

export default PersonRender