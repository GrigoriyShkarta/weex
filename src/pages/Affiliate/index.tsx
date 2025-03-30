import ChooseWeex from './ChooseWeex'
import StartEarning from './StartEarning'
import JoinAffiliate from './JoinAffiliate'
import FAQ from './FAQ'
import JoinWeex from './JoinWeex'
import HomeAdvantage from './HomeAdvantage'
import Feature from './Feature'
import Intro from './Intro'

const WeexAffiliate = () => {
	return (
		<div className='overflow-hidden bg-[#151515]'>
			<Intro />
			<Feature />
			<HomeAdvantage />
			<JoinWeex />
			<ChooseWeex />
			<StartEarning />
			<JoinAffiliate />
			<FAQ />
		</div>
	)
}

export default WeexAffiliate
