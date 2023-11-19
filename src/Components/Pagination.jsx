import React, { useState } from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ pagina, setPagina, maximo }) => {
	const [input, setInput] = useState(1);

	const nextPage = () => {
		setInput(parseInt(input) + 1);
		setPagina(parseInt(pagina) + 1);
	};

	const previousPage = () => {
		setInput(parseInt(input) - 1);
		setPagina(parseInt(pagina) - 1);
	};

	const onKeyDown = (e) => {
		if (e.keyCode == 13) {
			setPagina(parseInt(e.target.value));
			if (
				parseInt(e.target.value < 1) ||
				parseInt(e.target.value) > Math.ceil(maximo) ||
				isNaN(parseInt(e.target.value))
			) {
				setPagina(1);
				setInput(1);
			} else {
				setPagina(parseInt(e.target.value));
			}
		}
	};

	const onChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className={styles.container}>
			<button disabled={pagina === 1 || pagina < 1} onClick={previousPage}>
				<svg
					width="11"
					height="17"
					viewBox="0 0 11 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.91892 17L0 8.5L8.91892 0L11 1.98333L4.16216 8.5L11 15.0167L8.91892 17Z"
						fill="#C3D4FA"
					/>
				</svg>
			</button>
			<input
				onChange={(e) => onChange(e)}
				onKeyDown={(e) => onKeyDown(e)}
				name="page"
				autoComplete="off"
				value={input}
			/>
			<p> de {maximo} </p>
			<button
				disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
				onClick={nextPage}
			>
				<svg
					width="11"
					height="17"
					viewBox="0 0 11 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.83784 8.5L0 1.98333L2.08108 0L11 8.5L2.08108 17L0 15.0167L6.83784 8.5Z"
						fill="#C3D4FA"
					/>
				</svg>
			</button>
		</div>
	);
};
