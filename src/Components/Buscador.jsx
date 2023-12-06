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
    const toggleVisibility = () => {
        setIsVisibleDate(!isVisibleDate);
    };

    return (

        <section className={styles["homeBuscar"]}>
            <div>
                <p>Encuentra lo que buscas para tu próxima aventura!</p>
            </div>
            <div className={styles["homeFiltro"]}>
                <button>elije ciudad</button>
                <button onClick={toggleVisibility}>fecha</button>
                <button>categorias</button>
                <button className={styles["buscar"]}>
                    <img src="/imagenes/crearCuenta.png" alt="vector1" />
                </button>
            </div>
            {
                isVisibleDate &&
                <div>
                    <DateRangePicker
                        onChange={item => setState([item.selection])}
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