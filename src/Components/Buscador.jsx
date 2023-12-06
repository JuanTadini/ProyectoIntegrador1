import React from 'react'
import styles from "./Buscador.module.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';


const Buscador = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection' 
        }
    ]);
    const [isVisibleDate, setIsVisibleDate] = useState(false);
    const [searchForm, setSearchForm] = useState({
        dates: '',
    });

    const toggleVisibility = () => {
        setIsVisibleDate(!isVisibleDate);
    };

    const setRange = (item) => {
        setState([item.selection])
        const range = item.selection.startDate.toISOString().slice(0, 10) + ' - ' + item.selection.endDate.toISOString().slice(0, 10)
        setSearchForm({...searchForm, dates: range})
    };

    return (

        <section className={styles["homeBuscar"]}>
            <div>
                <p>Encuentra lo que buscas para tu próxima aventura!</p>
            </div>
            <div className={styles["homeFiltro"]}>
                <button onClick={toggleVisibility}>Fecha</button>
                <div className={styles['form-item']}>
                    <input 
                        type='text' placeholder='Rango de fechas'name='fecha'
                        onChange={(event) => setSearchForm({...searchForm, dates: event.target.value})}
                        value={searchForm.dates} />
                </div>
                <button>categorias</button>
                <button className={styles["buscar"]}>
                    <img src="/imagenes/crearCuenta.png" alt="vector1" />
                </button>
            </div>
            {
                isVisibleDate &&
                <div>
                    <DateRangePicker
                        onChange={setRange}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={state}
                        direction="horizontal"
                    />
                </div>
            }

        </section>
    )
}

export default Buscador