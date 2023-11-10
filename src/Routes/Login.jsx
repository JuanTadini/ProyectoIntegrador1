import React, { useState } from 'react'
import { useProductStates } from '../Components/Context/Context';
import LoginForm from '../Components/LoginForm';
import styles from './Login.module.css'


const Login = () => {

    const {state} = useProductStates();
    
  return (
    <div>
      <div className={styles['form-container']}>
        <div className={styles['form-box']}>
          <h2>Registro de nuevo usuario</h2>
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default Login