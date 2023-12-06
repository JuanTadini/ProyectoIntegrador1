import React, { useState, useEffect, useRef } from 'react'
import styles from "./Buscador.module.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import getModelData from '../Services/getModelData.jsx';
// import { useProductStates } from "../Components/Context/Context.jsx";


const Buscador = () => {
	// const { stateProducts } = useProductStates();
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
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const [records, setRecords] = useState([]);
    const suggestionsListRef = useRef(null);

    const toggleVisibility = () => {
        setIsVisibleDate(!isVisibleDate);
    };

    const setRange = (item) => {
        setState([item.selection])
        const range = item.selection.startDate.toISOString().slice(0, 10) + ' - ' + item.selection.endDate.toISOString().slice(0, 10)
        setSearchForm({ ...searchForm, dates: range })
    };

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        console.log('llego');
        console.log(suggestion);
        setShowSuggestions(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            setShowSuggestions(false);
        }
    };

    const handleBlur = (event) => {
        console.log('Onblur');
        if (!suggestionsListRef.current || !suggestionsListRef.current.contains(event.relatedTarget)) {
            setTimeout(() => {
                setShowSuggestions(false);
            }, 100);
        }
    };

    const handleFocus = () => {
        setShowSuggestions(suggestions.length > 0 && searchTerm );
    };

    // useEffect(() => {
    //   getModelData('http://192.168.1.4:8080/productos/todos').then(resultado => {
    //       setRecords(resultado)
    //   });
    // }, []);

    useEffect(() => {
        const getSuggestions = (searchTerm) => {
            // return records.map((product) => product.nombre);
            return ['Sugerencia 1', 'Sugerencia 2', 'Sugerencia 3'].filter(
                suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            );
        };

        const suggestions = getSuggestions(searchTerm);
        setSuggestions(suggestions);
        setShowSuggestions(suggestions.length > 0 && searchTerm );
    }, [searchTerm]);

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
                <div className={styles['form-item']}>
                    <label>Producto</label>
                    <input type='text' name='search_producto'
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="Buscar..." />
                    {showSuggestions && (
                        <div className={styles['suggestions-list']} ref={suggestionsListRef}>
                            <ul>
                                {suggestions.map((suggestion, index) => (
                                    // <li key={index} onClick={() => setSearchTerm(suggestion)}>{suggestion}</li>
                                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {/* <button>categorias</button> */}
                <button className={styles["buscar"]}>
                    <img src="/imagenes/crearCuenta.png" alt="vector1" />
                </button>
            </div>
            {
                isVisibleDate &&
                <div className={styles["cp-date-range-picker"]}>
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