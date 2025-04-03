import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import RoadMap from './components/RoadMap'

const AboutUsPage: React.FC = () => {
	const teamMembers = [
		{
			name: 'Peter',
			role: 'CEO of WEEX Exchange',
			description:
				"Responsible for leading the company's overall strategy and operations.",
			image: 'https://www.weex.com/_nuxt/img/peter.3162e11.png',
		},
		{
			name: 'WEEX Technical Team',
			role: '',
			description:
				"Our professional tech experts are dedicated to developing and maintaining WEEX's tech platform, ensuring the security and efficiency of transactions.",
			image: 'https://www.weex.com/_nuxt/img/weex.df7d3f7.png',
		},
	]

	const jobs = [
		{
			title: 'WEEX-Listing BD',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/28433363075097',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/7d0b9d3a5d4384f343b3283dd336cab0.png',
		},
		{
			title: 'WEEX-Backend Engineer（Java）',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/10004306059801',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/3e88242d81291ab2d8ada2d03d9d8172.png',
		},
		{
			title: 'Business Development Executive (English-speaking Countries)',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/28432680545817',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/67998409ebebf2070905ebac150a0975.png',
		},
		{
			title: 'WEEX-Product Manager',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/28417061834777',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/721c9f9947849646d0f33337016008ae.png',
		},
		{
			title: 'WEEX-Risk Control Analyst',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/28430241096345',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/12e67f27f5a5745a9d2a477926ebea4b.png',
		},
		{
			title: 'WEEX-Front-end Development Engineer（Web）',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/10004027549209',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/df2627837070d0bb869c1ad3468d5ab4.png',
		},
		{
			title: 'WEEX-DevOps Engineer',
			link: 'https://weexsupport.zendesk.com/hc/en-us/articles/17623564035225',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/1bcf7a9557f42f7b48c2f0a3f2baa230.png',
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState('right')

	useEffect(() => {
		const interval = setInterval(() => {
			setDirection('right')
			setCurrentIndex(prev => (prev + 1) % teamMembers.length)
		}, 5000) // Автопереключение каждые 5 секунд

		return () => clearInterval(interval)
	}, [teamMembers.length])

	const variants = {
		enter: (direction: string) => ({
			x: direction === 'right' ? 300 : -300,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: string) => ({
			x: direction === 'right' ? -300 : 300,
			opacity: 0,
		}),
	}

	const swipeConfidenceThreshold = 10000
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity
	}

	return (
		<div className='bg-[#0f1115] text-white w-[1200px] mx-auto max-sm:w-full max-sm:p-[4.2vw]'>
			<div className='pt-[65px] flex h-[420px] items-center mb-[56px] justify-between max-sm:flex-col-reverse max-sm:h-auto max-sm:pt-[65px] max-sm:items-center max-sm:text-center'>
				<div className='w-[600px] max-sm:w-full max-sm:pt-[10.8vw]'>
					<h1 className='font-[700] text-[48px] mb-[16px] max-sm:text-[8.5vw]'>
						Trade with Ease, Trade with WEEX
					</h1>
					<p className='text-[20px] max-sm:text-[3.7vw]'>
						Enter the exciting world of crypto trading with our industry-leading
						platform.
					</p>
					<a
						href='mailto:hr@weex.com'
						className='mt-20 inline-block px-10 h-12 leading-[48px] text-center bg-[#ffe82d] rounded-xl text-lg font-medium text-black max-sm:w-full'
					>
						Contact Us
					</a>
				</div>

				<img
					src='	https://www.weex.com/_nuxt/img/new_top_bg1_black_en_v1.e67dbc5.png'
					alt='Trade with Ease, Trade with WEEX'
					className='w-[520px] h-auto max-sm:w-[85.6vw]'
				/>
			</div>

			{/* Why WEEX Section */}
			<div>
				<h2 className='mb-[61px] text-[40px] font-[500] max-sm:text-[6.4vw] max-sm:mb-[8.5vw]'>
					Why WEEX?
				</h2>

				<div className='flex justify-between max-sm:flex-col'>
					<div className='flex flex-wrap gap-[24px] w-[828px] max-sm:gap-[4.2vw] max-sm:w-full'>
						<div className='rounded-[16px] py-[40px] px-[24px] bg-[rgba(119,121,137,.05)] w-[402px] max-sm:w-full max-sm:flex max-sm:items-center max-sm:py-[8.5vw] max-sm:px-[4.2vw] max-sm:rounded-[6.4vw] max-sm:gap-[4.2vw]'>
							<img
								src='https://www.weex.com/_nuxt/img/weex1.5b447fd.png'
								alt='1,000 BTC Protection Fund'
								className='w-[48px]'
							/>
							<div>
								<h3 className='mt-[24px] text-[24px] font-[500] max-sm:mt-0 max-sm:text-[4.8vw]'>
									1,000 BTC Protection Fund
								</h3>
								<p className='text-[14px] mt-[8px] text-[#777989] max-sm:text-[4.8vw] max-sm:mt-[3.7vw]'>
									The safety of your assets is guaranteed.
								</p>
							</div>
						</div>

						<div className='rounded-[16px] py-[40px] px-[24px] bg-[rgba(119,121,137,.05)] w-[402px] max-sm:w-full max-sm:flex max-sm:items-center max-sm:py-[8.5vw] max-sm:px-[4.2vw] max-sm:rounded-[6.4vw] max-sm:gap-[4.2vw]'>
							<img
								src='	https://www.weex.com/_nuxt/img/weex2.5c5ddd2.png'
								alt='Industry-Leading Performance'
								className='w-[48px]'
							/>
							<div>
								<h3 className='mt-[24px] text-[24px] font-[500] max-sm:mt-0 max-sm:text-[4.8vw]'>
									Industry-Leading Performance
								</h3>
								<p className='text-[14px] mt-[8px] text-[#777989] max-sm:text-[4.8vw] max-sm:mt-[3.7vw]'>
									Up to 450,000 transactions per second.
								</p>
							</div>
						</div>

						<div className='rounded-[16px] py-[40px] px-[24px] bg-[rgba(119,121,137,.05)] w-[402px] max-sm:w-full max-sm:flex max-sm:items-center max-sm:py-[8.5vw] max-sm:px-[4.2vw] max-sm:rounded-[6.4vw] max-sm:gap-[4.2vw]'>
							<img
								src='https://www.weex.com/_nuxt/img/weex3.87bd766.png'
								alt='High Liquidity'
								className='w-[48px]'
							/>
							<div>
								<h3 className='mt-[24px] text-[24px] font-[500] max-sm:mt-0 max-sm:text-[4.8vw]'>
									High Liquidity
								</h3>
								<p className='text-[14px] mt-[8px] text-[#777989] max-sm:text-[4.8vw] max-sm:mt-[3.7vw]'>
									Average daily trading volume of 8.71 billion (CMC).
								</p>
							</div>
						</div>

						<div className='rounded-[16px] py-[40px] px-[24px] bg-[rgba(119,121,137,.05)] w-[402px]'>
							<img
								src='	https://www.weex.com/_nuxt/img/weex4.81aba70.png'
								alt='Available Worldwide'
								className='w-[48px]'
							/>
							<div>
								<h3 className='mt-[24px] text-[24px] font-[500]'>
									Available Worldwide
								</h3>
								<p className='text-[14px] mt-[8px] text-[#777989]'>
									Obtained regulatory licenses
								</p>
							</div>
						</div>
					</div>

					<div className='ml-[32px] w-[340px] relative overflow-hidden max-sm:w-full max-sm:h-[494px] max-sm:ml-0 max-sm:mt-[4.2vw]'>
						<AnimatePresence initial={false} custom={direction}>
							<motion.div
								key={currentIndex}
								custom={direction}
								variants={variants}
								initial='enter'
								animate='center'
								exit='exit'
								transition={{
									x: { type: 'spring', stiffness: 300, damping: 30 },
									opacity: { duration: 0.2 },
								}}
								drag='x'
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={1}
								onDragEnd={({ offset, velocity }: any) => {
									const swipe = swipePower(offset.x, velocity.x)

									if (swipe < -swipeConfidenceThreshold) {
										setDirection('right')
										setCurrentIndex(prev => (prev + 1) % teamMembers.length)
									} else if (swipe > swipeConfidenceThreshold) {
										setDirection('left')
										setCurrentIndex(
											prev =>
												(prev - 1 + teamMembers.length) % teamMembers.length
										)
									}
								}}
								className='absolute w-full h-full'
							>
								<div className='flex flex-col items-start p-6 h-full py-[40px] px-[24px] bg-[rgba(119,121,137,.05)] rounded-[16px] max-sm:w-full max-sm:h-[494px]'>
									<img
										src={teamMembers[currentIndex].image}
										alt={teamMembers[currentIndex].name}
										className='w-32 h-32 rounded-full object-cover mb-4'
									/>
									<h3 className='mt-[32px] text-[30px] font-[700]'>
										{teamMembers[currentIndex].name}
									</h3>
									{teamMembers[currentIndex].role && (
										<p className='mt-[8px] text-[16px] font-[500]'>
											{teamMembers[currentIndex].role}
										</p>
									)}
									<p className='mt-[16px] text-[14px] text-[#777989]'>
										{teamMembers[currentIndex].description}
									</p>
								</div>
							</motion.div>
						</AnimatePresence>

						<div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
							{teamMembers.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setDirection(index > currentIndex ? 'right' : 'left')
										setCurrentIndex(index)
									}}
									className={`w-3 h-3 rounded-full transition-colors ${
										index === currentIndex ? 'bg-[#F8C71B]' : 'bg-gray-600'
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<RoadMap />

			{/* Mission Statement */}
			<div className='mt-[83px] flex items-center h-[346px] max-sm:h-auto'>
				<div className='container mx-auto flex justify-between items-center max-sm:flex-col-reverse max-sm:items-center max-sm:text-center'>
					<div className='md:w-1/2 md:pl-12'>
						<p className='text-[24px] font-[500] max-sm:text-[6.4vw]'>
							We are dedicated to establishing a mutually beneficial
							relationship with our users and providing the safest and most
							user-friendly crypto trading experience.
						</p>
						<a
							href='/futures/BTC-USDT'
							className='mt-20 inline-block px-10 h-12 leading-[48px] text-center bg-[#ffe82d] rounded-xl text-lg font-medium text-black max-sm:w-full'
						>
							Trade Now
						</a>
					</div>

					<img
						src='https://www.weex.com/_nuxt/img/img_guanyuwomen_black.2009bf3.png'
						alt='WEEX Mission'
						className='w-[480px] h-auto rounded-lg'
					/>
				</div>
			</div>

			{/* Jobs Section */}
			<div className='mt-[100px] max-sm:mt-[18.6vw]'>
				<div className='flex justify-between items-center mb-[60px] '>
					<h2 className='text-[40px] font-[500] max-sm:text-[6.4vw]'>
						We're Hiring
					</h2>
					<a
						href='https://weexsupport.zendesk.com/hc/en-us/sections/4487095693593'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#F8C71B] hover:underline'
					>
						More
					</a>
				</div>

				<div className='flex flex-col gap-[24px] pb-[120px] max-sm:gap-[3.2vw] max-sm:pb-[12vw]'>
					{jobs.map((job, index) => (
						<a
							key={index}
							href={job.link}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-inherit flex items-center p-[16px] text-[18px] font-[500] text-white rounded-[16px] hover:bg-[rgba(119,121,137,.05)] max-sm:px-0 max-sm:py-[2.1vw]'
						>
							<div className='flex items-center'>
								<img
									src={job.image}
									alt={job.title}
									className='w-12 h-12 mr-4 max-sm:w-[36px] max-sm:h-[31px]'
								/>
								<span className='font-medium'>{job.title}</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
