import React from 'react'
import styles from "./Buscador.module.css";


const Buscador = () => {

    return (

<section className={styles["homeBuscar"]}>
					<div>
						<p>Encuentra lo que buscas para tu próxima aventura!</p>
					</div>
					<div className={styles["homeFiltro"]}>
						<button>elije ciudad</button>
						<button>fecha</button>
						<button>categorias</button>
						<button className={styles["buscar"]}>
							<img src="/imagenes/crearCuenta.png" alt="vector1" />
						</button>
					</div>
				</section>
    )
}

export default Buscador