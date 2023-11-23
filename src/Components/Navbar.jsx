import React from "react";
import { Link } from "react-router-dom";
import { useProductStates } from "./Context/Context";
import styles from "./Navbar.module.css";
import Avatar from 'react-avatar';

const Navbar = () => {
	const { state } = useProductStates();

	return (
		<nav className={styles["nav"]}>
			<section>
				<div className={styles["logo"]}>
					<Link to="/">
						{" "}
						<img
							className={styles["logo1"]}
							src="/imagenes/logo1.png"
							alt="logo1"
						/>
					</Link>
					<p className={styles["lema"]}>
						Vivi la temporada de invierno en la nieve
					</p>
				</div>
			</section>

			<section>
				{state.user && state.user.id !== undefined && 
					<div>
						<Avatar name={state.user.username} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="40" round={true} />
					</div> || 
					<div className={styles["crearIniciar"]}>
						<Link to='/register'>
							{" "}
							<button	>
								
								Crear Cuenta
							</button>
						</Link>

						<Link to='/login'>
							{" "}
							<button >
								
								Iniciar Seccion
							</button>
						</Link>
					</div>
				}
			</section>
		</nav>
	);
};

export default Navbar;
