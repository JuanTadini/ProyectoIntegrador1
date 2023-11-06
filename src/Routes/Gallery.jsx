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