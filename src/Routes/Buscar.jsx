import React from "react";
import Buscador from "../Components/Buscador";
import Card from "../Components/Card";
import styles from "./Buscar.module.css";
import { useProductStates } from "../Components/Context/Context.jsx";

const Buscar = () => {
	const { state } = useProductStates();

	return (
		<main>
			<seccion >
				<Buscador />
			</seccion>
			<seccion className={styles["card-grid"]}>
					{state.products.map((product) => (
						<Card product={product} key={product.id} />
					))}
			</seccion>
		</main>
	);
};

export default Buscar;
