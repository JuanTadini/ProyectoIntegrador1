import axios from 'axios'
import {useContext, createContext, useReducer, useEffect} from 'react'

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

	function get_reponse_data(response){
		let count =  0
		let aux = []
		while (count < 10) {
			const indexNumber = Math.floor(Math.random() * 19);
			if(aux.indexOf(indexNumber) < 0){
				aux.push(indexNumber)
				count = count + 1
			}
		}
		return aux.map((i) => {
			return {
				id: response[i].id, title: response[i].title,
				image: response[i].image, price: response[i].price
			};
		})
	}

    useEffect(() => {
		axios(url)
		.then(res => dispatch({
			type: 'GET_PRODUCTS',
			payload: get_reponse_data(res.data)
		}))
	}, [])

    return (
        <ContextGlobal.Provider value={{state, dispatch}}>
            {children}
        </ContextGlobal.Provider>
    )
}

export default ContextProvider

export const useProductStates = () => useContext(ContextGlobal)
