import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface EventItem {
	title: string
	description: string
	imageSrc: string
	buttonText?: string
	buttonOnClick?: () => void
}

const TRUMB = () => {
	const [showRules, setShowRules] = useState(false)
	const events: EventItem[] = [
		{
			title:
				'Event 1: Trade OFFICIAL TRUMP (TRUMP) futures to earn USDT futures bonuses',
			description: `
        <p>Reach a trading volume of ≥ 2,000 USDT with TRUMP futures daily for five consecutive days during the event to claim a 5 USDT futures bonus!</p>
        <p>Reach a trading volume of ≥ 2,000 USDT daily for seven consecutive days to earn an additional 10 USDT futures bonus! Earn 15 USDT in futures bonuses altogether!</p>
        <p>Rewards are on a first-come, first served basis.</p>
        <p><strong>Total prize pool: 80,000 USDT</strong></p>
      `,
			buttonText: 'Trade to Join',
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/a430ccabed14eec03f250572c66fe474.png',
		},
		{
			title: 'Event 2: Leaderboard battle—win a spot airdrop',
			description: `
        <p><strong>The top 300 users with the highest TRUMP futures trading volume will share the 2,025 TRUMP prize pool! Users must reach a trading volume of at least 20,000 USDT during the event period to qualify.</strong></p>
        <p>Rank 1 – 10: Equal split of 10% of the event prize pool.</p>
        <p>Rank 11 – 100: Equal split of 50% of the event prize pool.</p>
        <p>Rank 101 – 300: Equal split of the remaining 40% of the event prize pool.</p>
        <p><strong>Total prize pool: 2,025 TRUMP</strong></p>
        <p>Don't miss out—start trading now!</p>
      `,
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/7accbce1310621226c7ef06d0dbb5747.png',
		},
	]

	const rules = [
		'Only TRUMP futures trading volume (excluding trades with 0 trading fees and 0% Maker fees) generated after registration during the event will count toward the total event trading volume.',
		'Futures trading volume during the event = open volume + close volume. Trades with 0 fees incurred are not included.',
		'Market makers, institutional users, and sub-accounts cannot participate in this event.',
		'The rewards will be issued within 10 working days after the event ends. The USDT rewards will be issued in the form of futures bonuses.',
		'In the event that the WEEX risk control system detects collusion or other abnormalities in the trading behavior of participants, all accounts involved will be disqualified.',
		'All participating users must strictly abide by the Terms and Conditions set by WEEX. If bulk registration, malicious volume manipulation, cheating, fraud, or other malicious behavior is detected, WEEX reserves the right to disqualify participants and revoke rewards.',
		'WEEX reserves the right to modify the Terms and Conditions of this event without prior notice.',
		'WEEX reserves the right of final interpretation of the Terms and Conditions of this event. Contact our customer service if you have any questions.',
	]

	return (
		<div className='promo-container w-[100% bg-black pb-[80px] w-[1200px] mx-auto text-white max-sm:px-[16px] max-sm:w-full'>
			{/* Main Banner */}
			<div
				className='promo-banner min-h-[478px] bg-contain bg-no-repeat relative flex items-center max-sm:h-auto max-sm:pt-[271px] max-sm:mt-[50px]'
				style={{
					backgroundImage:
						'url("https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/9d86e9114bf9f9e6b4b0e2d794b09e85.png")',
				}}
			>
				<div className='banner-content w-1/2 text-white max-sm:w-full max-sm:text-center'>
					<div className='banner-title1 text-[32px] mt-[40px] mb-[16px] max-sm:text-[16px] max-sm:mb-[16px]'>
						Trade TRUMP futures now to share a 2,025 TRUMP airdrop + 80,000 USDT
						in futures bonuses!
					</div>
					<div className='banner-title2 text-[46px] mb-[16px] font-[700] max-sm:text-[28px] max-sm:mb-[24px]'>
						TRUMP futures trading competition is live—win great rewards!
					</div>
					<div className='banner-date text-[#d1d1d2] text-[18px] max-sm:text-[14px]'>
						25.03.2025, 06:00:00 - 31.03.2025, 18:59:59 (UTC+3)
					</div>
					<button className='banner-btn my-[40px] px-[48px] w-auto rounded-[100px] h-[56px] text-[18px] font-[700] bg-white text-black cursor-pointer max-sm:my-[24px] max-sm:w-full max-sm:h-[48px]'>
						Sign Up
					</button>
				</div>

				<img
					src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/4019e563d054ab95add4fe8066f4b235.png'
					alt='img'
					className='hidden max-sm:block absolute h-[270px] w-full z-1 top-0 left-0 right-0'
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

			<div className='item mt-[80px] border border-[#2e2e2e] rounded-[24px] p-[32px] max-sm:my-[40px]'>
				<button
					onClick={() => setShowRules(!showRules)}
					className='w-full flex justify-between items-center text-left'
				>
					<h2 className='text-white font-[700] text-[24px] max-sm:text-[16px]'>
						Event rules：
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

export default TRUMB
