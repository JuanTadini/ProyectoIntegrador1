import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
		<div className={styles["logoFooter"]}>
		  	<Link to="/"> <img className={styles["logo1"]} src="/imagenes/logo1.png" alt="logo1" /></Link>
			<p>Copyright © 2023 CumbreSki. Todos los derechos reservados.</p>
		</div>
		{/* <div className={styles["footer-redes"]}>
			<img className={styles["footer-redes-icono"]} src="/imagenes/ico-facebook.png" alt="facebook" />
			<img className={styles["footer-redes-icono"]} src="/imagenes/ico-instagram.png" alt="instagram" />
			<img className={styles["footer-redes-icono"]} src="/imagenes/ico-tiktok.png" alt="tiktok" />
			<img className={styles["footer-redes-icono"]} src="/imagenes/ico-whatsapp.png" alt="whatsapp" />
		</div> */}
	</footer>
  )
}

export default Footer