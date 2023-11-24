import React from 'react'

export const Step2 = ({onNext, onPrevious, formState, onFieldValueChange }) => {
		return (
        <div>
			<button onClick={onPrevious}>previous</button><br/><br/>
            <input
				name='phone' 
				type="text" 
				placeholder='Enter Phone Number' 
				value={formState["phone"]}
				onChange={onFieldValueChange}
			/><br/>
			<input 
				name="profile" 
				type="text" 
				placeholder='Enter Registration Number'
				value={formState["profile"]}
				onChange={onFieldValueChange}
			/><br/><br/>
			<label htmlFor="gender">Choose gender:</label>
            <select name="gender" id="gender">
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Other</option>
            </select>
			<br/><br/>
            <button onClick={onNext}>next</button>
        </div>
    )
}
