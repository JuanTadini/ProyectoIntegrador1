import React, { useEffect, useState } from 'react'
import { useProductStates } from '../Components/Context/Context';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Reservar.module.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import { addDays, addMonths, eachDayOfInterval, formatISO, parseISO } from 'date-fns'
import es from 'date-fns/locale/es';
import userDefaultAvatar from '/imagenes/userDefaultAvatar.png'
import placeholderImage from '/imagenes/placeholder-png-image.jpg'
import PopupGallery from '../Components/PopupGallery';

const Reservar = () => {

    const {state, dispatch} = useProductStates();
    const params = useParams();
    const [showUserInfo, setShowUserInfo] = useState(false);

    const url = `${state.backend_url}/productos/${params.id}`
    const crearReservaUrl = `${state.backend_url}/reservas/guardar`

    useEffect(() => {
		axios(url)
		.then(res => dispatch({type: 'GET_PRODUCT', payload: res.data}))
	}, [])


    const toggleShowUserInfo = () => {
        if (!showUserInfo) {
            setShowUserInfo(true);
        } else {
            setShowUserInfo(false);
        }
    }

    const mostrarDatosUsuario = () => {
        if (showUserInfo) {
            return <div>
                    <p><strong>Usuario autenticado: </strong>{state.user.username}</p>
                    <p><strong>Rol: </strong>{state.user.roles}</p>
                    <p><strong>Id: </strong>{state.user.id}</p>
                </div>
        }
        return <div>
                    <p><strong>Usuario autenticado: </strong>{state.user.username}</p>
                </div>
    }


    const isEmpty = obj => {
		return Object.keys(obj).length === 0;
	}

    const loadImage = (obj, index) => {
		if (!isEmpty(obj)) {
			if (obj.imagenes != undefined) {
				if (Array.isArray(obj.imagenes)) {
					if (index >= 0 && index < obj.imagenes.length) {
						return obj.imagenes[index].urlImagen;
					}
				}
			}
		}
		return placeholderImage;
	}

    const loadPopupGallery = arr => {
		if (Array.isArray(arr)) {
			if (arr.length > 0) {
                let listaImagenes = arr.map(objeto => objeto.urlImagen)
				return <PopupGallery imagenes={listaImagenes}/>
			}
		}
	}


    //manejo de reservas
    // const simulacionReservas = {
    //     reservas: [
    //         {
    //             horaInicioReserva: '2023-12-050T4:21:00-03:00',
    //             fechaInicioReserva: '2023-12-10',
    //             fechafinReserva: '2023-12-15'
    //         },
    //         {
    //             horaInicioReserva: '2023-12-20T04:21:00-03:00',
    //             fechaInicioReserva: '2023-12-23',
    //             fechafinReserva: '2023-12-26'
    //         }
    //     ]
    // };


    const [calendarDate, setCalendarDate] = useState([
		{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
	]);

    let reservasProducto = [];

    if (Array.isArray(state.product.reservas)) {
        reservasProducto = state.product.reservas;
    }
    
    const diasOcupados = [];
    
    reservasProducto.forEach(reserva => {
        let fechaInicio = parseISO(reserva.fechaInicioReserva);
        let fechaFin = parseISO(reserva.fechafinReserva);

        let diasReservados = eachDayOfInterval({start: fechaInicio, end: fechaFin});
        diasOcupados.push(...diasReservados);
    });
    
    const opcionesDeFechas = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const calcularMonto = (stringMontoDiario) => {
        // multiplicar el monto diario por el total de días abarcados dentro de la selección
        return parseInt(stringMontoDiario) * eachDayOfInterval({start: calendarDate[0].startDate, end: calendarDate[0].endDate}).length;
    }
    

    const fechaInicioElegidaISO = formatISO(calendarDate[0].startDate, { representation: 'date' });
    const fechaFinElegidaISO = formatISO(calendarDate[0].endDate, { representation: 'date' });


    const handleReserve = () => {
        if (!state.product.id && state.product.id != params.id) {
            window.alert('Lo sentimos, ha ocurrido un error al cargar el producto')
        } else if (state.product.id && state.product.id == params.id) {
            if (window.confirm('¿Está seguro que desea realizar una reserva?')) {
                // generar los datos de la reserva
                const datosReserva = {
                    horaInicioReserva: formatISO(new Date()),
                    fechaInicioReserva: fechaInicioElegidaISO,
                    fechafinReserva: fechaFinElegidaISO,
                    appUser: state.user.id
                };

                console.log(datosReserva);

                axios.post(crearReservaUrl, datosReserva)
                .then(res => console.log(res))
                .catch(err => console.log(err))

                window.alert('Gracias por reservar, pronto recibirá un mail con información sobre la reserva');
            }
        }
    }

  return (
    <div>
        <div className={styles['content-area']}>
            <div className={styles['reserve-content']}>
                <div className={styles['full-width']}>
                    <h2>Registro de reserva</h2>
                </div>
                <div className={styles['user-data-box']}>
                    <div className={styles['user-image-container']}>
                        <img className={styles['user-image']} src={userDefaultAvatar} alt="user avatar" />
                    </div>
                    <div className={styles['user-info-container']}>
                        
                        {mostrarDatosUsuario()}
                        <p id={styles['show-more-user-info']} onClick={() => toggleShowUserInfo()}>{showUserInfo ? 
                        'Mostrar menos'
                        :
                        'Mostrar más...'}</p>
                    </div>
                </div>
                <div className={styles['full-width']}>
                    <strong>Producto a reservar:</strong>
                </div>
                <div className={styles['product-box']}>
					<h1 className={styles['product-title']}>{state.product.nombre}</h1>
					<div className={styles['product-info-box']}>
						<div className={styles['product-image-container']}>
							<img className={styles['product-image']} src={loadImage(state.product, 0)} alt="Imagen principal" />
						</div>
						<p className={styles['product-description']}>{state.product.descripcion}</p>
					</div>
                    <div className={styles['action-buttons-area']}>
                        {loadPopupGallery(state.product.imagenes)}
                    </div>
                </div>
                <DateRangePicker 
                    locale={ es }
                    onChange={item => setCalendarDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={calendarDate}
                    minDate={ new Date() }
                    disabledDates={diasOcupados}
                    direction="horizontal"
                    dateDisplayFormat='d/MMMM/yyyy'
                    staticRanges={[]}
                />
                <div className={styles['reserve-information']}>
                    <div className={styles['reserve-information-item']}>
                        <strong>Precio diario: ${state.product.precio}</strong>
                    </div>
                    <div className={styles['reserve-information-item']}>
                        <strong>Fecha de retiro<span>*</span>: {calendarDate[0].startDate.toLocaleDateString('es-AR', opcionesDeFechas)}</strong>
                    </div>
                    <div className={styles['reserve-information-item']}>
                        <strong>Fecha de devolución<span>*</span>: {calendarDate[0].endDate.toLocaleDateString('es-AR', opcionesDeFechas)}</strong>
                    </div>
                    <div className={styles['reserve-information-item']}>
                        <strong>Monto total: ${calcularMonto(state.product.precio)}</strong>
                    </div>
                </div>
                <button id={styles['reserve-button']} onClick={() => handleReserve()}>Alquilar</button>
            </div>
        </div>
    </div>
  )
}

export default Reservar