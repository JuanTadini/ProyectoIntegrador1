import React, { useState } from 'react'
import styles from './PopupGallery.module.css'
import arrow from '/imagenes/VectorCarouselArrow.png'

const PopupGallery = ({ imagenes }) => {

    const [indice, setIndice] = useState(0);
	const [displayGallery, setDisplayGallery] = useState(false);

    const selectedImage = imagenes[indice];

    const handleShowGalleryButtonClick = () => {
        setIndice(0);
        setDisplayGallery(true);
    }

    const handleArrowClick = type => {
        if (type === 'previous') {
            if (indice === 0) {
                setIndice(imagenes.length - 1);
            } else {
                setIndice(indice - 1);
            }
        } else if (type === 'next') {
            if (indice === imagenes.length - 1) {
                setIndice(0);
            } else {
                setIndice(indice + 1);
            }
        }
    }

  return (
    <div>
        <button id={styles['show-gallery-button']} onClick={() => handleShowGalleryButtonClick()}>Ver galería de imágenes</button>
        <div className={styles['gallery-box']} style={{ display: displayGallery ? 'block' : 'none' }}>
            <div className={styles['gallery-container']}>
                <span className={styles['close-gallery-button']} style={{ display: displayGallery ? 'block' : 'none' }} onClick={() => setDisplayGallery(false)}>X</span>
                <div className={styles['gallery']}>
                    <div className={styles['image-container']}>
                        <img className={styles['carousel-image']} src={selectedImage} alt="carousel image" />
                    </div>
                    <div className={styles['carousel-controls']}>
                        <img className={styles['prev-image-arrow']} src={arrow} alt='prev image arrow' onClick={() => handleArrowClick('previous')} />
                        <p className={styles['carousel-index-display']}>{indice + 1}/{imagenes.length}</p>
                        <img className={styles['next-image-arrow']} src={arrow} alt='next image arrow' onClick={() => handleArrowClick('next')} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopupGallery