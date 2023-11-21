import React from 'react'
import { Link } from "react-router-dom";
import CategoryForm from '../Components/CategoryForm'
import styles from './CrearCategoria.module.css'

const CrearCategoria = () => {
  return (
    <div className={styles['form-container']}>
      <div className={styles['nav-form']}>
        <Link to="/administrar">
          {" "}
          Ir al panel de administración
        </Link>
      </div>
      <div className={styles['form-box']}>
        <h4>Registro de categorias</h4>
        <CategoryForm />
      </div>
    </div>
  )
}

export default CrearCategoria