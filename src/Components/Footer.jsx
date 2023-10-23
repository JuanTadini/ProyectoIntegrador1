import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
		<div className={styles["logoFooter"]}>
			<img src="logo" alt="logo" />
			<p>Copyright © 2023 CumbreSki. Todos los derechos reservados.</p>
		</div>
		<div className={styles["footer-redes"]}>
			<img className={styles["footer-redes-icono"]} src="../../public/imagenes/ico-facebook.png" alt="facebook" />
			<img className={styles["footer-redes-icono"]} src="../../public/imagenes/ico-instagram.png" alt="instagram" />
			<img className={styles["footer-redes-icono"]} src="../../public/imagenes/ico-tiktok.png" alt="tiktok" />
			<img className={styles["footer-redes-icono"]} src="../../public/imagenes/ico-whatsapp.png" alt="whatsapp" />
		</div>
	</footer>
  )
}

export default Footer