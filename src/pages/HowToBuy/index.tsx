import React from 'react'
import { Link } from 'react-router-dom'
import useMobileDetection from '../../utils/useMobileDetection'

interface CryptoItem {
	id: number
	name: string
	symbol: string
	image: string
	url: string
}

const HowToBuyCrypto: React.FC = () => {
	const isMobile = useMobileDetection()

	const cryptoList: CryptoItem[] = [
		{
			id: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
			url: '/how-to-buy/bitcoin',
		},
		{
			id: 2,
			name: 'Ethereum',
			symbol: 'ETH',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
			url: '/how-to-buy/ethereum',
		},
		{
			id: 3,
			name: 'Tether USDt',
			symbol: 'USDT',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
			url: '/how-to-buy/tether',
		},
		{
			id: 4,
			name: 'XRP',
			symbol: 'XRP',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
			url: '/how-to-buy/xrp',
		},
		{
			id: 5,
			name: 'BNB',
			symbol: 'BNB',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
			url: '/how-to-buy/bnb',
		},
		{
			id: 6,
			name: 'Solana',
			symbol: 'SOL',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
			url: '/how-to-buy/solana',
		},
		{
			id: 7,
			name: 'USDC',
			symbol: 'USDC',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
			url: '/how-to-buy/usd-coin',
		},
		{
			id: 8,
			name: 'Dogecoin',
			symbol: 'DOGE',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
			url: '/how-to-buy/dogecoin',
		},
		{
			id: 9,
			name: 'Cardano',
			symbol: 'ADA',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
			url: '/how-to-buy/cardano',
		},
		{
			id: 10,
			name: 'TRON',
			symbol: 'TRX',
			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
			url: '/how-to-buy/tron',
		},
		// Add more cryptocurrencies as needed
	]

	const handleSpotClick = () => {
		// Handle spot click action
		console.log('Spot clicked')
	}

	const handleProtectClick = () => {
		// Handle protection fund click action
		console.log('Protection Fund clicked')
	}

	return (
		<div className='bg-[#151515] text-white min-h-screen'>
			<div className='w-[1200px] mx-auto max-sm:w-full max-sm:px-[4.2vw]'>
				{/* Navigation */}
				<div className='pt-[72px] pb-[40px] max-sm:pt-[6.4vw] max-sm:pb-[13.3vw]'>
					<div className='flex items-center text-sm mb-8'>
						<Link to='/' className='text-gray-300 hover:text-white mr-2'>
							WEEX
						</Link>
						<span className='text-gray-500 mr-2'>/</span>
						<span>How to Buy Crypto</span>
					</div>

					{/* Page Title */}
					<div className='flex text-[28px] font-[700] max-sm:text-[8,5vw] max-sm:flex-wrap'>
						<h1 className='mr-[41px]'>How to Buy Crypto</h1>
						<div className=''>WEEX</div>
					</div>

					{/* Description */}
					<div className='mb-[40px] max-sm:mt-[8.5vw] max-sm:text-[4.2vw]'>
						<p className='mt-[32px]'>
							How to Purchase Cryptocurrency on WEEX Exchange: WEEX offers a
							secure and convenient option for buying cryptocurrency. Click on
							"Buy Crypto" to swiftly purchase digital currencies using bank
							cards/Alipay, with USD/TWD/VND/CNY and other fiat currencies. You
							can also access a broader range of digital and fiat currencies
							through our partners, AlchemyPay/ChipPay.
						</p>
						<p className='mt-[32px] max-sm:mt-[8.5vw] max-sm:text-[4.2vw]'>
							If you already have USDT, please proceed to "
							<span
								className='text-yellow-400 cursor-pointer'
								onClick={handleSpotClick}
							>
								Spot
							</span>
							" on WEEX to purchase a variety of popular cryptocurrencies using
							USDT. Trade with confidence at WEEX! We enhance fund security with
							a 1,000 BTC
							<span
								className='text-yellow-400 cursor-pointer'
								onClick={handleProtectClick}
							>
								{' '}
								Protection Fund
							</span>
							. Register now and enjoy your trading journey!
						</p>
					</div>

					{/* Crypto List Section */}
					<div className='pt-[60px]'>
						<div className='flex justify-between items-center text-[28px] font-[700] max-sm:flex-col max-sm:text-[6.4vw] max-sm:items-start'>
							<h2 className=''>All crypto</h2>
							<div className='flex items-center w-[240px] h-[40px] px-[12px] rounded-[20px] bg-[hsla(0,0%,100%,.08)] text-[14px] relative max-sm:w-full max-sm:mt-[6.4vw] max-sm:h-[10.6vw] max-sm:rounded-[5.3vw]'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<svg
										className='h-5 w-5 text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<input
									type='text'
									placeholder='Search'
									className='bg-none pl-[8px] h-[40px] text-white w-full outline-none ml-[20px]'
								/>
							</div>
						</div>

						{/* Crypto Grid */}
						<div className='flex flex-wrap justify-between mt-[40px]'>
							{cryptoList.map(crypto => (
								<a
									key={crypto.id}
									href={crypto.url}
									target='_blank'
									rel='noopener noreferrer'
									className='w-[580px] flex items-center cursor-pointer h-[60px] rounded-[12px] px-[20px] mt-[24px] text-[14px] hover:bg-[#222]'
								>
									<span className='text-gray-400 mr-3'>{crypto.id}</span>
									<div className='mr-3'>
										<img
											src={crypto.image}
											alt={crypto.name}
											className='w-[33px] h-[33px] mx-[18px] max-sm:w-[8.8vw] max-sm:h-[8.8vw] max-sm:mx-[4.8vw]'
										/>
									</div>
									<div className='max-sm:flex max-sm:gap-[1.4vw]'>
										<div className='font-medium'>{crypto.name}</div>
										<div className='text-gray-400 text-sm'>{crypto.symbol}</div>
									</div>
								</a>
							))}
						</div>
					</div>

					{/* Pagination */}
					<div className='flex justify-center items-center pt-[64px] pb-[100px]'>
						<nav className='flex items-center space-x-1'>
							<button
								disabled
								className='px-3 py-1 rounded bg-[hsla(0,0%,100%,.08)] text-gray-500 cursor-not-allowed'
							>
								&lt;
							</button>
							{(isMobile ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9]).map(
								page => (
									<a
										key={page}
										href={`/how-to-buy${page === 1 ? '' : `?page=${page}`}`}
										className={`px-3 py-1 rounded ${
											page === 1
												? 'bg-[#e6c325] text-black'
												: 'bg-[hsla(0,0%,100%,.08)] text-gray-300'
										}`}
									>
										{page}
									</a>
								)
							)}
							<span className='px-3 py-1 text-gray-500'>...</span>
							<a
								href='/how-to-buy?page=669'
								className='px-3 py-1 rounded bg-[hsla(0,0%,100%,.08)] text-gray-300'
							>
								669
							</a>
							<button className='px-3 py-1 rounded bg-[hsla(0,0%,100%,.08)] text-gray-300'>
								&gt;
							</button>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowToBuyCrypto
