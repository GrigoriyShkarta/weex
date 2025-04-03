import Banner from './components/Banner'
import APY from './components/APY'
import EventDetail from './components/EventDetail'
import Participate from './components/Participate'

const WELaunch: React.FC = () => {
	return (
		<div className='overflow-hidden'>
			<Banner />
			<APY />
			<EventDetail />
			<Participate />
		</div>
	)
}

export default WELaunch
