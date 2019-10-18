import React from 'react'

const Part = ({ name, exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = ({ contents }) => {
    const table = contents
    return (
        table.map(part =>
            <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
            />
        )
    )
}

const Sum = ({ contents }) => {
    const table = contents
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const values = table.map(part => part.exercises)
    return (
        <p>total of {values.reduce(reducer)} exercises</p>
    )
}

const Course = ({ name, details }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Content contents={details} />
            <Sum contents={details} />
        </div>
    )
}

export default Course