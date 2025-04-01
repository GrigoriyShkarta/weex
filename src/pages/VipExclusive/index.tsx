import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface EventItem {
	title: string
	description: string
	imageSrc: string
	buttonText?: string
	buttonOnClick?: () => void
}

const VipExclusive = () => {
	const [showRules, setShowRules] = useState(false)
	const events: EventItem[] = [
		{
			title: 'Event 1: Trade for exclusive airdrop',
			description: `
        <p><strong>Eligibility:</strong></p>
        <ol>
          <li>1. The user must have a VIP level of VIP 3 or higher.</li>
          <li>2. Register for the event and complete at least one trade.</li>
        </ol>
        <p><br></p>
        <p><strong>Reward rules:</strong></p>
        <ol>
          <li>3. Every trade gives you a chance to receive a random airdrop reward!</li>
          <li>4. VIP who successfully upgrade their VIP level from holding the required WXT for 1 consecutive day, or from reaching the required USDT futures trading volume in a 30-day period will get an airdrop worth 20 – 500 USDT!</li>
          <li>5. Airdrop rewards include but are not limited to rewards like spot airdrops and futures bonuses.</li>
        </ol>
      `,
			buttonText: 'Check your status',
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/9a91abb147f7a9ca0b381427a674497c.png',
		},
		{
			title: 'Event 2: Exclusive perks for non-WEEX VIPs',
			description: `
        <p>Submit proof of your VIP status with other CEXs (for example: Binance, Coinbase, Kraken). Wait for your profile to be reviewed and become a WEEX VIP after you pass the review.</p>
        <p>You will be given a VIP level on WEEX that is one level higher than the level you hold on the other CEX, and you can also receive the Mystery Box in Event 1!</p>
      `,
			buttonText: 'Join Now',
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/8f6f5f3932f3750f0f4a082208dee91f.png',
		},
	]

	const rules = [
		'You must register for the event to participate.',
		'The system will automatically assign a random futures bonus amount to WEEXers who qualify for the reward. The rewards will be airdropped to qualified winners once every five days.',
		'Please remember to check your account balance and the expiration date of the futures bonus. The futures bonus is for futures trading only and is valid for 3 days. Only the profit generated from the futures bonus can be withdrawn but the futures bonus itself cannot be withdrawn.',
		'Event 2 submissions will be reviewed every three working days. The account upgrade will be completed within 3 working days after successful registration and submission of the form.',
		'If any malicious wash trading, cheating, or other illegal behavior is detected, WEEX will disqualify the user and revoke rewards.',
		'In the event that WEEX detects collusion in the trading behavior of participants, all accounts involved will be disqualified.',
		"All participating users must strictly abide by WEEX's Terms and Conditions. WEEX reserves the right to disqualify participants who display malicious behavior such as opening multiple accounts to obtain additional futures bonuses, illegal acts, fraud, or other harmful behavior.",
		'WEEX reserves the right of final interpretation for this event and the right to modify or change the Terms and Conditions of the event at any time without prior notice, including but not limited to changing, extending, or terminating the event. All participants shall be bound by the revised terms.',
	]

	return (
		<div className='promo-container w-[100% bg-black pb-[80px] w-[1200px] mx-auto text-white max-sm:px-[16px] max-sm:w-full'>
			{/* Main Banner */}
			<div
				className='promo-banner min-h-[478px] bg-contain bg-no-repeat relative flex items-center max-sm:h-auto max-sm:pt-[271px] max-sm:mt-[50px]'
				style={{
					backgroundImage:
						'url("https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/21be6d36f1fff4e12f2630e29b536607.png")',
				}}
			>
				<div className='banner-content w-1/2 text-white max-sm:w-full max-sm:text-center'>
					<div className='banner-title1 text-[32px] mt-[40px] mb-[16px] max-sm:text-[16px] max-sm:mb-[16px]'>
						Trade for exclusive airdrop
					</div>
					<div className='banner-title2 text-[46px] mb-[16px] font-[700] max-sm:text-[28px] max-sm:mb-[24px]'>
						VIP Trading Perks
					</div>
					<div className='banner-date text-[#d1d1d2] text-[18px] max-sm:text-[14px]'>
						10.03.2025, 08:00:00 - 31.03.2025, 08:59:59 (UTC+3)
					</div>
					<button className='banner-btn my-[40px] px-[48px] w-auto rounded-[100px] h-[56px] text-[18px] font-[700] bg-white text-black cursor-pointer max-sm:my-[24px] max-sm:w-full max-sm:h-[48px]'>
						Sign Up
					</button>
				</div>

				<img
					src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/cdba9d93365b831cc36238760c27f187.png'
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
									<button className='event-button max-w-[140px] w-fit min-h-[40px] h-fit font-[700] rounded-[56px] border border-white bg-transparent text-white px-[16px] cursor-pointer max-sm:max-w-full max-sm:font-[500] max-sm:w-full'>
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
					className='w-full flex justify-between items-center text-left cursor-pointer'
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

export default VipExclusive
