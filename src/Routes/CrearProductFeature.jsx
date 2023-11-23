import React from 'react'
import { Link } from "react-router-dom";
import ProductFeatureForm from '../Components/ProductFeatureForm'
import styles from './CrearProductFeature.module.css'

const CrearProductFeature = () => {
  return (
    <div className={styles['form-container']}>
      <div className={styles['nav-form']}>
        <Link to="/administrar">
          {" "}
          Ir al panel de administración
        </Link>
      </div>
      <div className={styles['form-box']}>
        <h4>Registro de características</h4>
        <ProductFeatureForm />
      </div>
    </div>
  )
}

export default CrearProductFeature