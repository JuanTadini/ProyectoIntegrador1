import React from "react";
import { useProductStates } from "../Components/Context/Context.jsx";

import Card from "../Components/Card";
import styles from "./Home.module.css";
// import { useEffect, useState } from "react";
import Buscador from "../Components/Buscador.jsx";
import CardCategorias from "../Components/CardCategories.jsx";
import { Pagination } from "../Components/Pagination.jsx";
import { useState } from "react";




const Home = () => {
	const { state } = useProductStates();
	const [pagina, setPagina] = useState(1);
	const [porPagina, setPorPagina] = useState(10);
	const maximo = Math.ceil(state.products.length / porPagina);


	return (
		<main className={styles["home"]}>
			<div className={styles["homeVentanas"]}>
				<Buscador />
				<section className={styles["homeCategories"]}>
					<h3 className={styles["homeH3"]}>Categorias</h3>
					<div className={styles["card-grid"]}>
						{state.categories.map((categorias) => (
							<CardCategorias categorias={categorias} key={categorias.id} />
						))}
					</div>
				</section>
				<section className={styles["homeproducto"]}>
					<h3 className={styles["homeProductoH3"]}>Productos</h3>
					<div className={styles["container"]}>
						{state.show_products_search ?
							<div className={styles["card-grid"]}>
								{state.products_search_list.slice(
									(pagina - 1) * porPagina,
									(pagina - 1) * porPagina + porPagina
								).map((product) => (
									<Card product={product} key={product.id} />
								))}
							</div>
							:
							<div className={styles["card-grid"]}>
								{state.products.slice(
									(pagina - 1) * porPagina,
									(pagina - 1) * porPagina + porPagina
								).map((product) => (
									<Card product={product} key={product.id} />
								))}
							</div>
						}
						

						<Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
					</div>
				</section>
				<section className={styles["homeRecomendar"]}>
					<h3 className={styles["homeH3"]}>Recomendaciones</h3>
					<div className={styles["homeRec"]}>
						<div className={styles["card-grid"]}>

							{state.recommendation.map((product) => (
								<Card product={product} key={product.id} />
							))}
						</div>
						{/* <img
							style={{ height: 50, width: 50 }}
							src="/imagenes/flecha.png"
							alt="flecha"
						/> */}
					</div>
				</section>
				<div>
				</div>
			</div>
		</main>
	);
};

export default Home;
