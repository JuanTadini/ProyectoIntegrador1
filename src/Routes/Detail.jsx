import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductStates } from '../Components/Context/Context'
import styles from './Detail.module.css'
import placeholderImage from '/imagenes/placeholder-png-image.jpg'
import arrowIcon from '/imagenes/evaArrowIosBackOutline0.png'
import shareIcon from '/imagenes/share-icon-symbol.png'
import Caracteristica from '../Components/Caracteristica'
import PopupGallery from '../Components/PopupGallery'

const Detail = () => {

	const {state, dispatch} = useProductStates();

	const navigate = useNavigate();

    const params = useParams();


	// const url = `https://fakestoreapi.com/products/${params.id}`
	const url = `http://localhost:8080/productos/${params.id}`

	useEffect(() => {
		axios(url)
		.then(res => dispatch({type: 'GET_PRODUCT', payload: res.data}))
	}, [])


	console.log(state.product);


	// mirar si el/los objeto/s ya existen o no, si no existen retorna true, si hay uno o mas objetos retorna false. Se usa para evitar errores al intentar iterar arrays que no existen
	const isEmpty = obj => {
		return Object.keys(obj).length === 0;
	}

	// si el array de imagenes existe y si la imagen en el indice buscado existe retorna la imagen, si no retorna un placeholder
	const loadImage = (obj, index) => {
		if (!isEmpty(obj)) {
			if (obj.imagenes != undefined) {
				if (Array.isArray(obj.imagenes)) {
					if (index >= 0 && index < obj.imagenes.length) {
						return obj.imagenes[index];
					}
				}
			}
		}
		return placeholderImage;
	}

	const loadPopupGallery = arr => {
		if (Array.isArray(arr)) {
			if (arr.length > 0) {
				return <PopupGallery imagenes={arr}/>
			}
		}
	}

	// array de imagenes provisorio para simular un producto con varias imagenes
	const imagenesProducto = {
		imagenes: ["https://cdn-mdb.head.com/CDN3/D/603029/1/768x768/raptor-wcr-120.jpg",
		"https://cdn-mdb.head.com/CDN3/GH/315653.SET/1/400x400/easy-joy.jpg",
		"https://cdn-mdb.head.com/CDN3/D/313303.SET_31330301/1/1430x464/supershape-e-magnum-with-binding-protector-pr-13-gw.jpg",
		"https://cdn-mdb.head.com/CDN3/D/355613/1/768x768/kid-lyt-velcro.jpg",
		"https://cdn-mdb.head.com/CDN3/D/390511/1/768x768/magnify-5k-photo.jpg",
		"https://cdn-mdb.head.com/CDN3/D/331613/1/1430x464/true-2-0.jpg"
		]
	}

	const renderAttributes = () => {
		if (state.product.caracteristicas != undefined) {
			return state.product.caracteristicas.map((c) => <Caracteristica caracteristica={c} key={c.id}/>)
		}
	}

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
					<div className={styles['buttons-area']}>
						<div className={styles['buttons-container']}>
							<Link to={'/politicas'} id={styles['policies-link']}>Ver políticas de producto</Link>
							<div className={styles['inline-buttons-container']}>
								<button id={styles['share-button']}>
									<img className={styles['share-icon']} src={shareIcon} alt="shareIcon" /> Compartir
								</button>
								<button id={styles['back-button']} onClick={() => navigate(-1)}>
									<img src={arrowIcon} alt="arrowIcon" />
									<img src={arrowIcon} alt="arrowIcon" /> Volver atrás
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles['detail-gallery-images-box']}>
				<div className={styles['selected-image-container']}>
					<img className={styles['selected-image']} src={state.product.imagen} alt="main image" />
				</div>
				<div className={styles['alternate-images-box']}>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={loadImage(imagenesProducto, 1)} alt="secondary image" />
					</div>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={loadImage(imagenesProducto, 2)} alt="secondary image" />
					</div>
					<div className={styles['break']}></div>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={loadImage(imagenesProducto, 3)} alt="secondary image" />
					</div>
					<div className={styles['alternate-image-container']}>
						<img className={styles['alternate-image']} 
						src={loadImage(imagenesProducto, 4)} alt="secondary image" />
					</div>
				</div>
			</div>
			<div className={styles['action-buttons-area']}>
				{loadPopupGallery(imagenesProducto.imagenes)}
				<Link to={`/reservar/${state.product.id}`}>
					<button id={styles['reserve-button']}>Realizar reserva</button>
				</Link>
			</div>
			<div className={styles['product-attributes-section']}>
				<div className={styles['product-attributes-container']}>
					<h2 className={styles['attributes-title']}>Características:</h2>
					<div className={styles['attributes-box']}>
						{renderAttributes()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Detail