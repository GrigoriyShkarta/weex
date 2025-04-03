import { useEffect, useState } from 'react'
import Card from '../../components/Card'

const Carousel = ({ title, cardCount }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isMobile, setIsMobile] = useState(false)

	// Check if mobile on mount and resize
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		checkIfMobile()
		window.addEventListener('resize', checkIfMobile)
		return () => window.removeEventListener('resize', checkIfMobile)
	}, [])

	// Calculate offset based on card width (296px = card + gap)
	const offset = -currentIndex * 296

	const handlePrev = () => {
		setCurrentIndex(prev => Math.max(prev - 1, 0))
	}

	const handleNext = () => {
		setCurrentIndex(prev => Math.min(prev + 1, cardCount - (isMobile ? 1 : 4)))
	}

	return (
		<div className='mb-8'>
			<div className='flex justify-between items-center mb-4'>
				<span className='text-[32px] font-medium max-sm:text-[20px]'>
					{title}
				</span>
				<div className='h-[30px] rounded-[20px] text-center px-[16px] border border-[hsla(0,0%,100%,.08)] text-[#d1d1d2] cursor-pointer'>
					More
				</div>
			</div>

			<div className='relative w-full max-w-[1200px] overflow-hidden mx-auto'>
				<div
					className='flex transition-transform duration-300 gap-4 pl-4'
					style={{ transform: `translateX(${offset}px)` }}
				>
					{[...Array(cardCount)].map((_, index) => (
						<div
							key={index}
							className={`${isMobile ? 'w-full' : 'w-[288px]'} flex-shrink-0`}
						>
							<Card
								withoutBg
								fatCard
								className='hover:scale-105 transition-transform duration-300'
							/>
						</div>
					))}
				</div>

				{/* Navigation arrows - only show if not mobile and there are cards to navigate */}
				{!isMobile && currentIndex > 0 && (
					<button
						onClick={handlePrev}
						className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer bg-[hsla(0,0%,100%,.08)] hover:bg-[hsla(0,0%,100%,.15)] transition-colors'
					>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDMzIDEpIiBzdHJva2U9IiM4QjhCOEUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMi42MTggMTEuMTFsNi4yODcgNi4yODctNi4zNyA2LjM3aC4wMDJhMS4yIDEuMiAwIDAwMS42OTYgMS42OTZoMGw3LjItNy4yaDBjLjIyNi0uMjE4LjM2Ny0uNTI0LjM2Ny0uODYzdi0uMDAzLS4wMDJjMC0uMzQtLjE0MS0uNjQ2LS4zNjgtLjg2NGguMDAxbC03LjItNy4yLS4wMDMuMDAyYTEuMiAxLjIgMCAxMC0xLjYxMiAxLjc3N3oiIGZpbGw9IiM4QjhCOEUiIHN0cm9rZT0iIzhCOEI4RSIgc3Ryb2tlLXdpZHRoPSIuOCIvPjwvc3ZnPg=='
							alt='Previous'
							className='transform rotate-180 w-4 h-4'
						/>
					</button>
				)}

				{!isMobile && currentIndex < cardCount - 4 && (
					<button
						onClick={handleNext}
						className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer bg-[hsla(0,0%,100%,.08)] hover:bg-[hsla(0,0%,100%,.15)] transition-colors'
					>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDMzIDEpIiBzdHJva2U9IiM4QjhCOEUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMi42MTggMTEuMTFsNi4yODcgNi4yODctNi4zNyA2LjM3aC4wMDJhMS4yIDEuMiAwIDAwMS42OTYgMS42OTZoMGw3LjItNy4yaDBjLjIyNi0uMjE4LjM2Ny0uNTI0LjM2Ny0uODYzdi0uMDAzLS4wMDJjMC0uMzQtLjE0MS0uNjQ2LS4zNjgtLjg2NGguMDAxbC03LjItNy4yLS4wMDMuMDAyYTEuMiAxLjIgMCAxMC0xLjYxMiAxLjc3N3oiIGZpbGw9IiM4QjhCOEUiIHN0cm9rZT0iIzhCOEI4RSIgc3Ryb2tlLXdpZHRoPSIuOCIvPjwvc3ZnPg=='
							alt='Next'
							className='w-4 h-4'
						/>
					</button>
				)}
			</div>
		</div>
	)
}

const Top = () => {
	return (
		<div className='mt-[65px] pb-[20px]'>
			<Carousel title='Highest total PnL (3W)' cardCount={5} />
			<Carousel title='Highest total PnL (1W)' cardCount={5} />
			<Carousel title='Highest win rate (3W)' cardCount={5} />
		</div>
	)
}

export default Top
