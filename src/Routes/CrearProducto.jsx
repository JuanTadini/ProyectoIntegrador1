import React from 'react'
import { Link } from "react-router-dom";
import ProductForm from '../Components/ProductForm'
import styles from './CrearProducto.module.css'

const CrearProducto = () => {
  return (
    <div className={styles['form-container']}>
      <div className={styles['nav-form']}>
        <Link to="/administrar">
          {" "}
          Ir al panel de administración
        </Link>
      </div>
      <div className={styles['form-box']}>
        <h4>Registro de productos</h4>
        <ProductForm />
      </div>
    </div>
  )
}

export default CrearProducto