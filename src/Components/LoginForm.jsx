import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import styles from './LoginForm.module.css'

const LoginForm = () => {

    const {state} = useProductStates();

    const [user, setUser] = useState({
        name: '',
        password: ''
    })
    
    const [form, setForm] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        setForm(true);
        if (user.name.length >= 3 && user.password.length >= 8) {
            // hacer post con los datos ingresados y luego, segun la respuesta, hacer login o no
            setUser(user);
            setUsernameError(false);
            setPasswordError(false);
        } else if (user.name.length <= 2) {
            setUsernameError(true);
        } else if (user.password.length <= 7) {
            setPasswordError(true);
        }
    }
    
  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <label>Ingrese su nombre de usuario</label>
            <input type="text" onChange={(event) => setUser({...user, name: event.target.value})} />
            <label>Ingrese su contraseña</label>
            <input type="password" onChange={(event) => setUser({...user, password: event.target.value})} />
            <button type="submit">Enviar</button>
            {form && usernameError && <h3 style={{color: 'red'}}>Por favor verifique su nombre de usuario</h3>}
            {form && passwordError && <h3 style={{color: 'red'}}>Por favor verifique su contraseña</h3>}
            {form && !usernameError && !passwordError && <h3 style={{color: 'green'}}>Login exitoso</h3>}
        </form>
    </div>
  )
}

export default LoginForm