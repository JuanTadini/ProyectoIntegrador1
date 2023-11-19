
import React, { useState } from 'react'
import { useProductStates } from "./Context/Context.jsx";
import GridList from "./GridList.jsx";
import styles from './ProductList.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductList = () => {


    const {state} = useProductStates();
    const column_names = [
        {'name': 'title', 'description': 'Título', 'type': 'string'},
        {'name': 'description', 'description': 'Descripción', 'type': 'string'},
        {'name': 'image', 'description': 'Imagen', 'type': 'image'}
    ]
    const url = state.backend_url + '/product/delete'

return (
    <>
        <nav className={styles["navbar"]}>
            <div className={styles["nav-elements"]}>
                <ul>
                    <li>
                        <Link to="/administrar">
                            {" "}
                            Volver
                        </Link>
                    </li>
                    <li>
                        <Link to="/administrar/productos/crearProducto">
                            {" "}
                            Agregar producto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <GridList column_names={column_names} data={state.products} backend_url={url}/>
    </>
  )
}


export default ProductList