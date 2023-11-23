import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardCategories.module.css";

const CardCategorias = ({ categorias }) => {
	return (
		<div className={styles["card"]}>
			<h2>{categorias.nombre}</h2>
            <p>{categorias.descripcion}</p>
				<img className={styles["button-img-categorias"]}
					style={{ height: 150, width: 150 }}
					src={categorias.urlimagen}
					alt=""
				/>
			<Link to={"/Categorias/" + categorias.id}>
				<button className={styles["button-card-categorias"]}>Ver detalles</button>
			</Link>

			{/* <h3>id: {product.id}</h3>
      <h3>Description: {product.description}</h3>
      <h3>Cost/day: {product.price}</h3> */}
		</div>
	);
};

export default CardCategorias;
