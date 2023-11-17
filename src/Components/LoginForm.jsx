import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import styles from './LoginForm.module.css'
import axios from 'axios';

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
                <label htmlFor='email'>Ingrese su email</label>
                <input type="email" id='email' name='email' onChange={(event) => setUser({...user, email: event.target.value})} />
                {form && emailError && <strong className={styles['form-field-error']}>Por favor verifique su nombre de usuario</strong>}
            </div>
            <div className={styles['form-item']}>
                <label htmlFor='password'>Ingrese su contraseña</label>
                <input type="password" id='password' name='password' onChange={(event) => setUser({...user, password: event.target.value})} />
                {form && passwordError && <strong className={styles['form-field-error']}>Por favor verifique su contraseña</strong>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default LoginForm