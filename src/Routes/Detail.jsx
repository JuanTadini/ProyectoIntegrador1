import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStates } from '../Components/Context/Context'

const Detail = () => {

	const {state, dispatch} = useProductStates()

    const params = useParams()

	const url = `https://fakestoreapi.com/products/${params.id}`

	useEffect(() => {
		axios(url)
		.then(res => dispatch({type: 'GET_PRODUCT', payload: res.data}))
	}, [])

	return (
		<div>
			<h1>Product: {state.product.title}</h1>
			<h2>id: {state.product.id}</h2>
			<img style={{height: 100, width: 100}} src={state.product.image} alt="" />
			<h2>Category: {state.product.category}</h2>
			<h2>{state.product.description}</h2>
			<h2>Cost/day: {state.product.price}</h2>
		</div>
	)
}

export default Detail