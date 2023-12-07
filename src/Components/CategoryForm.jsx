
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useProductStates } from "./Context/Context";
import ButtonForm from "../Components/ButtonForm.jsx";
import styles from './CategoryForm.module.css';
import axios from 'axios';
import getModelData from '../Services/getModelData.jsx';


const CategoryForm = () => {
    const params = useParams()
    const {state} = useProductStates();

    const [category, setCategory] = useState({
        // id: params.id && params.id || '',
        nombre: '',
        descripcion: '',
        urlimagen: 'https://images.pexels.com/photos/15412239/pexels-photo-15412239/free-photo-of-resfriado-nieve-hombre-saltando.jpeg?auto=compress&cs=tinysrgb&w=1600',
    })
    
    const [form, setForm] = useState(false);
    const [dataError, setDataError] = useState(false);

    let url = state.backend_url + '/categorias'
    const [error, setError] = useState(null);

    useEffect(() => {
        if (params.id)
            getModelData(state.backend_url + '/categorias/' + params.id).then(resultado => {
                console.log(resultado)
                setCategory(resultado)
            });
     }, []);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setForm(true);
        if (category.nombre === '') {
            setDataError('El título no debe estar vacío');
        }

        if (category.nombre !== '') {
            setCategory(category);
            let back_url = ''
            if (category.id && category.id !== '') {
                console.log('Mandar a actualizar registro')
                back_url = url + '/actualizar'
            } else {
                back_url = url + '/guardar'
            }
            console.log(category);
            // axios.post(state.backend_url + '/categorias/upload' , category)
            //     .then(res => console.log(res))
            //     .catch(err => console.log(err))
            axios.post(back_url , category)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }
    
  return (
    <div>
        <form>
            <div className={styles['form-item']}>
                <input type='hidden' placeholder='Id' name='titulo' onChange={(event) => setCategory({...category, id: event.target.value})} value={category.id} />
            </div>
            <div className={styles['form-item']}>
                <label>Título</label>
                <input type='text' placeholder='Título' onChange={(event) => setCategory({...category, nombre: event.target.value})} name='titulo' value={category.nombre} />
            </div>
            <div className={styles['form-item']}>
                <label>Descripción</label>
                <input type='text' placeholder='Descripción' onChange={(event) => setCategory({...category, descripcion: event.target.value})} name='descripcion' value={category.descripcion} />
            </div>
            <div className={styles['form-item']}>
                <label>Imagen</label>
                <input className={styles['input-file']} type="file" id="imagen1" multiple="multiple" name="imagen1" accept="image/png, image/jpeg" />
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