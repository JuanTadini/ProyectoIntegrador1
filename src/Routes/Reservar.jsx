import React, { useState } from 'react'
import { useProductStates } from '../Components/Context/Context';
import { useNavigate } from 'react-router-dom';
import styles from './Reservar.module.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import { addDays, addMonths, eachDayOfInterval, formatISO, parseISO } from 'date-fns'
import es from 'date-fns/locale/es';

const Reservar = () => {

    const {state, dispatch} = useProductStates();

    const [calendarDate, setCalendarDate] = useState([
		{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
	]);

    const [confirmation, setConfirmation] = useState(false);

    const navigate = useNavigate();

    //manejo de reservas
    const simulacionReservas = {
        reservas: [
            {
                horaInicioReserva: '2023-12-05T04:21:00-03:00',
                fechaInicioReserva: '2023-12-10',
                fechaFinReserva: '2023-12-15'
            },
            {
                horaInicioReserva: '2023-12-20T04:21:00-03:00',
                fechaInicioReserva: '2023-12-23',
                fechaFinReserva: '2023-12-26'
            }
        ]
    };
    
    const diasOcupados = [];
    
    simulacionReservas.reservas.forEach(reserva => {
        let fechaInicio = parseISO(reserva.fechaInicioReserva);
        let fechaFin = parseISO(reserva.fechaFinReserva);

        let diasReservados = eachDayOfInterval({start: fechaInicio, end: fechaFin});
        diasOcupados.push(...diasReservados);
    });
    
    const opcionesDeFechas = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const calcularMonto = (montoDiario) => {
        // multiplicar el monto diario por el total de días abarcados dentro de la selección
        return montoDiario * eachDayOfInterval({start: calendarDate[0].startDate, end: calendarDate[0].endDate}).length;
    }
    

    const fechaInicioElegidaISO = formatISO(calendarDate[0].startDate, { representation: 'date' });
    const fechaFinElegidaISO = formatISO(calendarDate[0].endDate, { representation: 'date' });


    const handleReserve = () => {
        if (!state.user.id) {
            window.alert('Lo sentimos, tiene que registrarse para poder reservar un producto');
            navigate("/login");
        } else if (state.user.id) {
            if (window.confirm('¿Está seguro que desea realizar una reserva?')) {
                const datosReserva = {
                    horaInicioReserva: formatISO(new Date()),
                    fechaInicioReserva: fechaInicioElegidaISO,
                    fechaFinReserva: fechaFinElegidaISO,
                    idUsuario: state.user.id
                };
                console.log(datosReserva);
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
                <div className={styles['full-width']}>
                    <strong>Producto a reservar:</strong>
                </div>
                <div className={styles['product-box']}>
					<h1 className={styles['product-title']}>{state.product.nombre}</h1>
					<div className={styles['product-info-box']}>
						<div className={styles['product-image-container']}>
							<img className={styles['product-image']} src={state.product.imagen} alt="" />
						</div>
						<p className={styles['product-description']}>{state.product.descripcion}</p>
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
                    maxDate={ addMonths(new Date(), 3) }
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
                        <strong>Monto total: ${calcularMonto(100)}</strong>
                    </div>
                </div>
                <button id={styles['reserve-button']} onClick={() => handleReserve()}>Alquilar</button>
            </div>
        </div>
    </div>
  )
}

export default Reservar