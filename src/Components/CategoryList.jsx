
import React, { useEffect, useState } from 'react'
import { useProductStates } from "./Context/Context";
import GridList from "../Components/GridList.jsx";
import styles from './CategoryList.module.css';
import { Link } from "react-router-dom";
import getModelData from '../Services/getModelData.jsx'

const CategoryList = () => {


    const {state} = useProductStates();
    const column_names = [
        {'name': 'nombre', 'description': 'Nombre', 'type': 'string'},
        {'name': 'descripcion', 'description': 'Descripción', 'type': 'string'},
        {'name': 'urlimagen', 'description': 'Imagen', 'type': 'image'}
    ]

    const [records, setRecords] = useState([]);

    useEffect(() => {
        getModelData(state.backend_url + '/categorias/todos').then(resultado => {
            setRecords(resultado)
        });
    }, []);

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

        <GridList column_names={column_names} data={records} backend_url='/categorias' form_url='/administrar/categorias/crearCategoria/'/>
    </>
  )
}


export default CategoryList