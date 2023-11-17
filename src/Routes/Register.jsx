import React from 'react'
import { Link } from "react-router-dom";
import RegisterForm from '../Components/RegisterForm'
import styles from './Register.module.css'

const Register = () => {


  return (
    <div>
      <div className={styles['form-container']}>
        <div className={styles['nav-form']}>
          <Link to="/">
            {" "}
            Regresar al inicio
          </Link>
        </div>
        <div className={styles['form-box']}>
          <h4>Registro de usuario</h4>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register