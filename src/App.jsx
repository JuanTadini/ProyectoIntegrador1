import './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Products from './Routes/Products'
import Manage from './Routes/Manage'
import Create from './Routes/Create'
import List from './Routes/List'
import Footer from './Components/Footer'
import styles from './App.module.css'
import Buscar from './Routes/Buscar'
import Categorias from './Routes/Categorias'
import Gallery from './Routes/Gallery'
import Login from './Routes/Login'

function App() {
	return (
		<div className={styles['home']}>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/buscar' element={<Buscar/>}/>
				<Route path='/categorias' element={<Categorias/>}/>
				<Route path='/detail/:id' element={<Detail/>}/>
				<Route path='/detail/:id/gallery' element={<Gallery/>}/>
				<Route path='/products' element={<Products/>}/>
				<Route path='/manage' element={<Manage/>}/>
				<Route path='/create' element={<Create/>}/>
				<Route path='/list' element={<List/>}/>
				<Route path='/login' element={<Login/>}/>
			</Routes>
			<Footer/>
		</div>
	)
}

export default App
