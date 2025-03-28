import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Career from './pages/Career'
import EliteTrader from './pages/EliteTrader'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/job' element={<Career />} />
				<Route path='/elite-trader' element={<EliteTrader />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
