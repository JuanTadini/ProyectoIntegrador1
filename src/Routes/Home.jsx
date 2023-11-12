import React from "react";
import { useProductStates } from "../Components/Context/Context.jsx";

import Card from "../Components/Card";
import styles from "./Home.module.css";
// import { useEffect, useState } from "react";
import Buscador from "../Components/Buscador.jsx";
import CardCategorias from "../Components/CardCategories.jsx";

const Home = () => {
	const { state } = useProductStates();

	return (
		<main className={styles["home"]}>
			<div className={styles["homeVentanas"]}>
				<Buscador />
				<section className={styles["homeCategories"]}>
					<h3>Categorias</h3>
					<div className={styles["card-grid"]}>
						{state.categories.map((categorias) => (
							<CardCategorias categorias={categorias} key={categorias.id} />
						))}
					</div>
				</section>
				<section className={styles["homeproducto"]}>
					<h3>Productos</h3>
					<div className={styles["card-grid"]}>
						{state.products.map((product) => (
							<Card product={product} key={product.id} />
						))}
					</div>
				</section>
				<section className={styles["homeRecomendar"]}>
					<h3>Recomendaciones</h3>
					<div className={styles["homeRec"]}>
						<div className={styles["card-grid"]}>
							{state.recommendation.map((product) => (
								<Card product={product} key={product.id} />
							))}
						</div>
						<img
							style={{ height: 50, width: 50 }}
							src="/imagenes/flecha.png"
							alt="flecha"
						/>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
