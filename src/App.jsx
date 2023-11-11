import './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Productos from './Routes/Productos'
import Administrar from './Routes/Administrar'
import CrearProducto from './Routes/CrearProducto'
import ListarProductos from './Routes/ListarProductos'
import CrearCategoria from './Routes/CrearCategoria'
import ListarCategorias from './Routes/ListarCategorias'
import CrearUsuario from './Routes/CrearUsuario'
import Footer from './Components/Footer'
import styles from './App.module.css'
import Buscar from './Routes/Buscar'
import Recomendation from './Routes/Recomendation'
import Gallery from './Routes/Gallery'
import Login from './Routes/Login'
import Register from './Routes/Register'

function App() {
	return (
		<div className={styles['home']}>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/buscar' element={<Buscar/>}/>
				<Route path='/recomendation' element={<Recomendation/>}/>
				<Route path='/detail/:id' element={<Detail/>}/>
				<Route path='/detail/:id/gallery' element={<Gallery/>}/>
				<Route path='/productos' element={<Productos/>}/>
				<Route path='/administrar' element={<Administrar/>}/>
				<Route path='/administrar/productos/crearProducto' element={<CrearProducto/>}/>
				<Route path='/administrar/productos/listarProductos' element={<ListarProductos/>}/>
				<Route path='/administrar/categorias/crearCategoria' element={<CrearCategoria/>}/>
				<Route path='/administrar/categorias/listarCategorias' element={<ListarCategorias/>}/>
				<Route path='/administrar/usuarios/crearUsuario' element={<CrearUsuario/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/register' element={<Register/>}/>
			</Routes>
			<Footer/>
		</div>
	)
}

export default App
