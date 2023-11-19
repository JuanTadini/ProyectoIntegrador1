
import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import GridList from "../Components/GridList.jsx";
import styles from './CategoryList.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const CategoryList = () => {


    const {state} = useProductStates();
    const column_names = [
        {'name': 'title', 'description': 'Título', 'type': 'string'},
        {'name': 'description', 'description': 'Descripción', 'type': 'string'},
        {'name': 'image', 'description': 'Imagen', 'type': 'image'}
    ]

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
                        <Link to="/administrar/categorias/crearCategoria">
                            {" "}
                            Agregar categoría
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <GridList column_names={column_names} data={state.categories}/>
    </>
  )
}


export default CategoryList