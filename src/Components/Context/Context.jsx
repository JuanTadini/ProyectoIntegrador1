import axios from 'axios'
import {useContext, createContext, useReducer, useEffect} from 'react'

const ContextGlobal = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return {...state, products: action.payload}
		case 'GET_PRODUCT':
			return {...state, product: action.payload}
		case 'GET_CATEGORY':	
			return {...state, categories: action.payload}
			case 'GET_RECOMMENDATION':	
			return {...state, recommendation: action.payload}
		// case 'SWITCH_THEME':
		// 	return {...state, theme: !state.theme}
		default:
			break;
	}
}

const initialState = {
	user: {},
    products: [],
    product: {},
	categories:[],
	recommendation:[],
	backend_url: 'http://localhost:8080',
	// backend_url: 'https://fakestoreapi.com',
}

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // const url = initialState['backend_url'] + '/products'
    const product_url = initialState['backend_url'] + '/productos/todos'
    // const product_url = initialState['backend_url'] + '/products'

	function get_reponse_data(response , cantidad){
		let count =  0
		let aux = []
		console.log(response)
		if(response) {
			if (cantidad > response.length)
			{
				cantidad = response.length
			}
			while (count < cantidad) {
				const indexNumber = Math.floor(Math.random() * response.length);
				if(aux.indexOf(indexNumber) < 0){
					aux.push(indexNumber)
					count = count + 1
				}
			}
		}

		return aux.map((i) => {
			return {
				id: response[i].id, title: response[i].nombre,
				image: response[i].imagen, price: response[i].price
			};
		})
	}

	function get_api_data(api_url) {
		const fetchData = async () => {
			try {
				const response = await fetch(api_url);
				if (!response.ok) {
					throw new Error(`Error en la petición: ${response.statusText}`);
				}
				const responseData = await response.json();
				return responseData
			} catch (error) {
				console.error('Error al obtener la lista de productos:', error);
			}
		};
		return fetchData()
	}
	

    useEffect(() => {
		get_api_data(product_url).then(res => dispatch({
			type: 'GET_PRODUCTS',
			payload: get_reponse_data(res, 19)
		}))

		// get_api_data(product_url).then(res => console.log(res))

		// axios(url)
		// .then(res => dispatch({
		// 	type: 'GET_PRODUCTS',
		// 	payload: get_reponse_data(res.data, 19)
		// }))

		// axios(url)
		// .then(res => dispatch({
		// 	type: 'GET_CATEGORY',
		// 	payload: get_reponse_data(res.data, 4)
		// }))

		// axios(url)
		// .then(res => dispatch({
		// 	type: 'GET_RECOMMENDATION',
		// 	payload: get_reponse_data(res.data, 4)
		// }))
	}, 
	[])



    return (
        <ContextGlobal.Provider value={{state, dispatch}}>
            {children}
        </ContextGlobal.Provider>
    )
}

export default ContextProvider

export const useProductStates = () => useContext(ContextGlobal)
