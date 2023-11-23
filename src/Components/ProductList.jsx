
import React, { useState , useEffect } from 'react'
import { useProductStates } from "./Context/Context.jsx";
import GridList from "./GridList.jsx";
import styles from './ProductList.module.css';
import { Link } from "react-router-dom";
import getModelData from '../Services/getModelData.jsx';

const ProductList = () => {


    const {state} = useProductStates();
    const column_names = [
        {'name': 'nombre', 'description': 'Título', 'type': 'string'},
        {'name': 'descripcion', 'description': 'Descripción', 'type': 'string'},
        {'precio': 'precio', 'description': 'Precio', 'type': 'string'},
        {'name': 'imagen', 'description': 'Imagen', 'type': 'image'}
    ]

    const [records, setRecords] = useState([]);

    useEffect(() => {
      getModelData(state.backend_url + '/productos/todos').then(resultado => {
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
                        <Link to="/administrar/productos/crearProducto">
                            {" "}
                            Agregar producto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <GridList column_names={column_names} data={records} backend_url='/product' form_url='/administrar/productos/crearProducto/' />
    </>
  )
}


export default ProductList