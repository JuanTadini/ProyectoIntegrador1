import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductStates } from '../Components/Context/Context'
import styles from './Detail.module.css'
import placeholderImage from '/imagenes/placeholder-png-image.jpg'
import arrowIcon from '/imagenes/evaArrowIosBackOutline0.png'

const Detail = () => {

	const {state, dispatch} = useProductStates()

    const params = useParams()


	// const url = `https://fakestoreapi.com/products/${params.id}`
	const url = `http://localhost:8080/productos/${params.id}`

	useEffect(() => {
		axios(url)
		.then(res => dispatch({type: 'GET_PRODUCT', payload: res.data}))
	}, [])

	console.log(state.product);

	const navigate = useNavigate()

	return (
		<div>
			<div className={styles['product-container']}>
				<div className={styles['product-box']}>
					<h1 className={styles['product-title']}>{state.product.nombre}</h1>
					<div className={styles['product-info-box']}>
						<div className={styles['product-image-container']}>
							<img className={styles['product-image']} src={state.product.imagen} alt="" />
						</div>
						<p className={styles['product-description']}>{state.product.descripcion}</p>
					</div>
					<div className={styles['back-button-container']}>
						<button id={styles['back-button']} onClick={() => navigate(-1)}>
							<img src={arrowIcon} alt="arrowIcon" />
							<img src={arrowIcon} alt="arrowIcon" /> Volver atrás</button>
					</div>
				</div>
			</div>
			<div className={styles['detail-gallery-images-box']}>
				<div className={styles['selected-image-container']}>
					<img className={styles['selected-image']} src={state.product.image} alt="placeholder" />
				</div>
				<div className={styles['alternate-images-box']}>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={placeholderImage} alt="placeholder" />
					</div>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={placeholderImage} alt="placeholder" />
					</div>
					<div className={styles['break']}></div>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={placeholderImage} alt="placeholder" />
					</div>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={placeholderImage} alt="placeholder" />
					</div>
				</div>
			</div>
			<div className={styles['detail-link-area']}>
				<Link to={"/detail/" + state.product.id + "/gallery"} id={styles['detail-link']}>Ver detalle</Link>
			</div>
		</div>
	)
}

export default Detail