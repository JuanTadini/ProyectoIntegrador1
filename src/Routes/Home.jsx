import React from "react";
import { useProductStates } from "../Components/Context/Context";
import Card from "../Components/Card";
import styles from './Home.module.css'

const Home = () => {
	const { state } = useProductStates();

	return (
		<main className={styles['home']}>
			<div className={styles['homeVentanas']}>
				<div className={styles['homeBuscar']}>
					<div>
						<p>Encuentra lo que buscas para tu próxima aventura!</p>
					</div>
					<div className={styles['homeFiltro']}>
						<button>elije ciudad</button>
						<button>fecha</button>
						<button>categorias</button>
						<button className={styles["buscar"]}><img  src="../../public/imagenes/crearCuenta.png" alt="vector1" /></button>
					</div>
				</div>
				<div className={styles['homeproducto']}>
					<div className={styles['card-grid']}>
						{state.products.map((product) => (
							<Card product={product} key={product.id} />
						))}
					</div>
				</div>
				<div className={styles['homeRecomendar']}>
				<div className={styles['card-grid']}>
						{state.products.map((product) => (
							<Card product={product} key={product.id} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
