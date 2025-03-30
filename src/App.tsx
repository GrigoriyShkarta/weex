import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Career from './pages/Career'
import EliteTrader from './pages/EliteTrader'
import ProtectFund from './pages/ProtectFund'
import OfficialVerification from './pages/OfficialVerification'
import WeexTokenPage from './pages/WXT'
import WeexAffiliate from './pages/Affiliate'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/job' element={<Career />} />
				<Route path='/elite-trader' element={<EliteTrader />} />
				<Route path='/protectfund' element={<ProtectFund />} />
				<Route
					path='/official-verification'
					element={<OfficialVerification />}
				/>
				<Route path='/wxt' element={<WeexTokenPage />} />
				<Route path='/affiliate' element={<WeexAffiliate />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
