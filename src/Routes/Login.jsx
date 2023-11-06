import React, { useState } from 'react'
import { useProductStates } from '../Components/Context/Context';
import LoginForm from '../Components/LoginForm';


const Login = () => {

    const {state} = useProductStates();
    
  return (
    <div>
        <h2>Registro de nuevo usuario</h2>
        <LoginForm/>
    </div>
  )
}

export default Login