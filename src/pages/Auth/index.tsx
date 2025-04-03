import React, { useState } from 'react'
import Login from './Login'
import RegisterPage from './Register'

const AuthPage: React.FC = () => {
	const [activePage, setActivePage] = useState('login')

	const carouselImages = [
		'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/81c05b8767e54c26aec170977c907959.png',
		'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/00ce60e542c622145fd61453f29ca316.png',
		'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/3443a27df58de43dc50e1c3f923341a0.png',
	]
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1))
	}

	// Auto-advance carousel
	React.useEffect(() => {
		const timer = setInterval(() => {
			nextSlide()
		}, 5000)
		return () => clearInterval(timer)
	}, [])

	return (
		<div className='bg-[#151515]'>
			<div className='main-body w-[1080px] mx-auto pt-[80px] flex justify-between pb-[114px] max-sm:w-full max-sm:flex-col-reverse max-sm:pt-0 max-sm:px-[4.2vw] max-sm:pb-[60px]'>
				{/* Left Part - Carousel */}
				<div className='left-part-main w-[480px] mr-[100px] max-sm:w-full'>
					<div className='container-wrap relative'>
						{/* Carousel */}
						<div className='el-carousel el-carousel--horizontal h-full overflow-hidden'>
							<div className='el-carousel__container h-[284px] relative'>
								{carouselImages.map((img, index) => (
									<div
										key={index}
										className={`el-carousel__item absolute inset-0 transition-transform duration-500 ${
											index === currentSlide
												? 'opacity-100 z-10'
												: 'opacity-0 z-0'
										}`}
										style={{
											transform: `translateX(${(index - currentSlide) * 100}%)`,
										}}
									>
										<div className='carousel-img jump h-full w-full'>
											<img
												src={img}
												alt={`Carousel ${index + 1}`}
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								))}
							</div>

							{/* Carousel Indicators */}
							<div className='absolute top-[267px] right-0 flex z-20'>
								<ul className='el-carousel__indicators flex gap-2'>
									{carouselImages.map((_, index) => (
										<li
											key={index}
											className={`el-carousel__indicator w-2 h-2 rounded-full cursor-pointer ${
												index === currentSlide ? 'bg-white' : 'bg-gray-500'
											}`}
											onClick={() => setCurrentSlide(index)}
										></li>
									))}
								</ul>
							</div>
						</div>

						{/* Separator Line */}
						<div className='seperated-line h-px bg-[#2e2e2e] w-full'></div>

						{/* Introduction Image */}
						<div className='introduce-img'>
							<img
								src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/3814be123f21f79706021e08302f15b1.png'
								alt='Introduction'
								className='img w-full'
							/>
						</div>
					</div>
				</div>

				{/* Right Part - Login Form */}
				<div className='right-part-main w-[500px] rounded-[24px] p-[32px] min-h-[610px] bg-[#222] text-white max-sm:w-full max-sm:mt-[10.6vw] max-sm:mb-[15.4vw] max-sm:bg-transparent max-sm:p-0'>
					{activePage === 'login' && <Login setActivePage={setActivePage} />}
					{activePage === 'register' && (
						<RegisterPage setActivePage={setActivePage} />
					)}
				</div>
			</div>
		</div>
	)
}

export default AuthPage
