import React, { useEffect, useState } from 'react'
import VideoModal from '../../components/VideoModal'
import useMobileDetection from '../../utils/useMobileDetection'

const AmbassadorPage: React.FC = () => {
	const [showModal, setShowModal] = useState(false)
	const isMobile = useMobileDetection()

	useEffect(() => {
		if (isMobile) {
			const handleScroll = () => {
				const parallaxSections = document.querySelectorAll('.parallax-section')

				parallaxSections.forEach(section => {
					const scrollPosition = window.pageYOffset
					const sectionPosition = section.getBoundingClientRect().top
					const speed = section.getAttribute('data-speed') || '0.3'

					;(section as HTMLElement).style.backgroundPositionY = `${
						-(scrollPosition - sectionPosition) * parseFloat(speed)
					}px`
				})
			}

			window.addEventListener('scroll', handleScroll)
			return () => window.removeEventListener('scroll', handleScroll)
		}
	}, [isMobile])

	const sections = [
		{
			id: 1,
			bgDesktop:
				'https://www.weex.com/_nuxt/img/ambassador-landing_1.491081e.webp',
			bgMobile: '/_nuxt/img/ambassador-landing-mobile_1.c1248b1.webp',
			showPlayButton: true,
			content: (
				<div className='h-[100vh] flex items-center flex-col justify-center text-center max-w-[90%] mx-auto max-sm:justify-end'>
					<img
						src='https://www.weex.com/_nuxt/img/play.edb66bf.png'
						className='block-image-play mb-8 max-sm:h-[80px] max-sm:w-[80px] cursor-pointer'
						onClick={() => setShowModal(true)}
					/>
					<h1 className='text-white font-[700] text-[64px] max-sm:text-[32px]'>
						Michael Owen
					</h1>
					<h1 className='text-white font-[700] text-[64px] max-sm:text-[32px]'>
						Global Brand Ambassador of WEEX
					</h1>
				</div>
			),
			primary: true,
			height: 'height-without-header',
			parallax: !isMobile,
			speed: 0.3,
		},
		{
			id: 2,
			bgDesktop:
				'https://www.weex.com/_nuxt/img/ambassador-landing_2.31b4695.webp',
			bgMobile: '/_nuxt/img/ambassador-landing-mobile_2.7594878.webp',
			showPlayButton: false,
			content: (
				<div className='h-[100vh] flex items-center flex-col justify-center text-center max-w-[90%] mx-auto'>
					<h1 className='text-white font-[700] text-[64px] max-sm:text-[32px]'>
						Step by Step, To Greatness
					</h1>
					<p className='mt-[30px'>
						In football, success hinges on making precise moves at the right
						moment. It requires a combination of speed, accuracy, and a strong
						game plan.
					</p>
					<p className='mb-[30px]'>
						{' '}
						That's why a partnership between Michael Owen and WEEX has been
						established—each decision propels WEEX × Michael Owen towards
						victory.
					</p>
				</div>
			),
			primary: true,
			parallax: !isMobile,
			speed: 0.2,
		},
		{
			id: 3,
			bgDesktop:
				'https://www.weex.com/_nuxt/img/ambassador-landing_3.19aacd9.webp',
			bgMobile: '/_nuxt/img/ambassador-landing-mobile_3.6d6dab3.webp',
			showPlayButton: false,
			content: (
				<div className='h-[100vh] flex items-center flex-col justify-center text-center max-w-[90%] mx-auto'>
					<h1 className='text-white font-[700] text-[64px] max-sm:text-[32px]'>
						Endurance Pays Off
					</h1>
					<p className='mt-[30px'>
						"WEEX understands that every decision counts, just like on the
						pitch. That's why WEEX has built a platform that's fast, secure, and
					</p>
					<p className='mb-[30px]'>
						{' '}
						designed to give you an edge in the crypto world." —Michael Owen
					</p>
				</div>
			),
			primary: true,
			parallax: !isMobile,
			speed: 0.1,
		},
		{
			id: 4,
			bgDesktop: '',
			bgMobile: '',
			showPlayButton: false,
			content: (
				<div className='h-[80vh] mx-auto bg-[#222] flex items-center text-white'>
					<div
						className='flex items-center justify-center max-w-[90%] mx-auto max-sm:flex-col-reverse max-sm:py-[10px]'
						style={{
							paddingLeft: 'calc(20px + 1rem)',
							paddingRight: 'calc(20px + 1rem)',
						}}
					>
						<div className='flex flex-col w-[666px] max-sm:w-full'>
							<h2 className='block-title font-[700] text-[40px] max-sm:text-[24px]'>
								From Novice to Expert
							</h2>
							<p className='block-description my-[30px] text-[16px] max-sm:my-[24px] max-sm:text-[14px]'>
								With over 1,000 trading pairs available for spot trading,
								futures trading, and more, WEEX is equipped to assist in a
								variety of trading environments.
								<p className='space h-4'></p>
								From the advanced Copy Trading Pro tool to the comforting safety
								net of a 1,000 BTC Protection Fund, you can trust WEEX to be
								your reliable partner in this ever-changing market.
							</p>
						</div>
						<img
							src='https://www.weex.com/_nuxt/img/ambassador-side_4.fde5780.webp'
							alt='i'
							className='w-[300px] h-[300px]  max-sm:w-[160px] max-sm:h-[160px]'
						/>
					</div>
				</div>
			),
			dark: true,
			layout: 'right',
		},
		{
			id: 5,
			bgDesktop: '',
			bgMobile: '',
			imageDesktop: '/_nuxt/img/ambassador-side_5.989c0e9.webp',
			imageMobile: '/_nuxt/img/ambassador-side-mobile_5.39b071b.webp',
			showPlayButton: false,
			content: (
				<div className='h-[80vh] mx-auto bg-[#151515] flex items-center text-white'>
					<div
						className='flex items-center justify-center max-w-[90%] mx-auto max-sm:flex-col max-sm:py-[10px]'
						style={{
							paddingLeft: 'calc(20px + 1rem)',
							paddingRight: 'calc(20px + 1rem)',
						}}
					>
						<img
							src='https://www.weex.com/_nuxt/img/ambassador-side_5.989c0e9.webp'
							alt='i'
							className='w-[300px] h-[300px]  max-sm:w-[160px] max-sm:h-[160px]'
						/>
						<div className='flex flex-col w-[666px] max-sm:w-full'>
							<h2 className='block-title font-[700] text-[40px] max-sm:text-[24px]'>
								Mastering the Markets
							</h2>
							<p className='block-description my-[30px] text-[16px] max-sm:my-[24px] max-sm:text-[14px]'>
								In the realm of online trading, and in football, timing and
								precision reign supreme. Through WEEX's unparalleled liquidity
								and rapid execution, you'll be able to command the game with
								authority and finesse.
							</p>
						</div>
					</div>
				</div>
			),
			darken: true,
			layout: 'left',
		},
		{
			id: 6,
			bgDesktop: '',
			bgMobile: '',
			imageDesktop: '/_nuxt/img/ambassador-side_6.e152e37.webp',
			imageMobile: '/_nuxt/img/ambassador-side-mobile_6.687072c.webp',
			showPlayButton: false,
			content: (
				<div className='h-[80vh] mx-auto bg-[#222] flex items-center text-white'>
					<div
						className='flex items-center justify-center max-w-[90%] mx-auto max-sm:flex-col-reverse max-sm:py-[10px]'
						style={{
							paddingLeft: 'calc(20px + 1rem)',
							paddingRight: 'calc(20px + 1rem)',
						}}
					>
						<div className='flex flex-col w-[666px] max-sm:w-full'>
							<h2 className='block-title font-[700] text-[40px] max-sm:text-[24px]'>
								Success With WEEX
							</h2>
							<p className='block-description my-[30px] text-[16px]'>
								Success doesn't happen by chance. It's about making wise choices
								with a trusted team. And I trust WEEX.
								<p className='space h-4'></p>
								Win with WEEX today—where wealth, precision, speed, and security
								converge.
							</p>
							<button className='bg-[#e6c325] rounded-[16px] text-black cursor-pointer block text-[18px] font-medium max-h-[56px] leading-[24px] text-center w-[360px] py-[16px] max-sm:w-full max-sm:py-[10px]'>
								Sign Up Now
							</button>
						</div>
						<img
							src='https://www.weex.com/_nuxt/img/ambassador-side_6.e152e37.webp'
							alt='i'
							className='w-[300px] h-[300px] max-sm:w-[160px] max-sm:h-[160px]'
						/>
					</div>
				</div>
			),
			dark: true,
			layout: 'right',
		},
	]

	return (
		<div className='main-box lay-box clearfix overflow-hidden text-white'>
			<div className='ambassador-page parallax'>
				{sections.map(section => (
					<div
						key={section.id}
						className={`block ${section.primary ? 'primary' : ''} ${
							section.dark ? 'dark' : ''
						} ${section.darken ? 'darken' : ''}`}
					>
						<div
							className={`block-content layer ${
								section.parallax ? 'parallax-section' : ''
							}`}
							style={{
								backgroundImage: section.bgDesktop
									? `url("${section.bgDesktop}")`
									: '',
								backgroundPosition: 'center 0px',
								backgroundAttachment: section.parallax ? 'fixed' : 'scroll',
								backgroundSize: 'cover',
								...(section.parallax && {
									'data-speed': section.speed,
									height: '100vh',
								}),
							}}
						>
							{/* Desktop Layout */}
							<div className='desktop-layout hidden md:block'>
								{section.bgDesktop ? (
									<div
										id={`block-text-desktop-${section.id}`}
										className={`block-text ${
											section.layout === 'right'
												? 'text-right'
												: section.layout === 'left'
												? 'text-left'
												: 'text-center'
										}`}
									>
										<div className='flex flex-col items-center justify-center h-full'>
											{section.content}
										</div>
									</div>
								) : (
									<div
										id={`block-text-desktop-${section.id}`}
										className={`block-text ${section.layout}`}
									>
										<div
											className={`flex-container ${
												section.layout === 'right' ? 'flex-row-reverse' : ''
											} items-center gap-16`}
										>
											<div className='flex-content flex-1'>
												{section.content}
											</div>
										</div>
									</div>
								)}
							</div>

							{/* Mobile Layout */}
							<div className='mobile-layout md:hidden'>
								{section.bgMobile ? (
									<>
										<div
											id={`block-text-mobile-${section.id}`}
											className='block-text p-6 text-center'
										>
											<div className='flex flex-col items-center justify-center'>
												{section.content}
											</div>
										</div>
									</>
								) : (
									<div
										id={`block-text-mobile-${section.id}`}
										className={`block-text ${section.layout}`}
									>
										<div className='flex-container flex-col'>
											<div className='flex-content center text-center'>
												{React.cloneElement(
													section.content as React.ReactElement<any>,
													{
														...((section.content as React.ReactElement<any>)
															.props || {}),
														className: `${
															(section.content as React.ReactElement<any>).props
																?.className || ''
														} text-center`,
													}
												)}
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			{showModal && (
				<VideoModal
					onClose={() => setShowModal(false)}
					videoSrc='https://wxfzx4.info/spokesperson/owen/owen-en-1080P.mp4'
					posterSrc='https://www.weex.com/_nuxt/img/video_mask.1b17029.png'
				/>
			)}
		</div>
	)
}

export default AmbassadorPage
