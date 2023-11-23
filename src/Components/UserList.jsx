import React, { useEffect, useState } from 'react'
import { useProductStates } from './Context/Context'
import GridList from './GridList.jsx';
import styles from './UserList.module.css';
import { Link } from "react-router-dom";

const UserList = () => {

    const {state} = useProductStates();
    const column_names = [
        {'name': 'id', 'description': 'ID', 'type': 'number'},
        {'name': 'nombre', 'description': 'Nombre', 'type': 'string'},
        {'name': 'username', 'description': 'Nombre de usuario', 'type': 'string'},
        {'name': 'email', 'description': 'Email', 'type': 'string'}
    ]

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(state.backend_url + '/registro/todos');
                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }
                const responseData = await response.json();
                setUsers(responseData)
            } catch (error) {
                console.error('Error al obtener la lista de usuarios:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
        <nav className={styles["navbar"]}>
            <div className={styles["nav-elements"]}>
                <ul>
                    <li>
                        <Link to="/administrar">
                            {" "}
                            Volver
                        </Link>
                    </li>
                    <li>
                        <Link to="/administrar/usuarios/crearUsuario">
                            {" "}
                            Agregar usuario
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <GridList column_names={column_names} data={users} backend_url='/registro'/>
    </>
    )
}

export default UserList