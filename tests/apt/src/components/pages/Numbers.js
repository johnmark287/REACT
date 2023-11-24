// import React from 'react'

const Numbers = (number) => {
	let arr = [];

	for (let index = 0; index < number; index++)
	{
		// console.log(index + 1);
		arr[index] = index + 1;
	}
	
    return (arr);
}
// let list = [...(Numbers(5))];
// console.log(list);

export default Numbers;
