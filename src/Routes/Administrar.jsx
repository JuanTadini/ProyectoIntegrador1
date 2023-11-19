import React from 'react'
import styles from './Administrar.module.css'
import { Link } from 'react-router-dom'

const Administrar = () => {
  return (
    <div>
      <div className={styles['manage-pannel-container']}>
        <h1>Panel de administración</h1>
        <div className={styles['separador']}></div>
        <div className={styles['management-columns-container']}>
          <div className={styles['admin-elements']}>
            <h4>Gestión de productos</h4>
            <Link to="/administrar/productos/crearProducto">
              <button>Registrar producto</button>
            </Link>
            <Link to="/administrar/productos/listarProductos">
              <button>Listar productos</button>
            </Link>
          </div>
          <div className={styles['admin-elements']}>
            <h4>Gestión de categorías</h4>
            <Link to="/administrar/categorias/crearCategoria">
              <button>Agregar categoría</button>
            </Link>
            <Link to="/administrar/categorias/listarCategorias">
              <button>Listar categorías</button>
            </Link>
          </div>
          <div className={styles['admin-elements']}>
            <h4>Gestión de usuarios</h4>
            <Link to="/administrar/usuarios/crearUsuario">
              <button>Agregar Usuario</button>
            </Link>
          </div>
        </div>
      </div>
      {/* este div solo se muestra cuando la pantalla es muy chica */}
      <div className={styles['warning-responsive']}>
        <h3>Esta funcionalidad no está disponible en dispositivos móviles</h3>
      </div>
    </div>
  )
}

export default Administrar