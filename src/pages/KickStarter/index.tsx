import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface EventItem {
	title: string
	description: string
	imageSrc: string
	buttonText?: string
	buttonOnClick?: () => void
}

const KickStarter = () => {
	const [showRules, setShowRules] = useState(false)
	const events: EventItem[] = [
		{
			title: 'Total prize pool: 1,000,000 worth of WXT',
			description: `
        <p>📅<strong>Event period:</strong></p>
        <ol>
          <li>⏳<strong>Event cycle:</strong> March 6, 4:00PM – March 16, 2025, 11:59 PM (UTC+8)</li>
          <li>🎁 <strong>Airdrop distribution:</strong> March 18,2025, 10:00 PM (UTC+8)</li>
        </ol>
        
        <p>💰 <strong>Event prize pool:</strong></p>
        <p><strong>Total prize pool: 1,000,000 worth of WXT</strong></p>
        <ol>
          <li><strong>Exclusive prize pool for new and existing users: 500,000 USDT worth of WXT</strong></li>
        </ol>
        <p>✨ <strong>The total prize pool is 1,000,000 USDT worth of WXT, with a prize pool of 500,000 USDT in value specially for new and existing users.</strong></p>
        
        <p>🚀 <strong>How to participate:</strong></p>
        <p>✅<strong> Minimum holding period:</strong> More than 3 days</p>
        <p>✅<strong>Minimum holding requirement:</strong> <strong>Hold ≥ 200 WXT</strong> during the event to automatically participate in the airdrop event!</p>
        
        <p>📊 <strong>Airdrop reward calculation:</strong></p>
        <ol>
          <li><strong>All eligible WEEXers will share the airdrop prize pool based on their WXT holding time and the quantity held.</strong></li>
          <li><strong>The more WXT held and the longer, the greater the reward!</strong></li>
        </ol>
      `,
			buttonText: 'Hold WXT Now',
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/79c08f5d918e306d283b5505025da1e7.png',
		},
		{
			title: 'Special WXT holding benefits!',
			description: `
        <p>🎯<strong>Special WXT holding benefits! Upgraded perks!</strong></p>
        <p>💎 <strong>Hold ≥ 200 WXT</strong> ➜ Participate in the <strong>"Share 1,000,000 USDT worth of WXT"</strong> event!</p>
        <p>💎 <strong>Hold ≥ 1,000 WXT</strong> ➜ Participate in the <strong>weekly hot crypto projects on We-Launch</strong>! Commit WXT to easily grab airdrops!</p>
        <p>💎 <strong>Hold ≥ 5,000 WXT</strong> ➜ Become a <strong>VIP member</strong> and enjoy <strong>up to 70% off transaction fees</strong> and <strong>the VIP perk of a bigger airdrop share!</strong></p>
        
        <p><strong>⚡ Why participate in holding WXT?</strong></p>
        <p>✓ <strong>No-frills share of the WXT airdrop prize pool worth 1,000,000</strong></p>
        <p>✓ <strong>Extra exclusive VIP trading perks</strong></p>
        <p>✓ <strong>Hold WXT long-term and enjoy multiple perks</strong></p>
      `,
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/bc91dca429b83bea9d8a1d5751f76956.png',
		},
	]

	const rules = [
		'No registration is required for the event. Spot accounts holding ≥ 200 WXT will automatically qualify for participation. All eligible WEEXers will share the WXT airdrop prize pool based on their WXT holding time and the quantity held.',
		'New users refer to users who signed up on WEEX from March 6, 2025, 12:00 AM (UTC+8). Existing users refer to users who signed up on WEEX before March 5, 2025, 11:59 PM (UTC+8).',
		'Market makers, institutional users, and sub-accounts are not eligible to participate in this event.',
		"All WXT airdrop rewards will be distributed to the participants' WEEX accounts after event cycle ends.",
		'In the event that the WEEX risk control system detects collusion in the trading behavior of participants, all accounts involved will be disqualified.',
		"All participants must strictly abide by WEEX's Terms and Conditions. If any malicious bulk registration, wash trading, cheating, fraud, or other illegal behavior is detected, WEEX will disqualify the user and revoke rewards.",
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
						'url("https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/7f0a8be5772a218f7b080ab06dad6204.png")',
				}}
			>
				<div className='banner-content w-1/2 text-white max-sm:w-full max-sm:text-center'>
					<div className='banner-title1 text-[32px] mt-[40px] mb-[16px] max-sm:text-[16px] max-sm:mb-[16px]'>
						The WXT Airdrop Extravaganza is back! Share 1,000,000 USDT worth of
						WXT!
					</div>
					<div className='banner-title2 text-[46px] mb-[16px] font-[700] max-sm:text-[28px] max-sm:mb-[24px]'>
						$1,000,000 in WXT up for <br />
						grabs!
					</div>
					<div className='banner-date text-[#d1d1d2] text-[18px] max-sm:text-[14px]'>
						06.03.2025, 13:00:00 - 16.03.2025, 17:59:59 (UTC+3)
					</div>
					<button className='banner-btn my-[40px] px-[48px] w-auto rounded-[100px] h-[56px] text-[18px] font-[700] bg-white text-black cursor-pointer max-sm:my-[24px] max-sm:w-full max-sm:h-[48px]'>
						Sign Up
					</button>
				</div>

				<img
					src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/35147ab8d7741e8388f878fc70e9cea4.png'
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
					<div className='event-item flex gap-[40px] items-center'>
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
									<button className='event-button w-fit w-fit min-h-[40px] h-fit font-[700] rounded-[56px] border border-white bg-transparent text-white px-[16px] cursor-pointer max-sm:max-w-full max-sm:font-[500] max-sm:w-full'>
										{event.buttonText}
									</button>
								</div>
							)}
						</div>
						<img
							src={event.imageSrc}
							alt={`Event ${index + 1}`}
							className='event-image max-sm:hidden w-[200px] h-[200px]'
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

export default KickStarter
