import React, { useState } from 'react'
import styles from './CrearUsuarioForm.module.css'
import axios from 'axios'

const CrearUsuarioForm = () => {

    const [user, setUser] = useState({
        nombre: '',
        username: '',
        email: '',
        password: ''
    })
    
    const [form, setForm] = useState(false);
    const [nombreError, setNombreError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let validarFormulario = user.nombre.length >= 3 && user.username.length >= 5 && user.email.length >= 5 && user.password.length >= 8;

    let url = 'http://localhost:8080/registro/guardar'

    const onSubmitForm = (e) => {
        e.preventDefault();
        setForm(true);
        if (user.nombre.length >= 3) {
            setNombreError(false);
        } 
        else if (user.nombre.length < 3) {
            setNombreError(true);
        }

        if (user.username.length >= 5) {
            setUsernameError(false);
        } 
        else if (user.username.length < 5) {
            setUsernameError(true);
        }
        
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
        
        if (validarFormulario) {
            setUser(user);
            console.log(user);
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
                <label htmlFor='nombre'>Ingrese su nombre</label>
                <input type="text" id='nombre' name='nombre' onChange={(event) => setUser({...user, nombre: event.target.value})} />
                {form && nombreError && <strong className={styles['form-field-error']}>Por favor verifique su nombre</strong>}
            </div>
            <div className={styles['form-item']}>
                <label htmlFor='username'>Ingrese su nombre de usuario</label>
                <input type="text" id='username' name='username' onChange={(event) => setUser({...user, username: event.target.value})} />
                {form && usernameError && <strong className={styles['form-field-error']}>Por favor verifique su nombre de usuario</strong>}
            </div>
            <div className={styles['form-item']}>
                <label htmlFor='email'>Ingrese su email</label>
                <input type="email" id='email' name='email' onChange={(event) => setUser({...user, email: event.target.value})} />
                {form && emailError && <strong className={styles['form-field-error']}>Por favor verifique su email</strong>}
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

export default CrearUsuarioForm