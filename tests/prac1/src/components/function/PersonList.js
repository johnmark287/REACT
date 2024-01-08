import React from 'react'
import Person from './Person'

function PersonList() {
    const names = ["Bruce", "Clark", "Debby"]
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Debby',
            age: 21,
            skill: 'Django'
        }
    ]
    //key in the child component is not a prop(can't be accessed).
    // key is required for react to keep track.
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    // const nameList = names.map((name, index) => <p key={index}>{index} {name} </p>) // adding unique key
    return <div>{personList}</div>
}

export default PersonList