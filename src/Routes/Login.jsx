import React from 'react'
import { useProductStates } from '../Components/Context/Context';
import LoginForm from '../Components/LoginForm';
import styles from './Register.module.css';
import { Link } from "react-router-dom";


const Login = () => {

    const {state} = useProductStates();
    
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
    <h4>Iniciar sesión</h4>
    <LoginForm/>
    
  </div>
</div>
</div>
  )
}


export default Login