import React from 'react'

const AfterBuy: React.FC = () => {
	const options = [
		{
			title: 'Hold (HODL)',
			description:
				'Keep your WXT for the long term with the hope that its value increases.',
		},
		{
			title: 'Trade',
			description:
				'Trade WXT for other cryptocurrencies or cash on Bitcoin to potentially profit or diversify your portfolio.',
		},
		{
			title: 'Spend',
			description:
				'Use Bitcoin for direct payments where accepted, or get a Crypto Pay Card (like Bitpay) to instantly convert your crypto to cash for use at millions of merchants or to buy gift cards.',
		},
		{
			title: 'Explore DeFi (if applicable)',
			description:
				'Use WXT for activities like lending, borrowing, or yield farming to potentially earn rewards.',
		},
		{
			title: 'Discover its ecosystem (if applicable)',
			description:
				'Research if Bitcoin is used in any platforms, apps, games, or services.',
		},
	]

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]' id='WhatCanIDo'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				What Can I Do After I Buy Bitcoin (BTC)?
			</h2>

			<div className='flex mt-[24px] gap-[32px] max-sm:flex-col'>
				{/* Left side - Image */}
				<div className='w-[278px] max-sm:w-full'>
					<img
						src='https://www.weex.com/_pages/img/after-buy_en.af13d67.png'
						alt='What Can I Do After I Buy Bitcoin (BTC)?'
						className='max-w-full h-auto rounded-lg shadow-md'
					/>
				</div>

				{/* Right side - Options list */}
				<div className='flex-1'>
					{options.map((option, index) => (
						<div
							key={index}
							className='mb-[24px] p-[16px] border border-[#474747] rounded-[12px] text-[16px] text-[#d1d1d2]'
						>
							<p className=''>
								<span className='text-white font-[700]'>{option.title}:</span>{' '}
								{option.description}
							</p>
						</div>
					))}

					<div className='mt-[24px] text-[14px] text-[#8b8b8e]'>
						Remember: Always do your research and understand the risks before
						making any decisions with your cryptocurrency. This is not financial
						advice.
					</div>
				</div>
			</div>
		</div>
	)
}

export default AfterBuy
