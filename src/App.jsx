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

function App() {
	return (
		<div className={styles['home']}>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/detail/:id' element={<Detail/>}/>
				<Route path='/products' element={<Products/>}/>
				<Route path='/manage' element={<Manage/>}/>
				<Route path='/create' element={<Create/>}/>
				<Route path='/list' element={<List/>}/>
			</Routes>
			<Footer/>
		</div>
	)
}

export default App
