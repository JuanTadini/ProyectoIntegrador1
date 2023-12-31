import './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Reservar from './Routes/Reservar'
import Productos from './Routes/Productos'
import Administrar from './Routes/Administrar'
import CrearProducto from './Routes/CrearProducto'
import ListarProductos from './Routes/ListarProductos'
import CrearCategoria from './Routes/CrearCategoria'
import ListarCategorias from './Routes/ListarCategorias'
import CrearProductFeature from './Routes/CrearProductFeature'
import ListarProductFeature from './Routes/ListarProductFeature'
import CrearUsuario from './Routes/CrearUsuario'
import ListarUsuarios from './Routes/ListarUsuarios'
import Footer from './Components/Footer'
import styles from './App.module.css'
import Buscar from './Routes/Buscar'
import Categorias from './Routes/Categorias'
import Login from './Routes/Login'
import Register from './Routes/Register'
import Politicas from './Routes/Politicas'

function App() {
	return (
		<div className={styles['app-view']}>
			<div className={styles['home']}>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/buscar' element={<Buscar/>}/>
					<Route path='/categorias' element={<Categorias/>}/>
					<Route path='/detail/:id' element={<Detail/>}/>
					<Route path='/reservar/:id' element={<Reservar/>}/>
					<Route path='/politicas' element={<Politicas/>}/>
					<Route path='/productos' element={<Productos/>}/>
					<Route path='/administrar' element={<Administrar/>}/>
					<Route path='/administrar/productos/crearProducto' element={<CrearProducto/>}/>
					<Route path='/administrar/productos/crearProducto/:id' element={<CrearProducto/>}/>
					<Route path='/administrar/productos/listarProductos' element={<ListarProductos/>}/>
					<Route path='/administrar/categorias/crearCategoria' element={<CrearCategoria/>}/>
					<Route path='/administrar/categorias/crearCategoria/:id' element={<CrearCategoria/>}/>
					<Route path='/administrar/categorias/listarCategorias' element={<ListarCategorias/>}/>
					<Route path='/administrar/features/crearProductFeature' element={<CrearProductFeature/>}/>
					<Route path='/administrar/features/crearProductFeature/:id' element={<CrearProductFeature/>}/>
					<Route path='/administrar/features/listarProductFeature' element={<ListarProductFeature/>}/>
					<Route path='/administrar/usuarios/crearUsuario' element={<CrearUsuario/>}/>
					<Route path='/administrar/usuarios/listarUsuarios' element={<ListarUsuarios/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
				</Routes>
			</div>
			<Footer/>
		</div>
	)
}

export default App
