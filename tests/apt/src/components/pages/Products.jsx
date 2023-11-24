import React, { useState } from 'react'
import { Paginator }  from '../pagination/Paginator'
import Numbers from './Numbers'

export const Products = ({ products=[] }) => {
	const [page, setPage] = useState(1);

	const handleNext = () => {

	}
	const handlePrev = () => {
		
	}

	const handlePageSelected = (number) => {
		setPage(number);
	}

    return (
		<div>
			{ 
				(products.slice(0, 5)).map((product, index) => 
				<div key={index} >
					{index + 1}. {product}
				</div> )
			}
			{/* APi Paginator */}
			<Paginator 
				totalCount={ products.length }
				pageSize={4} 
				page={page}
				onNext={handleNext} 
				onPrev={handlePrev}
				onPageSelected={handlePageSelected}
			/>
		</div>
	)
}
