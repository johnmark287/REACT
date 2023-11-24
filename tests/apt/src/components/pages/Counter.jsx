import React, { useState } from 'react'
import './Counter.css'

export const Counter = () => {
	const[counter, setCounter] = useState(0)
	const handleIncrement = () => {
		setCounter(counter + 1);
	}
	const handleDecrement = () => {
			setCounter(counter - 1);
	}
	return (
		<div className='Counter' >
			<button onClick={ handleDecrement } >-</button>
			<span>{ counter }</span>
			<button onClick={ handleIncrement }>+</button>
		</div>
	)
}
