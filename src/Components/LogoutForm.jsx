import React, { useState } from 'react'
import { useProductStates } from "./Context/Context";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const LogoutForm = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useProductStates();
    let url = state.backend_url + '/logout'

    const handleLogout = (e) => {
        e.preventDefault();
        axios.post(url, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res)
            localStorage.removeItem("user_id");
            dispatch({type: 'GET_USER', payload: {}})
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return <>
        <Link to="#" onClick={handleLogout}>Cerrar sesión</Link>
    </>
}

export default LogoutForm