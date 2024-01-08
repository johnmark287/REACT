import React from 'react'

function Person({person}) {
    return (
        <div>
            <p>
                I am {person.name}. I am {person.age} yrs old. I know {person.skill}. 
            </p>
        </div>
    )
}

export default Person