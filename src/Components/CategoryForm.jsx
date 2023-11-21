
import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import ButtonForm from "../Components/ButtonForm.jsx";
import styles from './CategoryForm.module.css';
import axios from 'axios';


const CategoryForm = () => {


    const {state} = useProductStates();

    const [category, setCategory] = useState({
        nombre:'',
        descripcion:'',
        urlimagen:'',
        
    })
    
    const [form, setForm] = useState(false);
    const [dataError, setDataError] = useState(false);

    let url = 'http://localhost:8080/categorias/upload'

    const onSubmitForm = (e) => {
         e.preventDefault();
        setForm(true);
        if (category.nombre === '') {
            setDataError('El título no debe estar vacío');
        }

        if (category.nombre !== '') {
            setCategory(category);
            axios.post(url, category)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
    
  return (
    <div>
        <form>
            <div className={styles['form-item']}>
            <label>Título</label>
                <input type='text' placeholder='Título' onChange={(event) => setCategory({...category, nombre: event.target.value})} name='titulo' />
            </div>
            <div className={styles['form-item']}>
            <label>Descripción</label>
                <input type='text' placeholder='Descripción' onChange={(event) => setCategory({...category, descripcion: event.target.value})} name='descripcion' />
            </div>
            <div className={styles['form-item']}>
            <label>Imagen</label>
                <input className={styles['input-file']} type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" onChange={(event) => setCategory({...category, imagen: event.target.value})}/>
            </div>
            <ButtonForm name="Registrar" handleClick={onSubmitForm}/>

            {form && dataError && <h3 className={styles['form-field-error']}>{ dataError }</h3>}
            {/* {form && passwordError && <h3 className={styles['form-field-error']}>Por favor verifique su contraseña</h3>}
            {form && !usernameError && !passwordError && <h3 style={{color: 'green'}}>Login exitoso</h3>} */}
        </form>
    </div>
  )
}


export default CategoryForm