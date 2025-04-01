import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface EventItem {
	title: string
	description: string
	imageSrc: string
	buttonText?: string
	buttonOnClick?: () => void
}

const SpotTradingMatch = () => {
	const [showRules, setShowRules] = useState(false)
	const events: EventItem[] = [
		{
			title: 'Event 1: Deposit to share 40,000 USDT',
			description: `
        Make a first-time net deposit of <strong style="color: #FF9900;">≥ 100 USDT</strong> during the event 
        and complete a spot trade with any of the participating tokens to get 
        <strong style="color: #FF9900;">10 USDT</strong> worth of event tokens! It's first come, first served, 
        so hurry and don't miss out! The participating tokens are: BNB, CAKE, TUT, MUBARAK, 
        BROCCOLI, CAT, PENDLE, COOKIE, FEG, and VELO.
      `,
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/161f9145fbf580d067ca2004501fee2a.png',
			buttonText: 'Deposit Now',
		},
		{
			title:
				'Event 2: Get onto the trading ranking leaderboard to share 40,000 USDT!',
			description: `
				Event participants get <strong class="text-[#FF9900]">50% off transaction fees</strong> for spot trades 
				with BNB, CAKE, TUT, MUBARAK, BROCCOLI, CAT, PENDLE, COOKIE, FEG, and VELO. 
				Users who reach a trading volume of 300,000 USDT will be included in the leaderboard rankings. 
				The trading volume for the event also includes trades that are not spot trades.
				<br><br>
				<table class="w-full border-collapse text-left">
					<thead>
						<tr class="border border-gray-600">
							<th class="p-[4px] font-medium border-r border-gray-600">Ranking</th>
							<th class="p-[4px] font-medium">Rewards</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border border-gray-600">
							<td class="p-[4px] border-r border-gray-600">1</td>
							<td class="p-[4px]">3,500 USDT + 3,500 USDT futures bonus</td>
						</tr>
						<tr class="border border-gray-600">
							<td class="p-[4px] border-r border-gray-600">2</td>
							<td class="p-[4px]">2,500 USDT + 2,500 USDT futures bonus</td>
						</tr>
						<tr class="border border-gray-600">
							<td class="p-[4px] border-r border-gray-600">3</td>
							<td class="p-[4px]">1,400 USDT + 1,400 USDT futures bonus</td>
						</tr>
						<tr class="border border-gray-600">
							<td class="p-[4px] border-r border-gray-600">4 – 10</td>
							<td class="p-[4px]">500 USDT + 500 USDT futures bonus (per person)</td>
						</tr>
						<tr class="border border-gray-600">
							<td class="p-[4px] border-r border-gray-600">11 – 30</td>
							<td class="p-[4px]">200 USDT + 200 USDT futures bonus (per person)</td>
						</tr>
						<tr class="border border-gray-600">
							<td class="p-[4px] border-r border-gray-600">31 and below</td>
							<td class="p-[4px]">Share the 5,000 USDT + 5,000 USDT futures bonus reward</td>
						</tr>
						<tr>
							<td class="p-[4px] border border-gray-600">10 lucky participants</td>
							<td class="p-[4px] border border-gray-600">10 USDT + 10 USDT futures bonus (per person)</td>
						</tr>
					</tbody>
				</table>
			`,
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/6e4cb12c04e9473ddc52b7807695f09c.jpg',
			buttonText: 'Trade Now',
		},
		{
			title: 'Event 3: Invite friends to share 20,000 USDT worth of rewards',
			description: `
        WEEXers who complete registration during the event will get 
        <strong style="color: #FF9900;">5 USDT</strong> worth of any one of the event tokens for every valid new user they invite.
        <br><br>
        New valid users must fulfill the following conditions: Be invited during the event and successfully 
        sign up for a WEEX account, make a net deposit of ≥ 100 USDT, and complete a spot trade with 
        any of the participating event tokens.
      `,
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/e95510c8c9d7a0c6646594306c29c40b.png',
			buttonText: 'Invite Friends',
		},
		{
			title: 'Event 4: Kickstarter and VIP status',
			description: `
        Register for this event (use the "Register Now" button to register), and your account will be 
        upgraded to <strong style="color: #FF9900;">VIP 6</strong> for three days after the event ends!
        <br><br>
        Qualify and receive any reward from the event and get the <strong style="color: #FF9900;">VIP 6</strong> 
        experience! This VIP experience will be granted to your account within seven days after the event 
        rewards have been issued.
      `,
			imageSrc:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/7a3ebf54fe128a6db080885f4945a327.png',
		},
	]

	const rules = [
		'Users must use the "Register Now" button to register for the event. KYC verification must be completed to participate in this event.',
		"Once the user has successfully registered for the event, the system will calculate the user's deposit and trading volume during the event period.",
		'Net deposit = deposit – withdrawal. Only the total trading volume of the specified cryptocurrencies in Event 2 will count towards the event.',
		'The inviter must register to participate in the event, and new users who are invited have to make a net deposit of ≥ 100 USDT.',
		'New users refer to those who sign up during the event period. Market makers and institutional users are not eligible to participate.',
		'During the event, the trading volume generated by each user after registration will count toward the total trading volume for the event.',
		'Please refer to the official announcements for more information on VIP perks and futures bonuses.',
		'In the event of bulk registrations, malicious volume manipulation, cheating, or illegal activities, WEEX will disqualify the participants.',
		'WEEX reserves the right to change or modify the Terms and Conditions at any time without prior notice.',
		'All participants shall be bound by the revised Terms and Conditions. WEEX reserves the right of final interpretation for this event.',
	]

	return (
		<div className='promo-container w-[100% bg-black pb-[80px] w-[1200px] mx-auto text-white max-sm:px-[16px] max-sm:w-full'>
			{/* Main Banner */}
			<div
				className='promo-banner min-h-[478px] bg-contain bg-no-repeat relative flex items-center max-sm:h-auto max-sm:pt-[271px] max-sm:mt-[50px]'
				style={{
					backgroundImage:
						'url("https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/5e4be88fd58e5b2a1c38864257aa5e14.gif")',
				}}
			>
				<div className='banner-content w-1/2 text-white max-sm:w-full max-sm:text-center'>
					<div className='banner-title1 text-[32px] mt-[40px] mb-[16px] max-sm:text-[16px] max-sm:mb-[16px]'>
						BSC Bundle
					</div>
					<div className='banner-title2 text-[46px] mb-[16px] font-[700] max-sm:text-[28px] max-sm:mb-[24px]'>
						Share 100,000 USDT! <br />
						Register to get VIP status!
					</div>
					<div className='banner-date text-[#d1d1d2] text-[18px] max-sm:text-[14px]'>
						27.03.2025, 06:00:00 - 10.04.2025, 07:00:00 (UTC+3)
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

export default SpotTradingMatch
