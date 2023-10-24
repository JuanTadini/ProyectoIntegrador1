import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'

const ContextGlobal = createContext()

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

    const url = 'https://fakestoreapi.com/products'

    useEffect(() => {
		axios(url)
		.then(res => dispatch({type: 'GET_PRODUCTS', payload: res.data}))
	}, [])

    return (
        <ContextGlobal.Provider value={{state, dispatch}}>
            {children}
        </ContextGlobal.Provider>
    )
}

export default ContextProvider

export const useProductStates = () => useContext(ContextGlobal)