import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Rules = () => {
	const [showRules, setShowRules] = useState(false)

	const rules = [
		'Register for the event with the "Register Now" button and complete tasks to earn spin chances. Use the "Spin" button to use your spin chance and win rewards. Unused spin chances will be automatically forfeited at the end of the event.',

		'Market makers, institutional users, and sub-accounts are not eligible to participate in this event. The trading volume of sub-accounts will count towards their main account.',

		'You must use the "Register Now" button to register for this event during the valid registration period. Your trading volume will only be valid to be counted towards the event after you register.Futures trading tasks will reset at 16:00 (UTC) every day.',

		'In trading tasks, only the trading volume that contributes to fees will count.',

		'The daily prize pool will reset at 16:00(UTC+0). Rewards 1 to 8 have a maximum daily distribution limit and will be distributed on a first come, first served basis. USDT rewards will be distributed as Futures Pro futures bonuses. The physical reward can be claimed by contacting customer service.',

		'In the event that WEEX detects collusion in the trading behavior of participants, all accounts involved will be disqualified.',

		'All participating users must strictly abide by the Terms and Conditions set by WEEX. If bulk registration, malicious volume manipulation, cheating, illegal activity, fraud, or other malicious behavior is detected, WEEX reserves the right to disqualify participants and revoke rewards.',

		'WEEX reserves the right to modify the terms of this event at any time. These modifications may be made without any prior notice.',

		'WEEX reserves the right of final interpretation of the Terms and Conditions of this event. Contact our customer service if you have any questions.',
	]

	return (
		<div className='item mt-[80px] border border-[#2e2e2e] rounded-[24px] p-[32px] max-sm:my-[40px]'>
			<button
				onClick={() => setShowRules(!showRules)}
				className='w-full flex justify-between items-center text-left cursor-pointer'
			>
				<h2 className='text-white font-[700] text-[24px] max-sm:text-[16px]'>
					Event Rules
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
	)
}

export default Rules
