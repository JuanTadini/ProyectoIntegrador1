import React from 'react'
import CrearUsuarioForm from '../Components/CrearUsuarioForm'
import styles from './CrearUsuario.module.css'

const CrearUsuario = () => {
  return (
    <div>
      <div className={styles['form-container']}>
        <div className={styles['form-box']}>
          <h2>Crear usuario</h2>
          <CrearUsuarioForm/>
        </div>
      </div>
    </div>
  )
}

export default CrearUsuario