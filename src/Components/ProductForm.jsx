
import React, { useState,  } from 'react'
import { useProductStates } from "./Context/Context";
import ButtonForm from "../Components/ButtonForm.jsx";
import styles from './ProductForm.module.css';
import axios from 'axios';

const ProductForm = () => {

        const { state } = useProductStates();
    
        const [product, setProduct] = useState({
            nombre: '',
            descripcion: '',
            //precio:'',
            imagen: ''
        });
    
        const [error, setError] = useState(null);
    
        let url = 'http://localhost:8080/productos/guardar';
    
        const onSubmitForm = async (e) => {
            e.preventDefault();
    
            if (product.nombre === '') {
                setError('El título no debe estar vacío');
                return;
            }
    
            try {
                const res = await axios.post(url, product);
                console.log(res);
            } catch (err) {
                console.error(err);
            }
        };

        return (
    <div>
        <form>
            <div className={styles['form-item']}>
            <label>Nombre</label>
                <input type='text' placeholder='Nombre' onChange={(event) => setProduct({...product, nombre: event.target.value})} name='nombre' />
            </div>
            <div className={styles['form-item']}>
            <label>Descripción</label>
                <input type='text' placeholder='Descripción' onChange={(event) => setProduct({...product, descripcion: event.target.value})} name='descripcion' />
            </div>
            {/* <div className={styles['form-item']}>
            <label>Precio</label>
                <input type="number" placeholder='12.3' onChange={(event) => setProduct({...product, precio: event.target.value})}  name="precio"/>
            </div> */}
            <div className={styles['form-item']}>
            <label>Imagen</label>
                <input className={styles['input-file']} type="file" id="imagen" name="imagen" multiple="multiple" accept="image/png, image/jpeg" onChange={(event) => setProduct({...product, imagen: event.target.value})}/>
            </div>
            <ButtonForm name="Registrar" handleClick={onSubmitForm}/>

            { error && <h3 className={styles['form-field-error']}>{ error }</h3>}
        </form>
    </div>
  )
    };
    

    // const {state} = useProductStates();

    // const [product, setProduct] = useState({
    //     nombre:'',
    //     descripcion:'',
    //     imagen: ''
    // })
    
    // const [form, setForm] = useState(false);
    // const [dataError, setDataError] = useState(false);

    // let url = 'http://localhost:8080/productos/guardar'

    // const onSubmitForm = (e) => {
    //     e.preventDefault();
    //     setForm(form);
    //     //console.log(setForm)
    //     if (product.nombre === '') {
    //         setDataError('El título no debe estar vacío');
    //     }

    //     if (product.nombre !== '') {
    //         setProduct(product);
    //         axios.post(url, {product})
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //     }
    // }
    
  



export default ProductForm