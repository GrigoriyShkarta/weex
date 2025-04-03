const Previous = () => {
	const cardData = [
		{
			id: 1,
			imageUrl:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/launchpad/547c8f3901c913bc2599a1aab4509b31.png',
			tokenImage:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/launchpad/a2f2f165ace0a1d92774c24888b8238f.jpg',
			tokenName: 'DRAGON MEME (DRGON)',
			description:
				'The Future Is Fierce - DRGON Meme. Step into the wild world of DRGON Meme, where fearless innovation meets a community-driven crypto revolution. Led by the playful yet powerful DRAGON, this adventure blends memes, loyalty, and financial creativity into an unforgettable experience.',
			totalRewards: '10,000 USDT',
			eventEndDate: '2025-03-24 11:30:00',
			buttons: [
				{ text: 'WXT Details', visible: true },
				{ text: '-- Details', visible: false },
			],
		},
		{
			id: 2,
			imageUrl:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/launchpad/342f9e552e8841f4eb76c89d7509e8ed.png',
			tokenImage:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/launchpad/9e277392d68a6439c3135ad2ae0a1d43.jpg',
			tokenName: 'Mubarak (MUBARAK)',
			description:
				'CZ just subtly acknowledged that he’s Mubarak – a typical cryptic move from the Binance boss! Those who’ve followed CZ long enough know that when he shills like this, the chances of a Binance listing are sky-high. The Arab world, with their deep pockets, is ready to pump Mubarak to a $1 billion MC. This meme coin has now been taken over by the community, with the CTO pushing it hard – get ready for a big boom!',
			totalRewards: '72,000 MUBARAK',
			eventEndDate: '2025-03-31 10:30:00',
			buttons: [
				{ text: 'WXT Details', visible: true },
				{ text: 'MUBARAK Details', visible: true },
			],
		},
	]

	return (
		<div className='flex flex-wrap justify-between gap-[36px] relative min-h-[300px]'>
			{cardData.map(card => (
				<div key={card.id} className='flex flex-col w-[328px] max-sm:w-full'>
					{/* Top Section */}
					<div>
						<div>
							<img
								src={card.imageUrl}
								alt={card.tokenName}
								className='w-full h-auto'
							/>
						</div>

						<div className='mb-[16px] mt-[24px]'>
							<div className='flex items-center'>
								<img
									src={card.tokenImage}
									alt={card.tokenName}
									className='w-[30px] h-[30px] mr-[16px] rounded-[50%] '
								/>
								<span className='font-[700] text-[20px] text-white'>
									{card.tokenName}
								</span>
							</div>

							<div className='max-h-[60px] overflow-hidden text-justify '>
								<p className='text-[#8b8b8e] text-[14px] text-ellipsis '>
									{card.description}
								</p>
							</div>

							<div className='mt-[24px]'>
								<div className='flex items-center justify-between mb-[12px]'>
									<span className='text-[#6B6B6B] text-[16px]'>
										Total rewards
									</span>
									<p className='text-white font-[500] text-[16px]'>
										{card.totalRewards}
									</p>
								</div>
								<div className='flex items-center justify-between mb-[12px]'>
									<span className='text-[#6B6B6B] text-[16px]'>
										Event ends on
									</span>
									<p className='text-white font-[500] text-[16px]'>
										{card.eventEndDate}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons Section */}
					<div className='w-full flex items-center justify-between mt-[24px] gap-[10px]'>
						{card.buttons.map(
							(button, index) =>
								button.visible && (
									<button
										key={index}
										className={`w-full items-center overflow-hidden text-ellipsis whitespace-nowrap bg-[hsla(0,0%,100%,.08)] rounded-[16px] text-[16px] text-white text-center cursor-pointer border-none font-[500] py-[12px] px-[20px] hover:bg-[hsla(0,0%,100%,.04)]`}
									>
										{button.text}
									</button>
								)
						)}
					</div>
				</div>
			))}
		</div>
	)
}

export default Previous
