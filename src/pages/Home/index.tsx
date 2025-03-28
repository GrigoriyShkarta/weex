import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import BannerSlider from './components/BannerSlider'
import Carousel from './components/Carousel'
import ChooseWEEX from './components/ChooseWEEX'
import Market from './components/Market'
import MobileTrade from './components/MobileTrade'
import Notice from './components/Notice'
import PopularEvent from './components/PopularEvent'
import StartTrade from './components/StartTrade'
import TradeNow from './components/TradeNow'
import WelcomeModal from './components/WelcomModal'

const Home = () => {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const dontRemindUntil = localStorage.getItem('dontRemindUntil')

		if (dontRemindUntil && new Date().getTime() < Number(dontRemindUntil)) {
			setShowModal(false)
		} else {
			setShowModal(true)
		}
	}, [])

	return (
		<>
			<Banner />
			<PopularEvent />
			<Notice />
			<BannerSlider />
			<Market />
			<ChooseWEEX />
			<StartTrade />
			<Carousel />
			<MobileTrade />
			<TradeNow />

			{showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
		</>
	)
}

export default Home
