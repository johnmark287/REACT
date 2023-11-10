import React, { useState } from 'react'

function HookWithObjects() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
    <div>
        First Name: <input
        placeholder='Enter Your First Name'
        type='text'
        value={name.firstName}
        onChange={e => setName({... name, firstName: e.target.value})}
        /><br></br>

        Last Name: <input
        placeholder='Enter Your Last Name'
        type='text'
        value={name.lastName}
        onChange={e => {
        console.log(e.target.name);
        setName({... name, lastName: e.target.value})
        }}/>
    
        <p>Your first name is {name.firstName} </p>
        <p>Your last name is {name.lastName} </p>
        <p>{JSON.stringify(name)}</p>
        <p>{}</p>
    </div>
  )
}

export default HookWithObjects