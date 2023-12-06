import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardCategories.module.css";


const CardCategorias = ({ categorias }) => {
	return (
		<div className={styles["card"]}>
			<h2 className={styles["h2Categoria"]}>{categorias.nombre}</h2>
            <p>{categorias.descripcion}</p>
				<img className={styles["button-img-categorias"]}
					src={categorias.urlimagen}
					alt=""
				/>
			<Link className={styles["aCategoria"]} to={"/Categorias/" + categorias.id}>
				<button >Ver detalles</button>
			</Link>
		</div>
	);
};

export default CardCategorias;
