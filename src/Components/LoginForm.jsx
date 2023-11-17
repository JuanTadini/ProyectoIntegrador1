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
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let url = 'http://localhost:8080/login'
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        setForm(true);
        if (user.email.length >= 5) {
            setUsernameError(false);
        }
        if (user.password.length >= 8) {
            setPasswordError(false);
        }
        if (user.email.length < 3) {
            setUsernameError(true);
        }
        if (user.password.length < 8) {
            setPasswordError(true);
        }
        if (user.email.length >= 5 && user.password.length >= 8) {
            setUser(user);
            axios.post(url, {user})
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
            {form && usernameError && <h3 className={styles['form-field-error']}>Por favor verifique su nombre de usuario</h3>}
            {form && passwordError && <h3 className={styles['form-field-error']}>Por favor verifique su contraseña</h3>}
            {form && !usernameError && !passwordError && <h3 style={{color: 'green'}}>Login exitoso</h3>}
        </form>
    </div>
  )
}

export default LoginForm