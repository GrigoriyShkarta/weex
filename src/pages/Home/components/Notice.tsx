import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Notice = () => {
	const notices = [
		'Invite friends',
		'Daily Spin: Round 14— 100% win rate—get BTC, 2,025 XRP & more!',
	]
	const [currentNotice, setCurrentNotice] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentNotice(prev => (prev + 1) % notices.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className='bg-[#222] flex justify-center'>
			<div className='max-w-[1200px] w-[1200px] h-16 leading-[64px] flex justify-between flex-grow max-sm:h-[18px] max-sm:px-[16px]'>
				{/* Notice icon and content */}
				<div className='flex items-center text-center flex-grow'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-white sm:w-6 sm:h-6 max-sm:w-4 max-sm:h-4' // 24px на десктопе, 16px на мобилке
					>
						<rect opacity='0.01' width='24' height='24' fill='white' />
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M13.75 3V21C10.25 21 7.64925 16.4195 7.64925 16.4195H4.75C4.19772 16.4195 3.75 15.9719 3.75 15.4196V8.5054C3.75 7.95311 4.19772 7.5054 4.75 7.5054H7.64925C7.64925 7.5054 10.25 3 13.75 3Z'
							stroke='currentColor'
							strokeWidth='2.25'
							strokeLinejoin='round'
						/>
						<path
							d='M17.75 7.5V7.5C18.0616 7.77825 18.3441 8.08985 18.5921 8.4294C19.3194 9.4252 19.75 10.6611 19.75 12C19.75 13.3273 19.3268 14.5534 18.6109 15.5447C18.3584 15.8943 18.0696 16.2146 17.75 16.5'
							stroke='currentColor'
							strokeWidth='2.25'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<div className='w-[12px]'></div> {/* Spacer */}
					{/* Marquee content */}
					<div className='relative max-sm:overflow-hidden max-sm:w-[300px]'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={currentNotice}
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -20, opacity: 0 }}
								transition={{ duration: 0.5 }}
								className='whitespace-nowrap'
							>
								<span
									className='font-medium text-white block overflow-hidden text-ellipsis max-w-full'
									title={notices[currentNotice]}
								>
									{notices[currentNotice]}
								</span>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* More link */}
				<div className='flex items-center ml-4 text-sm text-gray-300 hover:text-white cursor-pointer'>
					<span>More</span>
					<div className='w-2'></div> {/* Spacer */}
					<svg
						className='w-4 h-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</div>
			</div>
		</section>
	)
}

export default Notice
