import React from 'react'

type CryptoItem = {
	id: string
	icon: string
	alt: string
	pair: string
	price: string
	change: string
	changeType: 'positive' | 'negative' | 'neutral'
	link: string
}

const MoreCryptos: React.FC = () => {
	const cryptoItems: CryptoItem[] = [
		{
			id: '1',
			icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/293.png',
			alt: 'XBC',
			pair: 'XBC/USDT',
			price: '1.79',
			change: '+5.65 %',
			changeType: 'positive',
			link: '/how-to-buy/bitcoin-plus',
		},
		{
			id: '2',
			icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2247.png',
			alt: 'BCDN',
			pair: 'BCDN/USDT',
			price: '0.0001475',
			change: '-2.66 %',
			changeType: 'negative',
			link: '/how-to-buy/blockcdn',
		},
		{
			id: '3',
			icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/83.png',
			alt: 'OMNI',
			pair: 'OMNI/USDT',
			price: '0.962',
			change: '0 %',
			changeType: 'neutral',
			link: '/how-to-buy/omni',
		},
		{
			id: '4',
			icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2677.png',
			alt: 'LNC',
			pair: 'LNC/USDT',
			price: '0.004132',
			change: '0 %',
			changeType: 'neutral',
			link: '/how-to-buy/linker-coin',
		},
		{
			id: '5',
			icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
			alt: 'LINK',
			pair: 'LINK/USDT',
			price: '11.64',
			change: '+6.5 %',
			changeType: 'positive',
			link: '/how-to-buy/chainlink',
		},
		{
			id: '6',
			icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2542.png',
			alt: 'TDX',
			pair: 'TDX/USDT',
			price: '0.01071',
			change: '+1.52 %',
			changeType: 'positive',
			link: '/how-to-buy/tidex-token',
		},
	]

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				More Cryptocurrencies to Buy
			</h2>
			<p className='mt-[16px] text-[16px]'>
				Buy the most popular cryptocurrencies, including Bitcoin, Ethereum, and
				more.
			</p>

			<div className='mt-[16px] flex flex-wrap justify-between gap-[16px]'>
				{cryptoItems.map(item => (
					<div
						key={item.id}
						className='p-[16px] w-[270px] rounded-[24px] bg-[#222] cursor-pointer max-sm:w-full'
					>
						<div className='flex items-center gap-[8px] text-[16px] font-[500]'>
							<img
								src={item.icon}
								alt={item.alt}
								className='rounded-full w-[32px] h-[32px]'
							/>
							<a
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
								className=''
							>
								{item.pair}
							</a>
						</div>
						<div className='flex items-center mt-[8px] justify-between'>
							<div className='text-[20px] font-[700]'>{item.price}</div>
							<div
								className={`text-sm ${
									item.changeType === 'positive'
										? 'text-green-500'
										: item.changeType === 'negative'
										? 'text-red-500'
										: 'text-white'
								}`}
							>
								{item.change}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MoreCryptos
