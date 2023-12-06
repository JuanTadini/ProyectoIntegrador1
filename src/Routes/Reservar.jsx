import React, { useState } from 'react'
import { useProductStates } from '../Components/Context/Context';
import styles from './Reservar.module.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import { addDays, addMonths } from 'date-fns'
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
	const {calendarVisibility, setCalendarVisibility} = useState();

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
                    direction="horizontal"
                    dateDisplayFormat='d/MMMM/yyyy'
                    staticRanges={[]}
                />
                <div className={styles['reserve-information']}>
                    <div className={styles['reserve-information-item']}>
                        <strong>Precio diario: ${state.product.precio}</strong>
                    </div>
                    <div className={styles['reserve-information-item']}>
                        <strong>Fecha de retiro <span>*</span></strong>
                    </div>
                    <div className={styles['reserve-information-item']}>
                        <strong>Fecha de devolución <span>*</span></strong>
                    </div>
                    <div className={styles['reserve-information-item']}>
                        <strong>Monto total</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservar