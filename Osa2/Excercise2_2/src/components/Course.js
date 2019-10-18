import React from 'react'


const Courses = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises : 11,
        id: 4
      }
    ]
}

const Header = () => {
    return (
        <h1>{Courses.name}</h1>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = () => {
    return (
        Courses.parts.map(part =>
            <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
            />
        )

    )
}

const Sum = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const values = Courses.parts.map(part => part.exercises)
    return (
        <p>total of {values.reduce(reducer)} exercises</p>
    )
}

const Course = () => {
    return (
        <div>
            <Header />
            <Content />
            <Sum />
        </div>
    )
}

export default Course