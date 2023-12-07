import React from "react";
import { Link } from "react-router-dom";
import { useProductStates } from "./Context/Context";
import styles from "./Navbar.module.css";
import Avatar from 'react-avatar';
import LogoutForm from "./LogoutForm";

const Navbar = () => {
	const { state, dispatch } = useProductStates();

	const updateContext = () => {
        dispatch({type: 'SHOW_PRODUCTS_SEARCH', payload: false})
    }

	return (
		<nav className={styles["nav"]}>
			<section>
				<div className={styles["logo"]}>
					<Link to="/" onClick={updateContext}>
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
						<input id={styles['abrir-cerrar']} name="abrir-cerrar" type="checkbox" value="" />
						<label htmlFor={styles['abrir-cerrar']} className={styles["toggle-button"]}>
							<Avatar name={state.user.username} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="40" round={true} />
							<nav>
								<ul type="none" className={styles['navheader']}>
									<li><a href="#" >Mi cuenta</a></li>
									<li><a href="#" >Mis reservas</a></li>
									<li><LogoutForm /></li>
								</ul>
							</nav>
						</label>
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
