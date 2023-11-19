
import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import ButtonForm from "../Components/ButtonForm.jsx";
import styles from './ProductForm.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductForm = () => {


    const {state} = useProductStates();

    const [product, setProduct] = useState({
        titulo:'',
        descripcion:'',
        imagen: ''
    })
    
    const [form, setForm] = useState(false);
    const [dataError, setDataError] = useState(false);

    let url = 'http://localhost:8080/categoria/guardar'

    const onSubmitForm = (e) => {
        e.preventDefault();
        setForm(true);
        if (product.titulo === '') {
            setDataError('El título no debe estar vacío');
        }

        if (product.titulo !== '') {
            setProduct(product);
            axios.post(url, {product})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
    
  return (
    <div>
        <form>
            <div className={styles['form-item']}>
            <label>Título</label>
                <input type='text' placeholder='Título' onChange={(event) => setProduct({...product, titulo: event.target.value})} name='titulo' />
            </div>
            <div className={styles['form-item']}>
            <label>Descripción</label>
                <input type='text' placeholder='Descripción' onChange={(event) => setProduct({...product, descripcion: event.target.value})} name='descripcion' />
            </div>
            <div className={styles['form-item']}>
            <label>Imagen</label>
                <input className={styles['input-file']} type="file" id="imagen" name="imagen" multiple="multiple" accept="image/png, image/jpeg" onChange={(event) => setProduct({...product, imagen: event.target.value})}/>
            </div>
            <ButtonForm name="Registrar" handleClick={onSubmitForm}/>

            {form && dataError && <h3 className={styles['form-field-error']}>{ dataError }</h3>}
        </form>
    </div>
  )
}


export default ProductForm