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
import SpotTradingMatch from './pages/SpotTradingMatch'
import KickStarter from './pages/KickStarter'
import Airdrob from './pages/Airdrob'
import VipExclusive from './pages/VipExclusive'
import WelcomeBonus from './pages/WelcomeBonus'
import CopyTrade from './pages/CopyTrade'
import Spin from './pages/Spin'
import TRUMB from './pages/TRUMB'

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
				<Route
					path='/events/promo/airdrop-rewards-wxt-holders-1'
					element={<SpotTradingMatch />}
				/>
				<Route
					path='/events/promo/airdrop-rewards-wxt-holders-2'
					element={<KickStarter />}
				/>
				<Route path='events/promo/GHIBLI' element={<Airdrob />} />
				<Route path='events/promo/vip-exclusive5' element={<VipExclusive />} />
				<Route path='events/welcome-event' element={<WelcomeBonus />} />
				<Route path='events/promo/copy-trade-pro-15' element={<CopyTrade />} />
				<Route path='events/draw/spin-14' element={<Spin />} />
				<Route path='events/promo/trumpusdt' element={<TRUMB />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
