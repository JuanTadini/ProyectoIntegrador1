import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ product }) => {
	console.log(product.price);
	return (
		<div className={styles["card"]}>
			<section className={styles["cardEncabezado"]}>
				<h4>{product.title}</h4>
				<p className={styles["cardPrecio"]}>${product.price}/día</p>
			</section>
			<section className={styles["cardCuerpo"]}>
				<div className={styles["cardCuerpoCajaImagen"]}>
					<img src={product.image} alt="" />
				</div>
				{/* <button className={styles["cardCuerpoAlquilar"]}>Alquilar</button> */}
				<Link to={`/detail/${product.id}`}>
					<button className={styles["cardCuerpoDetalle"]}>Ver detalles</button>
				</Link>
			</section>
		</div>
	);
};

export default Card;
