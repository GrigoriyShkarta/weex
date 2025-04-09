import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'

// import './styles.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

type Slide = {
	id: number
	imageUrl: string
	title?: string
	description?: string
	buttonText?: string
	linkUrl: string
}

type WelcomeModalProps = {
	onClose?: () => void
}

const WelcomeModal = ({ onClose }: WelcomeModalProps) => {
	const [isOpen, setIsOpen] = useState(true)
	const [dontRemind, setDontRemind] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	// Массив слайдов
	const slides: Slide[] = [
		{
			id: 1,
			imageUrl:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/floatingWindow/a5c0ac1d213149d85ceae67246dc8fca.png',
			title: 'Welcome Offer',
			description: 'Special promotion for new users',
			buttonText: 'Learn More',
			linkUrl: '/promotion',
		},
		{
			id: 2,
			imageUrl: 'https://example.com/promo2.jpg',
			title: 'Bonus Deposit',
			description: 'Get 100% bonus on your first deposit',
			buttonText: 'Claim Now',
			linkUrl: '/deposit-bonus',
		},
		{
			id: 3,
			imageUrl: 'https://example.com/promo3.jpg',
			title: 'VIP Program',
			description: 'Join our exclusive VIP club',
			buttonText: 'Discover Benefits',
			linkUrl: '/vip',
		},
	]

	useEffect(() => {
		const dontRemindUntil = localStorage.getItem('dontRemindUntil')
		if (dontRemindUntil && new Date().getTime() < Number(dontRemindUntil)) {
			setIsOpen(false)
			onClose?.()
		}
	}, [onClose])

	const handleClose = () => {
		if (dontRemind) {
			const dontRemindUntil = new Date().getTime() + 24 * 60 * 60 * 1000
			localStorage.setItem('dontRemindUntil', dontRemindUntil.toString())
		}
		setIsOpen(false)
		onClose?.()
	}

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(0,0,0,.7)] bg-opacity-50 X'>
			<div className='bg-[#0f1115] rounded-[16px] p-[16px] mb-[16px] '>
				<div className='relative bg-black rounded-lg max-w-[90%] md:max-w-2xl overflow-hidden w-[50vw] h-[50vh]'>
					{/* Close button */}
					<button
						onClick={handleClose}
						className='absolute top-4 right-4 z-10 text-white hover:text-yellow-400 cursor-pointer'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>

					{/* Carousel content */}
					<>
						<Swiper
							style={{
								'--swiper-navigation-color': '#fff',
								'--swiper-pagination-color': '#fff',
							}}
							spaceBetween={10}
							navigation={true}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[FreeMode, Navigation, Thumbs]}
							className='mySwiper2 h-[79%] gap-[10px]'
						>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-4.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-5.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-6.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-9.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-10.jpg' />
							</SwiperSlide>
						</Swiper>
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							className='mySwiper h-[19%] mt-[2%] cursor-pointer'
						>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-4.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-5.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-6.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-9.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='https://swiperjs.com/demos/images/nature-10.jpg' />
							</SwiperSlide>
						</Swiper>
					</>

					{/* Action button */}
					<div className='p-4 text-center bg-[#0f1115]'>
						<button
							onClick={() => {
								window.location.href = slides[currentSlide].linkUrl
							}}
							className='bg-[#ffe82d] hover:bg-[#ffed57] text-black font-[500] py-3 px-6 rounded-[16px] cursor-pointer transition-colors duration-200 w-[200px] h-[48px]'
						>
							{slides[currentSlide].buttonText || 'Learn More'}
						</button>
					</div>
				</div>
			</div>

			<section className='flex items-center p-4 rounded-[16px]'>
				<button
					onClick={() => setDontRemind(!dontRemind)}
					className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
						dontRemind
							? 'bg-[#ffe82d] border-[#ffe82d]'
							: 'bg-transparent border-gray-400'
					}`}
				>
					{dontRemind && (
						<svg
							className='w-3 h-3 text-black'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				</button>

				<div className='w-2'></div>

				<span
					className='text-sm text-white cursor-pointer select-none'
					onClick={() => setDontRemind(!dontRemind)}
				>
					Don't remind me again today
				</span>
			</section>
		</div>
	)
}

export default WelcomeModal
