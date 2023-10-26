import React from "react";
import { useProductStates } from "../Components/Context/Context";
import Card from "../Components/Card.jsx"
import styles from "./Recomendation.module.css"

const Recomendation = () => {
	const { state } = useProductStates;
	return (
		<main>
			{/* <div className={styles["card-grid-recomen"]}>
						{state.products.map((product) => (
							<Card product={product} key={product.id} />
						))}
					</div> */}
		</main>
	);
};

export default Recomendation;
