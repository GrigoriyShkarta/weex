import { useEffect, useState } from 'react'
import TradersComponents from './tradersComponents'
import Guide from './Guide'
import FAQ from './FAQ'

interface CarouselItem {
	title: string
	subtitle: string
	step: string
	imageUrl: string
}

const CopyTradingPro = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)

	const items: CarouselItem[] = [
		{
			title: 'Become an Elite Trader Today!',
			subtitle: 'Master the Markets, Lead the Pack',
			step: '1/2',
			imageUrl:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/copyTradingProBanner/0f18bb3ca946023914b50e3a59aab22e.png',
		},
		{
			title: 'Copy Now! Ride the Wave',
			subtitle: 'Earn Daily Bonusess with Easy',
			step: '2/2',
			imageUrl:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/copyTradingProBanner/685d5b0a91a4efd32de9bd1e54d22d56.png',
		},
	]

	useEffect(() => {
		if (isPaused) return

		const interval = setInterval(() => {
			goToNext()
		}, 5000) // Change slide every 5 seconds

		return () => clearInterval(interval)
	}, [currentIndex, isPaused])

	const goToNext = () => {
		const isLastItem = currentIndex === items.length - 1
		const newIndex = isLastItem ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className='bg-[#151515] text-white'>
			<div className='flex justify-center py-[80px] bg-[#222] max-sm:py-[20px]'>
				<div className='w-[1200px] flex justify-between max-sm:w-full max-sm:flex-col max-sm:px-[4.2vw]'>
					<div className='w-[500px] max-sm:w-full'>
						<h1 className='text-[48px] font-[700]'>Copy Trading Pro</h1>
						<p className='text-[20px] mt-[16px]'>
							Copy expert strategies and capture market signals
						</p>
						<div className='mt-[32px]'>
							<div className='mr-[16px] float-left'>
								<img
									src='https://www.weex.com/_trade/img/avatar-default.5cde17d.jpg'
									alt='user'
									className='w-[40px] h-[40px] rounded-[24px]'
								/>
							</div>
							<div className='text-[14px] flow-root'>
								<div className='py-[10px] pr-[30px]'>
									<div className='flex'>
										<span className='cursor-pointer'>Log In</span>
										<img
											src='https://www.weex.com/_trade/img/icon_eye_close_black.1d2a3bc.svg'
											alt='eye'
											className='w-[20px] h-[20px] ml-[4px]'
										/>
									</div>
								</div>
								<div className='ml-[-56px] mt-[24px] flex justify-between'>
									<div>
										<div className='font-[700] text-[24px]'>***</div>
										<div className='mt-[8px] text-[#8b8b8e]'>
											Margin used in copy trades (USDT)
										</div>
									</div>
									<div>
										<div className='font-[700] text-[24px]'>***</div>
										<div className='mt-[8px] text-[#8b8b8e]'>
											Copy trading net profit (USDT)
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='flex items-center justify-end cursor-pointer max-sm:mt-[12px]'>
							<img
								src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAxMy43NUw5LjU4MzMzIDE1LjgzMzNMMTIuOTE2NyAxMi41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNzgzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI5Ljk5OTkyIiBjeT0iNC4xNjY2NyIgcj0iMy4yNzUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS43ODMzMyIvPgo8cGF0aCBkPSJNMS43MjQ5MiAxNi4yNzE1QzEuNzI0OTIgMTIuMzc5OSA0Ljg3OTczIDkuMjI1MDQgOC43NzE0IDkuMjI1MDRIMTEuMjI4NEMxNS4xMjAxIDkuMjI1MDQgMTguMjc0OSAxMi4zNzk5IDE4LjI3NDkgMTYuMjcxNUMxOC4yNzQ5IDE3LjgzODMgMTcuMDA0OCAxOS4xMDg0IDE1LjQzODEgMTkuMTA4NEg0LjU2MTc4QzIuOTk1MDIgMTkuMTA4NCAxLjcyNDkyIDE3LjgzODMgMS43MjQ5MiAxNi4yNzE1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc4MzMzIi8+Cjwvc3ZnPgo='
								alt='img'
								className='w-[16px] h-[16px] mr-[8px] '
							/>
							<a
								href='/copy-trading/elite-trader'
								className='text-white hover:text-[#f8c71b]'
							>
								Become an Elite Trader
							</a>
							<span className='mx-[16px]'>|</span>
							<img
								src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDAwMjQgMi40MTg4OEg2LjIxMDc2QzguMzAzNjMgMi40MTg4OCAxMC4wMDAyIDQuMTE1NDcgMTAuMDAwMiA2LjIwODM1VjE4Ljk5NzhDMTAuMDAwMiAxNy40MjgxIDguNzI3NzcgMTYuMTU1NyA3LjE1ODEyIDE2LjE1NTdIMS4wMDAyNFYyLjQxODg4WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjg5NDczIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOS4wMDAyIDIuNDE4ODhIMTMuNzg5N0MxMS42OTY4IDIuNDE4ODggMTAuMDAwMiA0LjExNTQ3IDEwLjAwMDIgNi4yMDgzNVYxOC45OTc4QzEwLjAwMDIgMTcuNDI4MSAxMS4yNzI3IDE2LjE1NTcgMTIuODQyMyAxNi4xNTU3SDE5LjAwMDJWMi40MTg4OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS44OTQ3MyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
								alt=''
								className='ico w-[16px] h-[16px] mr-[8px]'
							/>
							<span className='hover:text-[#f8c71b]'>Tuturial</span>
						</div>

						<div
							className='w-[371px] h-[167px] rounded-[24px] bg-[#333] flex justify-between py-[24px] px-[24px] mt-[8px]'
							onMouseEnter={() => setIsPaused(true)}
							onMouseLeave={() => setIsPaused(false)}
						>
							<div className='relative flex'>
								{/* Carousel items */}
								{items.map((item, index) => (
									<div
										key={index}
										className={`absolute inset-0 flex transition-opacity duration-500 ${
											index === currentIndex
												? 'opacity-100'
												: 'opacity-0 pointer-events-none'
										}`}
									>
										<div className='flex w-[322px]'>
											<div className='flex flex-col w-[223px]'>
												<div className='font-medium text-[12px] text-[#8b8b8e] mt-[10px]'>
													{item.title}
												</div>
												<div className='text-[18px] mt-[12px] font-bold'>
													{item.subtitle}
												</div>
												<div className='flex items-center mt-[12px]'>
													<span>{item.step}</span>
												</div>
											</div>
											<div className='w-[100px] h-[140px]'>
												<img
													src={item.imageUrl}
													alt=''
													className='w-[100px] h-auto'
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<TradersComponents />
			<Guide />
			<FAQ />
		</div>
	)
}

export default CopyTradingPro
