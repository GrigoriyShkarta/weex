import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleItem = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}
	const faqItems = [
		{
			question: 'Q1. How does the WEEX Affiliate Program work?',
			answer:
				'WEEX offers the highest affiliate commission rate in the industry. We also provide dedicated business development support and help our affiliates hold engaging events to foster a vibrant community. Through our program, WEEX affiliates will receive commissions when their referrals complete trades.',
		},
		{
			question: 'Q2. How does WEEX support WEEX affiliates?',
			answer:
				'WEEX provides various forms of support to aspiring affiliates, including generous commissions, so that they can contribute to the development of the crypto industry while earning passive income. WEEX affiliates gain access to professional customer service and 24/7 technical support from the WEEX team, including AMA, interviews, publications, and events to help our affiliates achieve success.',
		},
		{
			question: 'Q3. Who is eligible to join this program?',
			answer:
				'The WEEX Affiliate Program is tailor-made for Key Opinion Leaders (KOLs) who promote growth in the cryptocurrency world. If you are innovative, and passionate about crypto, join us today to contribute to the cryptocurrency world! There are no specific thresholds for becoming a WEEX affiliate. We strongly encourage anyone and everyone passionate about crypto to contribute to the WEEX community.',
		},
		{
			question: 'Q4. How are commissions calculated and distributed?',
			answer:
				"Commission is based on a percentage of your own and your referrals' transaction fees. The commission will be airdropped to your WEEX spot account in USDT on a daily basis. You can track your performance and earnings on the affiliate dashboard: https://affiliates.weex.com/home/ https://affiliates.weex.com/home/",
		},
	]

	return (
		<div className='flex justify-center py-[80px] max-sm:mx-[16px] max-sm:pt-[54px]'>
			<div className='content w-[1200px] max-sm:w-[full]'>
				<h2 className='title text-[32px] font-[700] border-b border-[rgba(119,121,137,.15)] pb-[16px] max-sm:text-[28px] text-white'>
					FAQ
				</h2>
				<div className='news-list mt-[32px] flex flex-col gap-[32px] mb-[48px]'>
					{faqItems.map((item, index) => (
						<div key={index} className='item'>
							<button
								onClick={() => toggleItem(index)}
								className='w-full flex justify-between items-center text-left'
							>
								<h3 className='text-white font-[500] text-[20px] max-sm:text-[16px]'>
									{item.question}
								</h3>
								<motion.div
									animate={{ rotate: activeIndex === index ? 180 : 0 }}
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
								{activeIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className='mt-[16px] text-[#8b8b8e]'
									>
										{item.answer}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FAQ
