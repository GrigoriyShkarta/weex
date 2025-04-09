import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import CarouselItem from '../../components/Card'

const EliteTrader = () => {
	const [count, setCount] = useState(0)
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [index, setIndex] = useState(0)
	const targetAmount = 10000000
	const duration = 3 // seconds

	useEffect(() => {
		let start = 0
		const increment = targetAmount / (duration * 60) // 60fps

		const timer = setInterval(() => {
			start += increment
			if (start >= targetAmount) {
				setCount(targetAmount)
				clearInterval(timer)
			} else {
				setCount(Math.floor(start))
			}
		}, 1000 / 60) // 60fps

		return () => clearInterval(timer)
	}, [])

	// Format number with commas
	const formattedCount = count.toLocaleString()

	const cardCount = 15
	const cards = Array.from({ length: cardCount }, (_, i) => i)

	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const faqItems = [
		{
			question: 'What are the requirements to become an elite trader?',
			answer:
				'To become an elite trader, you need a minimum trading volume of $50,000, at least 3 months of trading history, and a consistent profit record.',
		},
		{
			question: 'What are the criteria for elite traders to be listed?',
			answer:
				'Elite traders are selected based on performance metrics including ROI, risk management, and trading consistency over time.',
		},
		{
			question: 'What is the code of conduct for elite traders?',
			answer:
				'Elite traders must maintain ethical trading practices, avoid market manipulation, and provide accurate performance data.',
		},
		{
			question: 'How does profit share work?',
			answer:
				'We operate on an 80/20 profit share model - elite traders receive 80% of profits generated from their copied trades.',
		},
		{
			question:
				'Do you have more questions? Contact our customer service team at any time, or view more details at:',
			answer: 'support@weex.com | https://help.weex.com/elite-traders',
		},
	]

	const nextSlide = () => {
		setIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1))
	}

	const toggleItem = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className='bg-[#151515] text-white overflow-hidden'>
			<div className='text-[white]'>
				<div className='flex justify-center bg-[#222] '>
					<div className='cont w-[1200px] flex justify-between items-center max-sm:w-[85vw] max-sm:text-center max-sm:flex-col-reverse'>
						<div>
							<h1 className='text-[48px] font-[900] mb-[24px] max-sm:text-[28px] my-[8px]'>
								Become an Elite Trader
							</h1>
							<p className='text-[24px] text-[#d1d1d2] max-sm:text-[18px]'>
								Master the markets. Lead the pack.
							</p>
							<p className='text-[24px] text-[#d1d1d2] max-sm:text-[18px]'>
								Start your elite trader journey today!
							</p>
							<button className='h-[48px] leading-[48px] px-[80px] bg-[#e6c325] rounded-[12px] text-[16px] text-black mt-[48px] inline-block cursor-pointer font-bold hover:bg-[#d8ae15] max-sm:mt-[16px] mb-[40px]'>
								Apply
							</button>
						</div>

						<div className='ico w-[350px] h-[350px] my-[25px] max-sm:w-[74.6vw] max-sm:h-auto'>
							<img
								src='https://www.weex.com/_trade/img/elite_trader_ico.6088561.png'
								alt='Elite Trader'
								className='max-w-full h-auto'
							/>
						</div>
					</div>
				</div>
			</div>
			{/* block 2 */}
			<div className='flex justify-center pt-[80px] text-white max-sm:pt-[36px]'>
				<div className='content w-[1200px] flex justify-between flex-wrap max-sm:w-full max-sm:px-[16px]'>
					{/* Card 1 - Global Community */}
					<div className='w-[585px] rounded-3xl border border-opacity-20 border-[rgba(119,121,137,.2)] flex justify-between items-center p-[32px_40px_45px] mb-8 max-sm:mb-[16px] max-sm:p-[16px]'>
						<div className='cont flex flex-col h-full'>
							<strong className='text-[30px] mb-[16px] max-sm:mb-[8px] max-sm:text-[16px]'>
								Global Community
							</strong>
							<p className='text-[#8b8b8e] text-[14px]'>
								More than 5,000,000 elite traders
							</p>
							<p className='text-[#8b8b8e] text-[14px]'>
								A wealth of copiers from over 50 countries and regions
							</p>
						</div>
						<div className='ico mt-4 flex justify-center'>
							<img
								src='https://www.weex.com/_trade/img/elite_trader_card_ico1.a70dd85.png'
								alt='Global Community'
								className='w-16 h-16 object-contain max-sm:w-[40px] max-sm:h-[40px]'
							/>
						</div>
					</div>

					{/* Card 2 - High Credibility */}
					<div className='w-[585px] rounded-3xl border border-opacity-20 border-[rgba(119,121,137,.2)] flex justify-between items-center p-[32px_40px_45px] mb-8 max-sm:mb-[16px] max-sm:p-[16px]'>
						<div className='cont flex flex-col h-full'>
							<strong className='text-[30px] mb-[16px] max-sm:mb-[8px] max-sm:text-[16px]'>
								High Credibility
							</strong>
							<p className='text-[#8b8b8e] text-[14px]'>
								$2,000,000 elite trader fund
							</p>
							<p className='text-[#8b8b8e] text-[14px]'>
								Exclusive prize pools and ongoing events
							</p>
						</div>
						<div className='ico mt-4 flex justify-center'>
							<img
								src='https://www.weex.com/_trade/img/elite_trader_card_ico2.78de834.png'
								alt='Global Community'
								className='w-16 h-16 object-contain max-sm:w-[40px] max-sm:h-[40px]'
							/>
						</div>
					</div>

					{/* Card 3 - Exposure Boost */}
					<div className='w-[585px] rounded-3xl border border-opacity-20 border-[rgba(119,121,137,.2)] flex justify-between items-center p-[32px_40px_45px] mb-8 max-sm:mb-[16px] max-sm:p-[16px]'>
						<div className='cont flex flex-col h-full'>
							<strong className='text-[30px] mb-[16px] max-sm:mb-[8px] max-sm:text-[16px]'>
								Exposure Boost
							</strong>
							<p className='text-[#8b8b8e] text-[14px]'>
								Weekly platform announcements
							</p>
							<p className='text-[#8b8b8e] text-[14px]'>
								Targeted events to boost exposure and reputation
							</p>
						</div>
						<div className='ico mt-4 flex justify-center'>
							<img
								src='https://www.weex.com/_trade/img/elite_trader_card_ico3.16729dc.png'
								alt='Global Community'
								className='w-16 h-16 object-contain max-sm:w-[40px] max-sm:h-[40px]'
							/>
						</div>
					</div>

					{/* Card 4 - Exclusive Support */}
					<div className='w-[585px] rounded-3xl border border-opacity-20 border-[rgba(119,121,137,.2)] flex justify-between items-center p-[32px_40px_45px] mb-8 max-sm:mb-[16px] max-sm:p-[16px]'>
						<div className='cont flex flex-col h-full'>
							<strong className='text-[30px] mb-[16px] max-sm:mb-[8px] max-sm:text-[16px]'>
								Global Community
							</strong>
							<p className='text-[#8b8b8e] text-[14px]'>
								More than 5,000,000 elite traders
							</p>
							<p className='text-[#8b8b8e] text-[14px]'>
								A wealth of copiers from over 50 countries and regions
							</p>
						</div>
						<div className='ico mt-4 flex justify-center'>
							<img
								src='https://www.weex.com/_trade/img/elite_trader_card_ico1.a70dd85.png'
								alt='Global Community'
								className='w-16 h-16 object-contain max-sm:w-[40px] max-sm:h-[40px]'
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center pt-[48px] max-sm:mx-[16px]'>
				<div className='content w-[1200px] flex justify-center rounded-[24px] border border-[rgba(119,121,137,.2)] relative'>
					{/* Top border divider */}
					<div className='border-top bg-gradient-to-r from-[rgba(34,34,34,0.4)] via-[hsla(0,0%,100%,0.5)] to-[rgba(34,34,34,0.4)] absolute h-[1px] top-[-1px] w-full'></div>

					<div className='cont text-center my-[40px]'>
						<h2 className='text-[20px] font-[500] max-sm:text-[16px]'>
							Total Profits Earned by Elite Traders
						</h2>
						<motion.div
							className='mt-[16px] text-[40px] font-[700] max-sm:text-[32px]'
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.3 }}
						>
							${formattedCount}+
						</motion.div>
					</div>

					{/* Bottom border divider */}
					<div className='border-bottom h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-8'></div>
				</div>
			</div>

			<div className='flex justify-center pt-[60px] relative'>
				<div className='w-[1200px] pb-[40px] text-white bg-[#151515] relative overflow-hidden'>
					{/* Кнопка влево */}
					<button
						onClick={prevSlide}
						className='absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'
					>
						←
					</button>

					<motion.div
						className='flex space-x-4 w-[1200px] mx-auto pt-[20px]'
						drag='x'
						dragConstraints={{ left: -((cards.length - 1) * 300), right: 0 }}
						animate={{ x: -index * 300 }}
						transition={{ type: 'spring', stiffness: 120 }}
						onDragEnd={(_, info) => {
							if (info.offset.x < -50) {
								nextSlide()
							} else if (info.offset.x > 50) {
								prevSlide()
							}
						}}
					>
						{cards.map((_, index) => (
							<CarouselItem
								key={index}
								index={index}
								isHovered={hoveredIndex === index}
								onHoverStart={() => setHoveredIndex(index as number)}
								onHoverEnd={() => setHoveredIndex(null)}
								withoutBg
							/>
						))}
					</motion.div>

					{/* Кнопка вправо */}
					<button
						onClick={nextSlide}
						className='absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'
					>
						→
					</button>

					{/* Градиент справа */}
					<div className='absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-[#151515] to-transparent pointer-events-none'></div>
				</div>
			</div>

			<div className='mod-5 flex justify-center pt-[48px] max-sm:pt-[32px] max-sm:mx-[16px]'>
				<div className='content w-[1200px] flex justify-between items-center rounded-[24px] border border-[rgba(119,121,137,.2)] relative max-sm:w-full max-sm:flex-col'>
					{/* Top border divider with gradient */}
					<div className='border-top bg-gradient-to-r from-[rgba(34,34,34,0.4)] via-[hsla(0,0%,100%,0.5)] to-[rgba(34,34,34,0.4)] absolute h-[1px] top-[-1px] w-full'></div>

					<strong className='text-[32px] font-[700] m-[40px] max-sm:text-[28px] max-sm:font-[900] max-sm:text-center max-sm:mt-[40px] max-sm:mx-[65px] max-sm:mb-[32px]'>
						Become WEEX's Elite Traders
					</strong>

					<button className='btn h-[48px] m-[40px] px-[80px] bg-[#e6c325] rounded-[12px] text-[16px] text-black inline-block cursor-pointer font-[700] max-sm:h-[40px] max-sm:mb-0 max-sm:mx-0 max-sm:mb-[40px]'>
						Apply
					</button>

					{/* Bottom border divider with gradient */}
					<div className='border-bottom h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-8 absolute'></div>
				</div>
			</div>

			<div className='flex justify-center pt-[120px] max-sm:mx-[16px] max-sm:pt-[54px]'>
				<div className='content w-[1200px] max-sm:w-[full]'>
					<h2 className='title text-[32px] font-[700] border-b border-[rgba(119,121,137,.15)] pb-[16px] max-sm:text-[28px]'>
						FAQ
					</h2>

					<div className='news-list mt-[32px] flex flex-col gap-[32px] mb-[48px]'>
						{faqItems.map((item, index) => (
							<div key={index} className='item'>
								<button
									onClick={() => toggleItem(index)}
									className='w-full flex justify-between items-center text-left'
								>
									<h3 className='text-white font-[500] text-[20px] max-sm:text-[16px]'>
										{item.question}
									</h3>
									<motion.div
										animate={{ rotate: activeIndex === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className='text-yellow-400 text-lg'
									>
										<svg
											width='16'
											height='16'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M6 9l6 6 6-6' />
										</svg>
									</motion.div>
								</button>

								<AnimatePresence>
									{activeIndex === index && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className='mt-[16px] text-[#8b8b8e]'
										>
											{item.answer}
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EliteTrader
