
import React, { useState , useEffect } from 'react'
import { useProductStates } from "./Context/Context.jsx";
import GridList from "./GridList.jsx";
import styles from './ProductFeatureList.module.css';
import { Link } from "react-router-dom";
import getModelData from '../Services/getModelData.jsx';

const ProductFeatureList = () => {

    const {state} = useProductStates();
    const column_names = [
        {'name': 'icono', 'description': 'Icono', 'type': 'image'},
        {'name': 'nombre', 'description': 'Característica', 'type': 'string'},
    ]

    const [records, setRecords] = useState([]);

     useEffect(() => {
        getModelData(state.backend_url + '/caracteristicas/todos').then(resultado => {
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
                        <Link to="/administrar/features/crearProductFeature">
                            {" "}
                            Agregar característica
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <GridList column_names={column_names} data={records} backend_url='/caracteristicas' form_url='/administrar/features/crearProductFeature/'/>
    </>
  )
}


export default ProductFeatureList