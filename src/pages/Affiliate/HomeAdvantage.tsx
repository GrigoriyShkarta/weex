import { useEffect, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

interface AdvantageItem {
	id: number
	title: string
	description: string
	imageSrc: string
}

const advantageItems: AdvantageItem[] = [
	{
		id: 1,
		title: 'Best Support Provided',
		description:
			'WEEX has distributed over 300 million USDT in commissions, empowering over 500 affiliates to earn over 50,000 USDT monthly.',
		imageSrc: 'https://www.weex.com/_nuxt/img/advantage-img1.f63c240.svg',
	},
	{
		id: 2,
		title: 'Exclusive Engagements',
		description:
			'Gain access to exclusive AMAs, publications, interviews, and galas tailored to elevate your community and boost your earnings.',
		imageSrc: 'https://www.weex.com/_nuxt/img/advantage-img2.982f18a.svg',
	},
	{
		id: 3,
		title: '24/7 Assistance and Resources Support',
		description:
			'Uncertain about your earning potential? Our dedicated account managers offer 24/7 support and resources to maximize benefits for your community.',
		imageSrc: 'https://www.weex.com/_nuxt/img/advantage-img3.031e1cf.svg',
	},
	{
		id: 4,
		title: 'Latest Market Insights',
		description:
			'Your dedicated account manager is available around the clock, and will provide high-quality feedback for improvement.',
		imageSrc: 'https://www.weex.com/_nuxt/img/advantage-img4.a7fb78d.svg',
	},
]

const HomeAdvantage = () => {
	const [activeId, setActiveId] = useState<number>(advantageItems[0].id)
	const [isMobile, setIsMobile] = useState(false)

	// Проверяем мобильное устройство при монтировании и изменении размера
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768) // 768px - типичный брейкпойнт для мобильных устройств
		}

		// Проверяем сразу при загрузке
		checkIfMobile()

		// Добавляем слушатель изменения размера
		window.addEventListener('resize', checkIfMobile)

		// Убираем слушатель при размонтировании
		return () => window.removeEventListener('resize', checkIfMobile)
	}, [])

	const handleMouseEnter = (id: number) => {
		setActiveId(id)
	}

	const handleMouseLeave = () => {
		if (!advantageItems.some(item => item.id === activeId)) {
			setActiveId(advantageItems[0].id)
		}
	}

	return (
		<div className='mod2 max-sm:px-[4.2vw]'>
			<div className='home-advantage w-[1200px] mx-auto pb-[56px] max-sm:w-full max-sm:mt-[8.5vw] max-sm:p-0'>
				<h2 className='home-advantage-title text-[40px] text-white font-[700] max-sm:text-center max-sm:text-[6.4vw]'>
					WEEX Affiliate Program Perks
				</h2>
				<h5 className='home-advantage-sub-title text-[16px] text-[#8b8b8e] mt-[16px] mb-[32px] font-[700] max-sm:text-[3.7vw] max-sm:mt-[4.2vw] max-sm:mb-[6.4vw] max-sm:text-center'>
					WEEX offers some of the best benefits in the industry to affiliates
					who are committed to promoting the growth of the crypto space.
				</h5>

				<div
					className='home-advantage-wrap flex justify-between max-sm:block'
					onMouseLeave={handleMouseLeave}
				>
					{advantageItems.map((item, index) => (
						<Fragment key={item.id}>
							<div
								className={`home-advantage-item h-[388px] bg-[#222] overflow-hidden rounded-[24px] flex transition-all duration-300 max-sm:w-full max-sm:h-auto max-sm:py-[6.4vw] max-sm:px-[4.2vw] max-sm:rounded-[6.4vw] ${
									activeId === item.id
										? 'w-[424px] py-[31px] px-[32px]'
										: 'w-[234px] py-[31px] px-[24px]'
								}`}
								onMouseEnter={() => handleMouseEnter(item.id)}
							>
								<div className='advantage-main relative w-[360px] h-full text-white flex flex-col max-sm:w-full'>
									<h3 className='h3 flex-grow-0 text-white text-[24px] font-medium mb-[16px] block max-sm:text-[4.2vw] max-sm:mb-[2.1vw]'>
										{item.title}
									</h3>

									{/* Всегда показываем описание на мобильных устройствах */}
									{(activeId === item.id || isMobile) && (
										<p className='p w-[360px] text-[16px] text-[#8b8b8e] max-sm:w-full max-sm:text-[3.7vw] max-sm:mt-[2.1vw] max-sm:mb-[4.2vw]'>
											{item.description}
										</p>
									)}

									<section className='advantage-item-footer mt-auto'>
										<img
											src={item.imageSrc}
											alt={item.title}
											className='advantage-item-img'
											loading='lazy'
										/>
									</section>
								</div>
							</div>

							{index < advantageItems.length - 1 && (
								<div
									className='wx-gap'
									style={{
										height: 0,
										width: 24,
										display: 'inline-block',
									}}
								/>
							)}
						</Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomeAdvantage
