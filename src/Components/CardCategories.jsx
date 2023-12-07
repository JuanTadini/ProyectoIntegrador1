import React, {useState} from "react";
// import { Link } from "react-router-dom";
import styles from "./CardCategories.module.css";
import { useProductStates } from "./Context/Context";
import getModelData from '../Services/getModelData.jsx';


const CardCategorias = ({ categorias }) => {

	const {state, dispatch} = useProductStates();
    const url = state.backend_url
	
	

	const buscarProductosPorCategorias = (e) => {
        e.preventDefault();
        const paramName = 'categoria';
        const paramValue = categorias.nombre;
        const back_url = url + '/productos/categoria'
        const fullUrl = `${back_url}?${paramName}=${paramValue}`;
        getModelData(fullUrl).then(res => {
            dispatch({type: 'GET_PRODUCTS_SEARCH', payload: res.map((product) => {
                return {
                    id: product.id, title: product.nombre,
                    image: product.imagen, price: product.precio
                };
            })})
            dispatch({type: 'SHOW_PRODUCTS_SEARCH', payload: true})
        })
        .catch(err => console.log(err))
    }
	
	return (
		<div className={styles["card"]}>
			<h2 className={styles["h2Categoria"]}>{categorias.nombre}</h2>
            <p>{categorias.descripcion}</p>
				<img className={styles["button-img-categorias"]}
					src={categorias.urlimagen}
					alt=""
				/>
				<button onClick={buscarProductosPorCategorias} className={styles["aCategoria"]}>Ver productos</button>
			{/* <Link className={styles["aCategoria"]} to={"/Categorias/" + categorias.id}>
				<button >Ver productos</button>
			</Link> */}
		</div>
	);
};

export default CardCategorias;
