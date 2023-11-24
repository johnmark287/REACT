import React from 'react'

export const Step3 = ({onPrevious, onSubmit, formState, onFieldValueChange }) => {
    return (
        <div>
            <button onClick={onPrevious}>Previous</button><br></br>
            <input 
                name="dob" 
                type="text" 
                placeholder='Enter Your Date of Birth'
                value={formState["dob"]}
                onChange={onFieldValueChange}
            /><br/>
            <input 
                name="id" 
                type="text" 
                placeholder='Enter Your ID number'
                value={formState["id"]}
                onChange={onFieldValueChange}
            /><br/>
            <input 
                name="password" 
                type="text" 
                placeholder='Enter Yor Password'
                value={formState["password"]}
                onChange={onFieldValueChange}
            /><br/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
