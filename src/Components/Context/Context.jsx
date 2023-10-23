import {useContext, createContext, useState, useReducer, useEffect} from 'react'
import { datosFicticios } from './datos'

const ProductStates = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return {...state, products: action.payload}
		case 'GET_PRODUCT':
			return {...state, product: action.payload}
		// case 'SWITCH_THEME':
		// 	return {...state, theme: !state.theme}
		default:
			break;
	}
}

const initialState = {
    products: [],
    product: {}
}

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // dejo esto acá para cuando tengamos la API
    // const url = 'https://nombreDelDominio.com/products'

    // useEffect(() => {
	// 	axios(url)
	// 	.then(res => dispatch({type: 'GET_PRODUCTS', payload: res.data}))
	// }, [])

    const data = datosFicticios

    useEffect(() => {
        dispatch({type: 'GET_PRODUCTS', payload: data})
    }, [])

    return (
        <ProductStates.Provider value={{state, dispatch}}>
            {children}
        </ProductStates.Provider>
    )
}

export default ContextProvider

export const useProductStates = () => useContext(ProductStates)