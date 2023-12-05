
import React, { useEffect, useState } from 'react'
import { useProductStates } from "./Context/Context";
import ButtonForm from "../Components/ButtonForm.jsx";
import styles from './ProductForm.module.css';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import getModelData from '../Services/getModelData.jsx';

const ProductForm = () => {
    const params = useParams()
    const { state } = useProductStates();

    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        precio:'',
        imagen: '',
        categoria: {},
        caracteristicas: [],
    });
    const [categories, setCategories] = useState([]);
    const [features, setFeatures] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                await getModelData(state.backend_url + '/categorias/todos').then(resultado => {
                    setCategories(resultado)
                });
            } catch (error) {
                console.error('Error al obtener la lista de categorías:', error);
            }
        };
        const fetchProductFeature = async () => {
            try {
                await getModelData(state.backend_url + '/caracteristicas/todos').then(resultado => {
                    setFeatures(resultado)
                });
            } catch (error) {
                console.error('Error al obtener la lista de características:', error);
            }
        };

        fetchCategories();
        fetchProductFeature();
        if (params.id) {
            getModelData(state.backend_url + '/productos/' + params.id).then(resultado => {
                console.log(resultado)
                setProduct(resultado)
                const selectedValues = Array.from(resultado.caracteristicas, item => item.id, 10);
                console.log(selectedValues)
                setSelectedOptions(selectedValues);
            });
        }
        
        }, []);

    const [error, setError] = useState(null);

    let url = state.backend_url + '/productos/guardar';

    const handleCategoryChange = (event) => {
        console.log(event.target.value)
        const current_category = categories.filter((item) => item.id == event.target.value)
        console.log(current_category)
        setProduct({...product, categoria: current_category[0]})
    }

    const handleFeaturesChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, option => parseInt(option.value, 10));
        setSelectedOptions(selectedValues);
        const currents = features.filter((item) => selectedValues.includes(item.id))
        setProduct({...product, caracteristicas: currents})
    }

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
                <input type='hidden' placeholder='Id' name='titulo' onChange={(event) => setProduct({ ...product, id: event.target.value })} value={product.id} />
            </div>
            <div className={styles['form-item']}>
                <label>Nombre</label>
                <input type='text' placeholder='Nombre' onChange={(event) => setProduct({...product, nombre: event.target.value})} name='nombre' value={product.nombre} />
            </div>
            <div className={styles['form-item']}>
                <label>Descripción</label>
                <input type='text' placeholder='Descripción' onChange={(event) => setProduct({...product, descripcion: event.target.value})} name='descripcion' value={product.descripcion} />
            </div>
            <div className={styles['form-item']}>
            <label>Precio</label>
                <input type="number" placeholder='12.3' onChange={(event) => setProduct({...product, precio: event.target.value})}  name="precio" value={product.precio}/>
            </div>
            <div className={styles['form-item']}>
                <label>Categoría</label>
                <select name="selectedCategory" onChange={handleCategoryChange} value={product.categoria.id}>
                    {categories.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.nombre}</option>
                        );
                    })}
                </select>
            </div>
            <div className={styles['form-item']}>
                <label>Características</label>
                <select name="selectedFeature" multiple={true} onChange={handleFeaturesChange} value={selectedOptions}>
                    {features.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.nombre}</option>
                        );
                    })}
                </select>
            </div>
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

    // let url = state.backend_url + '/productos/guardar'

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