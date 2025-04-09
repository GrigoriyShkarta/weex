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
import WELaunch from './pages/WeLaunch'
import About from './pages/AboutUs'
import AmbassadorPage from './pages/Ambasador'
import ProofOfReserves from './pages/Proof'
import DownloadSection from './pages/Download'
import AuthPage from './pages/Auth'
import Forget from './pages/Forget'
import VipPerks from './pages/VipPerks'
import HowToBuyCrypto from './pages/HowToBuy'
import CopyTradingPro from './pages/CopyTraidingPro'
import ScrollToTop from './components/ScrollToTop'
import HowToBuyWeexToken from './pages/WeexToken'
import HowToBuyBTC from './pages/BTC'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HowToBuyETH from './pages/ETH'
import HowToBuyDogecoin from './pages/DOGE'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<ScrollToTop />
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
					<Route
						path='events/promo/vip-exclusive5'
						element={<VipExclusive />}
					/>
					<Route path='events/welcome-event' element={<WelcomeBonus />} />
					<Route
						path='events/promo/copy-trade-pro-15'
						element={<CopyTrade />}
					/>
					<Route path='events/draw/spin-14' element={<Spin />} />
					<Route path='events/promo/trumpusdt' element={<TRUMB />} />
					<Route path='we-launch' element={<WELaunch />} />
					<Route path='aboutus' element={<About />} />
					<Route path='community' element={<About />} />
					<Route path='Media-kit' element={<About />} />
					<Route path='weex-owen' element={<AmbassadorPage />} />
					<Route path='proof-of-reserves' element={<ProofOfReserves />} />
					<Route path='download' element={<DownloadSection />} />
					<Route path='login' element={<AuthPage />} />
					<Route path='forget' element={<Forget />} />
					<Route path='asset/rateDesc' element={<VipPerks />} />
					<Route path='how-to-buy' element={<HowToBuyCrypto />} />
					<Route path='copy-trading' element={<CopyTradingPro />} />
					<Route path='how-to-buy/weex-token' element={<HowToBuyWeexToken />} />
					<Route path='how-to-buy/bitcoin' element={<HowToBuyBTC />} />
					<Route path='how-to-buy/ethereum' element={<HowToBuyETH />} />
					<Route path='how-to-buy/dogecoin' element={<HowToBuyDogecoin />} />
				</Routes>
				<Footer />
			</Router>
		</QueryClientProvider>
	)
}

export default App
