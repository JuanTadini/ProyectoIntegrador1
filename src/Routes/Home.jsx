import React from "react";
import { useProductStates } from "../Components/Context/Context.jsx";
import Card from "../Components/Card";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
	const [post, setPost] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function handleFetch() {
		setLoading(true);
		try {
			console.log("HOla");
			const response = await (
				await fetch("https://fakestoreapi.com/products")
			).json();

			let count =  0
			let aux = []
			while (count < 10) {
				const indexNumber = Math.floor(Math.random() * 39);
				if(aux.indexOf(indexNumber) < 0){
					aux.push(indexNumber)
					count = count + 1
				}
			}
			console.log(aux);
			setPost(
				aux.map((i) => {
					return { id: response[i].id, title: response[i].title, price: response[i].price };
				})
			);
			console.log(post);
			setError(null);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}

	useEffect(() => {
		handleFetch();
	}, []);

	const { state } = useProductStates();

	return (
		<main className={styles["home"]}>
			<div className={styles["homeVentanas"]}>
				<section className={styles["homeBuscar"]}>
					<div>
						<p>Encuentra lo que buscas para tu próxima aventura!</p>
					</div>
					<div className={styles["homeFiltro"]}>
						<button>elije ciudad</button>
						<button>fecha</button>
						<button>categorias</button>
						<button className={styles["buscar"]}>
							<img src="../../public/imagenes/crearCuenta.png" alt="vector1" />
						</button>
					</div>
				</section>
				<section className={styles["homeproducto"]}>
					<h3>Categorias</h3>
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
							{state.products.map((product) => (
								<Card product={product} key={product.id} />
							))}
						</div>
						<img
							style={{ height: 50, width: 50 }}
							src="../../public/imagenes/flecha.png"
							alt="flecha"
						/>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
