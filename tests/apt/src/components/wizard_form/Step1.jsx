import React from 'react'

export const Step = ({onNext, formState, onFieldValueChange }) => {
	return (
		<div>
			<input
				name='fname' 
				type="text" 
				placeholder='Enter First Name' 
				value={formState["fname"]}
				onChange={onFieldValueChange}
			/><br/>
			<input 
				name="lname" 
				type="text" 
				placeholder='Enter Last Name'
				value={formState["lname"]}
				onChange={onFieldValueChange}
			/><br/>
			<input 
				name='email' 
				type="text" 
				placeholder='Enter Email' 
				value={formState.password}
				onChange={onFieldValueChange}
			/>
			<br/>
			<button onClick={onNext}>next</button>
		</div>
	)
}

