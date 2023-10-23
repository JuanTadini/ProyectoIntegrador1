import React from 'react'
import { useProductStates } from '../Components/Context/Context'
import Card from '../Components/Card'

const Home = () => {

	const {state} = useProductStates()

	return (
		<main>
			<h1>Home</h1>
			<div className='card-grid'>
				{state.products.map(product => (<Card product={product} key={product.id}/>))}
			</div>
		</main>
	)
}

export default Home