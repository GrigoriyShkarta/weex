import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useSwipeable } from 'react-swipeable'

const banners = [
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/479ee776fa95471143b952d0ddc0c1a8.png',
		link: '/',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/583223bfcbd14fccc2e8083bca412c23.png',
		link: '/',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/4e3dd8675bc704187356f45caa62aa28.png',
		link: '.',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/b5eb702b41f14f50eeae8d7bfac96674.png',
		link: '/',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/6459f32dec24ce5e5ec8a73efe30c367.png',
		link: '/',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/f9bdc83a2069fb79841fac2f000dd7b4.png',
		link: '/',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/8ee70177bbf8a8d7bfe1c678f3b5738f.png',
		link: '/',
	},
	{
		img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/ebffc1ea2dfc716610f961968f60a74d.png',
		link: '/',
	},
]

const MultiBannerSlider = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	const handlers = useSwipeable({
		onSwipedLeft: () => scrollTo('right'),
		onSwipedRight: () => scrollTo('left'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	})

	const scrollTo = (direction: 'left' | 'right') => {
		if (containerRef.current) {
			const { scrollLeft, clientWidth } = containerRef.current
			const scrollAmount =
				direction === 'right'
					? scrollLeft + clientWidth * 0.8
					: scrollLeft - clientWidth * 0.8

			containerRef.current.scrollTo({
				left: scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	return (
		<section className='relative w-full max-w-[1200px] mt-[48px] mx-auto mb-[80px] sm:mb-[160px] px-4 sm:px-0'>
			<div
				{...handlers}
				ref={containerRef}
				className='flex overflow-x-hidden scrollbar-hide snap-x snap-mandatory gap-3 sm:gap-4 py-4'
				style={{ scrollSnapType: 'x mandatory' }}
			>
				{banners.map((banner, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.05 }}
						className='flex-shrink-0 w-[259px] h-[134px] sm:w-[280px] sm:h-[150px] snap-start'
					>
						<a
							href={banner.link}
							target='_blank'
							rel='noopener noreferrer'
							className='block rounded-[18px] sm:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300'
						>
							<img
								src={banner.img}
								alt={`Banner ${index + 1}`}
								className='w-full h-full object-cover'
								loading='lazy'
							/>
						</a>
					</motion.div>
				))}
			</div>

			{/* Кнопки навигации - скрыты на мобилках */}
			<button
				onClick={() => scrollTo('left')}
				className='hidden sm:flex absolute w-[32px] h-[32px] justify-center items-center left-[5px] top-[60%] -translate-y-1/2 z-10 bg-black/50 text-white rounded-[2px] hover:bg-black/70 transition-colors'
				style={{ transform: 'translateY(-50%)' }}
			>
				<svg
					className='w-5 h-5'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 19l-7-7 7-7'
					/>
				</svg>
			</button>
			<button
				onClick={() => scrollTo('right')}
				className='hidden sm:flex absolute justify-center items-center w-[32px] h-[32px] right-[5px] top-[60%] -translate-y-1/2 z-10 bg-black/50 text-white rounded-[2px] hover:bg-black/70 transition-colors'
				style={{ transform: 'translateY(-50%)' }}
			>
				<svg
					className='w-5 h-5'
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
			</button>
		</section>
	)
}

export default MultiBannerSlider
