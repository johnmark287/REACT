import React from 'react'

// destructuring in the Avator parenthesis
export const Avator = ({ radius, image, size }) => {
	return (
		<div>
			<img src={ image } style={{ borderRadius: radius, width: size, height: size}} /><br></br>
			<p>Python</p>
		</div>
	)
}

// export default Avator
