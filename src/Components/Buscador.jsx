import React, { useState, useEffect, useRef } from 'react'
import { useProductStates } from "./Context/Context";
import styles from "./Buscador.module.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import getModelData from '../Services/getModelData.jsx';


const Buscador = () => {
    const {state, dispatch} = useProductStates();
    const url = state.backend_url
    const [stateDatePicker, setStateDatePicker] = useState([
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

    const toggleVisibility = (e) => {
        e.preventDefault();
        setIsVisibleDate(!isVisibleDate);
    };

    const setRange = (item) => {
        setStateDatePicker([item.selection])
        const range = item.selection.startDate.toISOString().slice(0, 10) + ' - ' + item.selection.endDate.toISOString().slice(0, 10)
        setSearchForm({ ...searchForm, dates: range })
    };

    const handleInputChange = (event) => {
        const term = event.target.value;
        if (term == '') {
            dispatch({type: 'SHOW_PRODUCTS_SEARCH', payload: false})
        }
        setSearchTerm(term);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            setShowSuggestions(false);
        }
    };

    const handleBlur = (event) => {
        if (!suggestionsListRef.current || !suggestionsListRef.current.contains(event.relatedTarget)) {
            setTimeout(() => {
                setShowSuggestions(false);
            }, 100);
        }
    };

    const handleFocus = () => {
        setShowSuggestions(suggestions.length > 0 && searchTerm );
    };

    useEffect(() => {
        const getSuggestions = (searchTerm) => {
            return ["Casco Visor Sky 5K text",
            "CAMPERA HEAD DOBLE",
            "BASTONES SKI 1.5M",
            "BOTAS RAPTOR WCR 130S3",
            "GAFAS - SKI & SNOW",
            "PANTALÓN POLAR XL",
            "LYT SNOWBOARD",
            "BOTA DE SNOWBOARD CLÁSICA BOA LYT",
            "WCR E.GS REBEL TEAM ESQUÍ JÚNIOR",
            "GORRO LANA TEXT",
            "Esquí Easy Joy Mujer",
            "MOCHILA DE MUJER",
            "ESQUÍS Nivel 1. 4K",
            "Botas HEAD WCD",
            "Casco RTL doble protección",
            "Tabla de snowboard 1.3 junior",
            "Bota LYT VELCRO junior",
            "Lentes SIGNATURE 5K",
            "Campera KORE NORDIC",
            "Campera KORE JACK",
            "Lentes MAGNIFY 5K",
            "Bastones FRONTSIDE 7KJ"].filter(
                suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            );
        };
        const suggestions = getSuggestions(searchTerm);
        setSuggestions(suggestions.slice(0, 5));
        setShowSuggestions(suggestions.length > 0 && searchTerm );
    }, [searchTerm]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        const paramName = 'producto';
        const paramValue = searchTerm;
        const back_url = url + '/productos/query/buscarproducto'
        const fullUrl = `${back_url}?${paramName}=${paramValue}`;
        getModelData(fullUrl).then(res => {
            dispatch({type: 'GET_PRODUCTS_SEARCH', payload: res.map((product) => {
                return {
                    id: product.id, title: product.nombre,
                    image: product.imagen, price: product.precio
                };
            })})
            dispatch({type: 'SHOW_PRODUCTS_SEARCH', payload: true})
        })
        .catch(err => console.log(err))
    }

    return (

        <section className={styles["homeBuscar"]}>
            <div>
                <p>Encuentra lo que buscas para tu próxima aventura!</p>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className={styles["homeFiltro"]}>
                    <button className={styles["buscar"]} onClick={toggleVisibility}>Fecha</button>
                    <div className={styles['form-item']}>
                        <input 
                            type='text' placeholder='Rango de fechas'name='fecha'
                            onChange={(event) => setSearchForm({...searchForm, dates: event.target.value})}
                            value={searchForm.dates} />
                    </div>
                    <div className={styles['form-item']}>
                        <input type='text' name='search_producto'
                            value={searchTerm}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder="Buscar productos..." />
                        {showSuggestions && (
                            <div className={styles['suggestions-list']} ref={suggestionsListRef}>
                                <ul>
                                    {suggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <button className={styles["buscar"]}>
                        <img src="/imagenes/buscar1.png" alt="vector1" /> Buscar
                    </button>
                </div>
            </form>
            {
                isVisibleDate &&
                <div className={styles["cp-date-range-picker"]}>
                    <DateRangePicker
                        onChange={setRange}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={stateDatePicker}
                        direction="horizontal"
                    />
                </div>
            }

        </section>
    )
}

export default Buscador