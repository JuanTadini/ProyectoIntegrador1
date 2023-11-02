import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

  return (
    <nav className={styles['nav']}>
      <div className={styles['logo']}>
        <Link to="/"> <img className={styles["logo1"]} src="/imagenes/logo1.png" alt="logo1" /></Link>
        <p>Vivi la temporada de invierno en la nieve</p>
      </div>
        <Link to="/buscar">BUSCADOR</Link>
        <Link to="/recomendation">RECOMENDACIONES</Link>
      <div className={styles['crearIniciar']}>
        <button className={styles['crear']}><img className={styles["vector1"]} src="/imagenes/vector1.png" alt="vector1" />  Crear Cuenta</button>
        <button className={styles['crear']}><img className={styles["vector1"]} src="/imagenes/navigation.png" alt="vector1" /> Iniciar Seccion</button>
      </div>
    </nav>
  )
}

export default Navbar