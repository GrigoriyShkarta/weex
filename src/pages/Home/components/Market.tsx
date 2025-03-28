import { useState } from 'react'

const Market = () => {
	const [activeTab, setActiveTab] = useState('trending')

	const trendingCoins = [
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/b6e76ca86ca2a7f83df38ceeecf02eb5.png',
			pair: 'WXT/USDT',
			price: '0.025149',
			volume: '1,178,744 USDT',
			change: '-0.69%',
			isRise: false,
			link: '/trade/WXT-USDT',
		},
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/d99bca657face47f8c24e2f5c7ef983e.png',
			pair: 'BTC/USDT',
			price: '87,820.7',
			volume: '801,280,165 USDT',
			change: '-0.60%',
			isRise: false,
			link: '/trade/BTC-USDT',
		},
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/d716469017294582c0d7cc6d502176f4.png',
			pair: 'ADA/USDT',
			price: '0.7578',
			volume: '154,896,206 USDT',
			change: '+3.40%',
			isRise: true,
			link: '/trade/ADA-USDT',
		},
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/f49d6bff5de5eb6df500598e294a95bc.png',
			pair: 'XRP/USDT',
			price: '2.4400',
			volume: '81,321,101 USDT',
			change: '-1.37%',
			isRise: false,
			link: '/trade/XRP-USDT',
		},
	]

	const newListings = [
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/9d3bbd44cc0dfa977a95f15647bab9b3.png',
			pair: 'NIL/USDT',
			price: '0.661',
			change: '-9.82%',
			isRise: false,
			link: '/trade/NIL-USDT',
		},
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/bb794d4b488b75147a187c9f12e0f5ba.png',
			pair: 'DOWNALD/USDT',
			price: '0.000564',
			change: '-79.66%',
			isRise: false,
			link: '/trade/DOWNALD-USDT',
		},
		{
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/coin_img/058742796f2422070ab482030821671f.png',
			pair: 'UUU/USDT',
			price: '0.00731',
			change: '+4.28%',
			isRise: true,
			link: '/trade/UUU-USDT',
		},
	]

	// Объединяем табы для мобильной версии
	const mobileTabs = ['trending', 'gainers', '24hVolume']
	const desktopTabs = ['trending', 'gainers', '24hVolume']

	return (
		<div className='mt-[100px] w-[1200px] mx-auto max-sm:w-full'>
			{/* Market Header */}
			<div className='flex justify-between items-center mb-6 max-sm:hidden'>
				<h2 className='text-[48px] text-[#fff] font-bold'>Market</h2>
				<a href='/markets' className='flex items-center text-[#fff]'>
					View more
					<svg
						className='w-4 h-4 ml-2'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</a>
			</div>

			{/* Market Tabs */}
			<div className='max-sm:w-full w-[1200px] my-[40px] mx-[auto] flex justify-between rounded-[4px]'>
				<div className='max-sm:border-none max-sm:w-full w-[720px] border border-[#2e2e2e] rounded-[24px] pt-[8px] px-[24px] pb-[24px]'>
					<div className='flex gap-[48px] items-center border-b border-[#282828]'>
						{(window.innerWidth <= 640 ? mobileTabs : desktopTabs).map(tab => (
							<button
								key={tab}
								className={`h-[56px] text-[20px] font-[500] cursor-pointer ${
									activeTab === tab
										? 'text-[#fff] border-b-2 border-#fff'
										: 'text-[#8b8b8e]'
								}`}
								onClick={() => setActiveTab(tab)}
							>
								{tab === 'trending' && 'Trending'}
								{tab === 'gainers' && 'Gainers'}
								{tab === '24hVolume' && '24h Volume'}
								{tab === 'newListings' && 'New Listings'}
							</button>
						))}
					</div>

					<div className='grid px-[16px] grid-cols-12 gap-4 text-[#5d5d61] text-[14px] my-[12px] mx-[auto]'>
						<div className='col-span-4'>Pair</div>
						<div className='col-span-2 text-left'>Price</div>
						{activeTab !== 'newListings' && (
							<div className='col-span-3 text-left hidden md:block'>
								24h volume
							</div>
						)}
						<div className='col-span-2 text-left'>Change</div>
						<div className='col-span-1 text-left hidden md:block'>Action</div>
					</div>

					{activeTab === 'newListings'
						? newListings.map((coin, index) => (
								<div
									key={index}
									className='box-border px-[16px] block h-16 text-base font-medium text-white flex items-center justify-between cursor-pointer font-sans hover:bg-[#222222] transition-colors duration-200 rounded-lg group'
								>
									<div className='col-span-4 flex items-center'>
										<img
											src={coin.icon}
											alt={coin.pair}
											className='w-6 h-6 mr-2'
										/>
										<a href={coin.link} className='hover:text-yellow-400'>
											{coin.pair.split('/')[0]}
											<span className='text-gray-400'>
												/{coin.pair.split('/')[1]}
											</span>
										</a>
									</div>
									<div className='col-span-2 text-left'>{coin.price}</div>
									<div
										className={`col-span-2 text-right ${
											coin.isRise ? 'text-green-400' : 'text-red-400'
										}`}
									>
										{coin.change}
									</div>
									<div className='max-sm:hidden col-span-1 text-left flex justify-center w-[68px] h-8 leading-8 text-center bg-white/10 rounded-lg box-border text-white text-sm cursor-pointer group-hover:bg-white group-hover:text-[#161616] transition-colors duration-200'>
										<a href={coin.link} className='text-center w-full'>
											Trade
										</a>
									</div>
								</div>
						  ))
						: trendingCoins.map((coin, index) => (
								<div
									key={index}
									className='box-border px-[16px] block h-16 text-base font-medium text-white flex items-center justify-between cursor-pointer font-sans hover:bg-[#222222] transition-colors duration-200 rounded-lg group'
								>
									<div className='col-span-4 flex items-center'>
										<img
											src={coin.icon}
											alt={coin.pair}
											className='w-6 h-6 mr-2'
										/>
										<a href={coin.link} className='hover:text-yellow-400'>
											{coin.pair.split('/')[0]}
											<span className='text-gray-400'>
												/{coin.pair.split('/')[1]}
											</span>
										</a>
									</div>
									<div className='col-span-2 text-left'>{coin.price}</div>
									{activeTab !== 'newListings' && (
										<div className='col-span-3 text-left hidden md:block'>
											{coin.volume}
										</div>
									)}
									<div
										className={`col-span-2 text-right ${
											coin.isRise ? 'text-green-400' : 'text-red-400'
										}`}
									>
										{coin.change}
									</div>
									<div className='col-span-1 text-left flex justify-center w-[68px] h-8 leading-8 text-center bg-white/10 rounded-lg box-border text-white text-sm cursor-pointer group-hover:bg-white group-hover:text-[#161616] transition-colors duration-200'>
										<a href={coin.link} className='text-center w-full'>
											Trade
										</a>
									</div>
								</div>
						  ))}
				</div>

				<div className='max-sm:hidden w-[456px] border border-[#2e2e2e] pt-[8px] px-[24px] pb-[24px] rounded-[24px]'>
					<div className='flex items-center border-b border-[#282828]'>
						<button className={`h-[56px] text-[20px] font-[500] text-[#fff]`}>
							New listings
						</button>
					</div>

					<div className='grid px-[16px] grid-cols-12 gap-4 text-[#5d5d61] text-[14px] my-[12px] mx-[auto] '>
						<div className='col-span-6'>Pair</div>
						<div className='col-span-3 text-left'>Price</div>
						<div className='col-span-3 text-left'>Change</div>
					</div>

					{newListings.map((coin, index) => (
						<div
							key={index}
							className='box-border px-[16px] block h-16 text-base font-medium text-white flex items-center justify-between cursor-pointer font-sans hover:bg-[#222222] transition-colors duration-200 rounded-lg group'
						>
							<div className='flex items-center w-[165px] overflow-hidden text-ellipsis'>
								<img src={coin.icon} alt={coin.pair} className='w-6 h-6 mr-2' />
								<a href={coin.link}>
									{coin.pair.split('/')[0]}
									<span className='text-gray-400'>
										/{coin.pair.split('/')[1]}
									</span>
								</a>
							</div>
							<div className='text-left'>{coin.price}</div>
							<div
								className={`col-span-3 text-left ${
									coin.isRise ? 'text-green-400' : 'text-red-400'
								}`}
							>
								{coin.change}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='flex gap-[54px] items-center max-sm:hidden'>
				<a
					href='/register'
					className='w-[146px] h-[48px] bg-white rounded-[16px] text-black cursor-pointer text-[16px] font-medium text-center flex items-center justify-center hover:bg-[#e6e6e6] transition-all duration-350'
				>
					Get started
				</a>
				<p className='text-gray-300'>
					Sign up now to build your portfolio for free!
				</p>
			</div>

			{/* Mobile View More */}
			<div className='md:hidden text-center'>
				<a href='/markets' className='text-[#8b8b8e]'>
					View more
				</a>
			</div>
		</div>
	)
}

export default Market
