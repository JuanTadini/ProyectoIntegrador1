import React, { useState } from 'react'
import styles from './CrearUsuarioForm.module.css'
import axios from 'axios'
import { useProductStates } from './Context/Context'

const CrearUsuarioForm = () => {

    const {state} = useProductStates();

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

    let url = state.backend_url + '/registro/guardar'

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
            axios.post(url, user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <div className={styles['form-item']}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" placeholder='Nombre' id='nombre' name='nombre' onChange={(event) => setUser({...user, nombre: event.target.value})} />
            </div>
            <div className={styles['form-item']}>
                <label htmlFor='username'>Nombre de usuario</label>
                <input type="text" placeholder='Nombre de usuario' id='username' name='username' onChange={(event) => setUser({...user, username: event.target.value})} />
            </div>
            <div className={styles['form-item']}>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='usuario@mail.com' id='email' name='email' onChange={(event) => setUser({...user, email: event.target.value})} />
            </div>
            <div className={styles['form-item']}>
                <label htmlFor='password'>Contraseña</label>
                <input type="password" placeholder='************' id='password' name='password' onChange={(event) => setUser({...user, password: event.target.value})} />
            </div>
            <button type="submit">Registrar</button>
            
            {form && nombreError && <h3 className={styles['form-field-error']}>Por favor verifique su nombre</h3>}
            {form && usernameError && <h3 className={styles['form-field-error']}>Por favor verifique su nombre de usuario</h3>}
            {form && emailError && <h3 className={styles['form-field-error']}>Por favor verifique su email</h3>}
            {form && passwordError && <h3 className={styles['form-field-error']}>Por favor verifique su contraseña</h3>}
        </form>
    </div>
  )
}

export default CrearUsuarioForm