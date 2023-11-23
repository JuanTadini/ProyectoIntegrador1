
import React, { useState , useEffect } from 'react'
import { useProductStates } from "./Context/Context.jsx";
import GridList from "./GridList.jsx";
import styles from './ProductList.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductList = () => {


    const {state} = useProductStates();
    const column_names = [
        {'name': 'nombre', 'description': 'Título', 'type': 'string'},
        {'name': 'descripcion', 'description': 'Descripción', 'type': 'string'},
        {'precio': 'precio', 'description': 'Precio', 'type': 'string'},
        {'name': 'imagen', 'description': 'Imagen', 'type': 'image'}
    ]


 const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulando una solicitud GET a una API
    const fetchProducts = async () => {
      try {
        const response = await fetch(state.backend_url + '/productos/todos');
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.statusText}`);
        }
        const responseData = await response.json();
        setProducts(responseData);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };

    fetchProducts();
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

        <GridList column_names={column_names} data={products} backend_url='/product'/>
    </>
  )
}


export default ProductList