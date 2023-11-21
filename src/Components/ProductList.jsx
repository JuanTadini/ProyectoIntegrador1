
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
    const url = state.backend_url + '/product/delete'


 const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulando una solicitud GET a una API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/productos/todos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };

    fetchProducts();
  }, []); // El segundo argumento del useEffect ([]) indica que se ejecutará solo una vez al montar el componente

//   return (
//     <div>
//       <h2>Listado de Productos</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <h3>{product.nombre}</h3>
//             <p>{product.descripcion}</p>
//             <p>Precio: {product.precio}</p>
//             {/* Otros detalles del producto */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };




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