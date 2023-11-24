import React from 'react'
import styles from './Caracteristica.module.css'

const Caracteristica = ({ caracteristica }) => {
  return (
    <div>
      <div className={styles['attributes-container']}>
        <div className={styles['attributes-icon-container']}>
          <img className={styles['icon']} src={caracteristica.icono} alt="" />
        </div>
        <p className={styles['attribute-name']}>{caracteristica.nombre}</p>
      </div>
    </div>
  )
}

export default Caracteristica