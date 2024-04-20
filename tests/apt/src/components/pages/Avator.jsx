import React from 'react'

// destructuring in the Avator parenthesis
export const Avator = ({ radius, image, size }) => {
	return (
		<div className='avator'>
			<img src={ image } style={{ borderRadius: radius, width: size, height: size}} /><br></br>
		</div>
	)
}

export default Avator
