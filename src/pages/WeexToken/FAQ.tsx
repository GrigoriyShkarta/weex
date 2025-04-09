import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleItem = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}
	const faqItems = [
		{
			question: 'What are the fees for buying WEEX Token on WEEX?',
			answer:
				'We strive to provide transparent and competitive fees. You can find a detailed breakdown of our trading fees on our <a href="https://www.weex.com/support/rate" target="_blank">Fee Schedule page</a>. Rest assured, we don\'t charge any deposit fees!',
		},
		{
			question: 'What is the minimum amount of WEEX Token I can buy?',
			answer:
				'We want to make crypto accessible to everyone. You can start investing in WEEX Token with as little as $10.',
		},
		{
			question: 'In which currencies can I buy WEEX Token on WEEX?',
			answer:
				'We currently support the following fiat currencies for WEEX Token purchases: US dollar (USD), Chinese yuan (CNY), Euros (EUR), Canadian dollar (CAD), British pound sterling (GBP), Swiss franc (CHF), and the Australian dollar (AUD).',
		},
		{
			question: 'What if my national currency is not supported on WEEX?',
			answer:
				'We are continuously working to expand our supported currencies. In the meantime, you can explore using a credit card that allows transactions in a supported fiat currency like USD or CNY.',
		},
		{
			question: 'How long does it take to buy WEEX Token?',
			answer:
				'We prioritize speed and efficiency. Once your account is funded, buying WEEX Token is usually instant.',
		},
		{
			question: 'Is it safe to buy WEEX Token on WEEX?',
			answer:
				'Your security is our top priority. We utilize industry-leading security measures, including two-factor authentication and cold storage for digital assets to keep your funds and personal information safe.',
		},
		{
			question: 'What if I need help with my WEEX Token purchase?',
			answer:
				"Our dedicated customer service team is here to assist you. You can reach us via live chat or email, and we'll be happy to answer any questions you may have.",
		},
	]

	return (
		<div
			className='flex justify-center pt-[80px] max-sm:mx-[16px] max-sm:pt-[54px]'
			id='FAQ'
		>
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
