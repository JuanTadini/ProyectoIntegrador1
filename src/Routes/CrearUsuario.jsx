import React from 'react'
import CrearUsuarioForm from '../Components/CrearUsuarioForm'
import styles from './CrearUsuario.module.css'
import { Link } from 'react-router-dom'

const CrearUsuario = () => {
  return (
    <div>
      <div className={styles['form-container']}>
      <div className={styles['nav-form']}>
        <Link to="/administrar">
          {" "}
          Ir al panel de administración
        </Link>
      </div>
        <div className={styles['form-box']}>
          <h4>Crear usuario</h4>
          <CrearUsuarioForm/>
        </div>
      </div>
    </div>
  )
}

export default CrearUsuario