
import React, { useState , useEffect } from 'react'
import { useProductStates } from "./Context/Context.jsx";
import GridList from "./GridList.jsx";
import styles from './ProductFeatureList.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductFeatureList = () => {

    const {state} = useProductStates();
    const column_names = [
        {'name': 'icono', 'description': 'Icono', 'type': 'image'},
        {'name': 'nombre', 'description': 'Característica', 'type': 'string'},
    ]


 const [products, setProductFeatures] = useState([]);

  useEffect(() => {
    // Simulando una solicitud GET a una API
    const fetchProductFeatures = async () => {
      try {
        const response = await axios.get(state.backend_url + '/productos/todos');
        setProductFeatures(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de características:', error);
      }
    };

    fetchProductFeatures();
  }, []); // El segundo argumento del useEffect ([]) indica que se ejecutará solo una vez al montar el componente

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

        <GridList column_names={column_names} data={state.products} backend_url='/product'/>
    </>
  )
}


export default ProductFeatureList