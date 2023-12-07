import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import styles from './RegisterForm.module.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import getModelData from '../Services/getModelData';

const LoginForm = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useProductStates();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const [form, setForm] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let url = state.backend_url + '/login'

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
            .then(res => {
                getModelData(state.backend_url + '/registro/todos').then(resultado => {
                    const userId = resultado.filter((item) => item.username == user.email)[0]
                    dispatch({type: 'GET_USER', payload: {
                        'username': userId.username,
                        'id': userId.id,
                        'roles': userId.appUsuarioRoles,
                    }})
                    localStorage.removeItem("user_id");
                    localStorage.setItem("user_id", userId.id);
                    if (userId.appUsuarioRoles == 'ADMIN') {
                        navigate('/administrar');
                    }
                    else{
                        navigate('/');
                    }
                })
            }).catch(err => console.log(err))
            
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