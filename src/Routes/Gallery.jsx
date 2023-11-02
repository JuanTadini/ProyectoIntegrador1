import React, { useEffect } from 'react'
import { useProductStates } from '../Components/Context/Context'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './Gallery.module.css'
import placeholderImage from '/imagenes/placeholder-png-image.jpg'

const Gallery = () => {

    const {state, dispatch} = useProductStates()

    const params = useParams()

    const url = `https://fakestoreapi.com/products/${params.id}`

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_PRODUCT', payload: res.data}))
    }, [])

    // simula un array de imagenes que llegaria desde el back
    // let imagenes = [placeholderImage, placeholderImage, placeholderImage, placeholderImage, placeholderImage, placeholderImage, placeholderImage, placeholderImage, placeholderImage]

    // funcion para crear galerias y llenarlas con sus respectivos elementos
    // function crearGalerias () {
    //   let mapaColores = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    //   let imagenesPorGaleria = 4;
    //   let galeria = null;

    //   for (let i = 0; i < imagenes.length; i++) {
    //     if (i % imagenesPorGaleria === 0) {
    //       let galeria = `<div className={styles['gallery']}></div>`;
    //       document.getElementsByClassName('gallery-container').append(galeria);
    //     }
    //     let imageContainer = `<div className={styles['image-container']}></div>`;
    //     imageContainer.append(`<img className={styles['gallery-image']} src={imagenes[i]} alt="placeholder" />`);
    //     galeria.append(imageContainer);
    //   }

    //   if (galeria != null) {
    //     for (let j = i % imagenesPorGaleria; j < imagenesPorGaleria; j++) {
    //       let imageContainer = `<div className={styles['image-container']}></div>`;
    //       galeria.append(imageContainer);
    //     }
    //   }
    // }

  return (
    <div>
      <div className={styles['gallery-container']}>
        <div className={styles['gallery']}>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
        </div>
        <div className={styles['gallery']}>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
        </div>
        <div className={styles['gallery']}>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
        </div>
        <div className={styles['gallery']}>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
          <div className={styles['image-container']}>
            <img className={styles['gallery-image']} src={placeholderImage} alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery