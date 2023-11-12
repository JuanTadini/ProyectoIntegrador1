import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardCategories.module.css";

const CardCategorias = ({ categorias }) => {
	return (
		<div className={styles["card"]}>
			<h2>{categorias.title}</h2>
            <p>{categorias.description}</p>
				<img className={styles["button-img-categorias"]}
					style={{ height: 100, width: 100 }}
					src={categorias.image}
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
