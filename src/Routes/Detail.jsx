import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStates } from '../Components/Context/Context'
import { datosFicticios } from '../Components/Context/datos'

const Detail = () => {

	const {state, dispatch} = useProductStates()

    const params = useParams()

	const data = datosFicticios

	useEffect(() => {
		dispatch({type: 'GET_PRODUCT', payload: data[params.id - 1]})
	}, [])

	const fotos = [state.product.images]

	console.log(data[params.id - 1])

	console.log([state.product.images])

	return (
		<div>
			<h1>Product: {state.product.name}</h1>
			<h2>{state.product.description}</h2>
			{/* <img style={{height: 100, width: 100}} src={fotos[0][0]} alt="" /> */}
		</div>
	)
}

export default Detail