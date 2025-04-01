import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'
import anima from '../../assets/anima.json'

interface EventItem {
	title: string
	description: string
	imageSrc: string
	buttonText?: string
	tag?: string
	buttonOnClick?: () => void
}

const CopyTrade = () => {
	const [showRules, setShowRules] = useState(false)
	const animationContainer = useRef(null)

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container:
				(animationContainer.current as unknown as Element) ??
				document.createElement('div'),
			renderer: 'canvas', // или 'canvas', 'html'
			loop: true,
			autoplay: true,
			animationData: anima,
		})

		return () => anim.destroy() // Очистка при размонтировании
	}, [])

	const events: EventItem[] = [
		{
			title:
				'Event 1: Make an elite trade or copy a trade daily to win an airdrop',
			description:
				"Users who make elite trades or copy trades with a total trading volume exceeding 5,000 USDT daily during the event period will get an airdrop reward of a random amount. The daily prize pool can go up to 3,000 USDT. Supply is limited, so don't miss out!",
			buttonText: 'Join Now',
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/faeb51137f7cea100d1366a50235165a.png',
		},
		{
			title: 'Event 2: Special gift for new users who copy trade',
			tag: 'New Users Only',
			description:
				'WEEXers who start copy trading and reach a net deposit volume of 100 USDT during the event will get a reward. They simply need to copy an elite trade of any amount, or make an elite trade to win a random airdrop of 1 – 20 USDT.',
			buttonText: 'Join Now',
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/ced7f2be6f159a092d95832d11b88374.png',
		},
	]

	const rules = [
		'Only those who make an elite trade or copy a trade for the first time are eligible to participate in Event 2.',
		'Trading volume = margin × leverage (positions that are not closed during the event are not counted).',
		'If any malicious wash trading, cheating, or other illegal behavior is detected, WEEX will disqualify the user and revoke rewards.',
		'The event rewards are distributed in the form of futures bonuses. Please keep track of your account balance and take note of the validity period of the futures bonus received.',
		'WEEX reserves the right of final interpretation for this event and the right to modify or change the Terms and Conditions of the event at any time without prior notice, including but not limited to changing, extending, or terminating the event. All participants will be bound by the revised terms.',
	]

	return (
		<div className='promo-container w-[100% bg-black pb-[80px] w-[1200px] mx-auto text-white max-sm:px-[16px] max-sm:w-full'>
			{/* Main Banner */}
			<div className='promo-banner min-h-[478px] bg-contain bg-no-repeat relative flex items-center max-sm:h-auto max-sm:pt-0 max-sm:mt-[50px] max-sm:flex-col-reverse'>
				<div className='banner-content w-1/2 text-white max-sm:w-full max-sm:text-center'>
					<div className='banner-title1 text-[32px] mt-[40px] mb-[16px] max-sm:text-[16px] max-sm:mb-[16px]'>
						Blaze Your Way to Big Wins
					</div>
					<div className='banner-title2 text-[46px] mb-[16px] font-[700] max-sm:text-[28px] max-sm:mb-[24px]'>
						Fire Up That Copy Frenzy!
					</div>
					<div className='banner-date text-[#d1d1d2] text-[18px] max-sm:text-[14px]'>
						23.03.2025, 18:00:00 - 27.04.2025, 18:59:59 (UTC+3)
					</div>
					<button className='banner-btn my-[40px] px-[48px] w-auto rounded-[100px] h-[56px] text-[18px] font-[700] bg-white text-black cursor-pointer max-sm:my-[24px] max-sm:w-full max-sm:h-[48px]'>
						Sign Up
					</button>
				</div>

				<div
					ref={animationContainer}
					className='w-[607px] h-[440px] max-sm:w-[375px] max-sm:h-[270px]'
				/>
			</div>

			{/* Events List */}
			{events.map((event, index) => (
				<div
					key={index}
					className='event-wrapper flex flex-col gap-[48px] rounded-[24px] bg-[#151515] p-[40px] mt-[40px] max-sm:mt-[16px] max-sm:py-[24px] max-sm:px-[16px]'
				>
					<div className='event-item flex gap-[40px]'>
						<div className='event-content flex-1 max-sm:w-full'>
							<div className='event-details'>
								<h3
									className='event-title font-[700] text-[32px] max-sm:text-[16px]'
									dangerouslySetInnerHTML={{ __html: event.title }}
								/>
								{event?.tag && (
									<div className='flex flex-wrap gap-[10px] mt-[24px]'>
										<span className='flex items-center justify-center min-h-[24px] h-fit w-fit py-[2.5px] px-[8px] rounded-[12px] border border-[#d8ae15] text-[#d8ae15] text-[14px]'>
											{event.tag}
										</span>
									</div>
								)}
								<div
									className='event-description mt-[24px] text-[16px] whitespace-normal text-[#d1d1d2] max-sm:mt-[12px] max-sm:text-[14px]'
									dangerouslySetInnerHTML={{ __html: event.description }}
								/>
							</div>
							{event.buttonText && (
								<div className='event-button-wrapper mt-[32px] max-sm:mt-[18px] max-sm:w-full'>
									<button className='event-button max-w-[140px] w-fit min-h-[40px] h-fit font-[700] rounded-[56px] border border-white bg-transparent text-white px-[16px] cursor-pointer max-sm:max-w-full max-sm:font-[500] max-sm:w-full'>
										{event.buttonText}
									</button>
								</div>
							)}
						</div>
						<img
							src={event.imageSrc}
							alt={`Event ${index + 1}`}
							className='event-image max-sm:hidden'
							loading='lazy'
							width={200}
							height={200}
						/>
					</div>
				</div>
			))}

			<div className='item mt-[80px] border border-[#2e2e2e] rounded-[24px] p-[32px] max-sm:my-[40px] cursor-pointer'>
				<button
					onClick={() => setShowRules(!showRules)}
					className='w-full flex justify-between items-center text-left'
				>
					<h2 className='text-white font-[700] text-[24px] max-sm:text-[16px]'>
						More details
					</h2>
					<motion.div
						animate={{ rotate: showRules ? 180 : 0 }}
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
					{showRules && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className='mt-[16px] text-[#8b8b8e]'
						>
							{rules.map((rule, index) => (
								<p key={index} className='rule-item'>
									{index + 1}. {rule}
								</p>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default CopyTrade
