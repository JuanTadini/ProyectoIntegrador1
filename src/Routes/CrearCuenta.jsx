import React from 'react'
import styles from './Register.module.css'
import RegisterForm from '../Components/RegisterForm'

const CrearCuenta = () => {

    
  return (
    <div>
        <div className={styles['form-container']}>
            <div className={styles['form-box']}>
                <h2>Registro de nuevo usuario</h2>
                <RegisterForm/>
            </div>
        </div>
    </div>
  )
}

export default CrearCuenta