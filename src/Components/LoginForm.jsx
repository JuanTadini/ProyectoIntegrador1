import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import styles from './RegisterForm.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const LoginForm = () => {

    const {state} = useProductStates();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const [form, setForm] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let url = 'http://localhost:8080/Login'
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        setForm(true);
        if (user.email.length >= 5) {
            setEmailError(false);
        }
        else if (user.email.length < 5) {
            setEmailError(true);
        }

        if (user.password.length >= 8) {
            setPasswordError(false);
        }
        else if (user.password.length < 8) {
            setPasswordError(true);
        }
        
        
        if (user.email.length >= 5 && user.password.length >= 8) {
            setUser(user);
            axios.post(url, user, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
    
  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <div className={styles['form-item']}>
            <label>Email</label>
                <input type="email" placeholder='usuario@gmail.com' onChange={(event) => setUser({...user, email: event.target.value})} name='email' />
            </div>
            <div className={styles['form-item']}>
                <label>Contraseña</label>
                <input type="password" placeholder='************' onChange={(event) => setUser({...user, password: event.target.value})} />
            </div>
            <button type="submit">Enviar</button>
            <div className={styles['link-container']}>
              <p>¿Eres nuevo aquí?</p>
              <Link to='/register'>
						{" "}Crear Cuenta</Link>
            </div>
            {form && emailError && <h3 className={styles['form-field-error']}>Por favor verifique su nombre de usuario</h3>}
            {form && passwordError && <h3 className={styles['form-field-error']}>Por favor verifique su contraseña</h3>}
            {form && !emailError && !passwordError && <h3 style={{color: 'green'}}>Login exitoso</h3>}
        </form>
    </div>
  )
}

export default LoginForm