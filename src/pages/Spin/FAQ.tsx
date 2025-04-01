import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleItem = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}
	const faqItems = [
		{
			question: 'FAQ1: How long does it take for rewards to be issued?',
			answer:
				'Tokens and futures bonuses are distributed in real time, and physical rewards will be distributed within three days after the event ends.',
		},
		{
			question: 'FAQ2: Where can I view the status of my rewards?',
			answer:
				'You can view the reward distribution status in your rewards list.',
		},
		{
			question: 'FAQ3: Who should I contact if I encounter any issues?',
			answer:
				'Please contact our customer support if you have any questions or issues.',
		},
	]

	return (
		<div className='mt-[80px] border border-[#2e2e2e] rounded-[24px] p-[32px] max-sm:my-[40px]'>
			<div className='content  max-sm:w-[full]'>
				<h2 className='title text-[32px] font-[700] pb-[16px] max-sm:text-[28px] text-white'>
					FAQ
				</h2>
				<div className='news-list mt-[32px] flex flex-col gap-[32px] mb-[48px w-full]'>
					{faqItems.map((item, index) => (
						<div key={index} className='item'>
							<button
								onClick={() => toggleItem(index)}
								className='w-full flex justify-between items-center text-left cursor-pointer'
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
