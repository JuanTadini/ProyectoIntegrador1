
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStates } from "./Context/Context";
import ButtonForm from "../Components/ButtonForm.jsx";
import styles from './ProductFeatureForm.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import getModelData from '../Services/getModelData.jsx';

const ProductFeatureForm = () => {
    const params = useParams()
    const { state } = useProductStates();

    const [productFeature, setProductFeature] = useState({
        nombre: '',
        icono:'',
    });

    const [error, setError] = useState(null);

    let url = state.backend_url + '/caracteristicas';

    useEffect(() => {
        if (params.id){
            getModelData(state.backend_url + '/caracteristicas/' + params.id).then(resultado => {
                console.log(resultado)
                setProductFeature(resultado)
            });
        }
        }, []);
    
    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (productFeature.nombre === '') {
            setError('El nombre no debe estar vacío');
            return;
        }

        try {
            let send_url = url + '/guardar'
            // if (productFeature.id && productFeature.id !== '') {
            //     send_url += '/actualizar'
            // } else {
            //     send_url += '/guardar'
            // }
            // const res = await axios.post(send_url, productFeature);
            axios.post(send_url, productFeature)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } catch (err) {
            console.error(err);
        }
    };

    return (
    <div>
        <form>
            <div className={styles['form-item']}>
                <input type='hidden' placeholder='Id' name='Id' onChange={(event) => setProductFeature({...productFeature, id: event.target.value})} value={productFeature.id} />
            </div>
            <div className={styles['form-item']}>
                <label>Descripción</label>
                <input type='text' placeholder='Descripción' onChange={(event) => setProductFeature({...productFeature, nombre: event.target.value})} name='nombre' value={productFeature.nombre} />
            </div>
            <div className={styles['form-item']}>
                <label>Icono</label>
                <input className={styles['input-file']} type="file" id="icono" name="icono" accept="image/png, image/jpeg" onChange={(event) => setProductFeature({...productFeature, icono: event.target.value})} />
            </div>
            <ButtonForm name="Registrar" handleClick={onSubmitForm}/>

            { error && <h3 className={styles['form-field-error']}>{ error }</h3>}
        </form>
    </div>
  )
};


export default ProductFeatureForm