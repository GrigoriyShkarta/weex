import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const APY = () => {
	const [currentNotice, setCurrentNotice] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentNotice(prev => (prev + 1) % marqueeItems.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	const marqueeItems = [
		{ name: 'NEIRO', quantity: '224,034,327', apy: '402.46%' },
		{ name: 'THR', quantity: '300,272,135', apy: '358.42%' },
		{ name: 'FLOKI', quantity: '171,114,445', apy: '232.77%' },
		{ name: 'LTD', quantity: '201,887,189', apy: '224.56%' },
		{ name: 'BA', quantity: '316,574,165', apy: '237.04%' },
	]

	return (
		<div className='flex justify-center text-white bg-[#222] '>
			<div className='w-[1200px] flex justify-between items-center py-[18px] px-[40px] bg-[#222] border border-[#474747] rounded-[16px] mb-[88px] max-sm:w-[91.4vw] max-sm:flex-col max-sm:items-start max-sm:p-[4.2vw] max-sm:mb-[8.5vw]'>
				<div>
					<p>Historical highest ROI</p>
				</div>

				<div className='flex justify-center items-center my-6 max-sm:hidden'>
					<div className='w-[24px]'></div>
					<div className='h-[16px] w-[1px] bg-[#2e2e2e]'></div>
					<div className='w-[24px]'></div>
				</div>

				<div className='flex flex-1 justify-between items-center max-sm:flex-col max-sm:gap-[4.2vw] max-sm:items-start max-sm:mt-[4.2vw]'>
					<div className='flex items-center'>
						<span className='text-[#6B6B6B]'>Project name</span>
						<div className='w-[8px]'></div>
						<div className='flex-1 overflow-hidden'>
							<div className='flex space-x-8 animate-marquee whitespace-nowrap'>
								<AnimatePresence mode='wait'>
									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -20, opacity: 0 }}
										transition={{ duration: 0.5 }}
										className='whitespace-nowrap'
									>
										<span
											className='font-medium text-white block overflow-hidden text-ellipsis max-w-full'
											title={marqueeItems[currentNotice].name}
										>
											{marqueeItems[currentNotice].name}
										</span>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>

					<div className='flex items-center'>
						<span className='text-[#6B6B6B] text-nowrap'>
							Subscription quantity
						</span>
						<div className='w-[8px]'></div>
						<div className='flex-1 overflow-hidden'>
							<div className='flex space-x-8 animate-marquee whitespace-nowrap'>
								<AnimatePresence mode='wait'>
									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -20, opacity: 0 }}
										transition={{ duration: 0.5 }}
										className='whitespace-nowrap'
									>
										<span
											className='font-medium text-white block overflow-hidden text-ellipsis max-w-full'
											title={marqueeItems[currentNotice].quantity}
										>
											{marqueeItems[currentNotice].quantity}
										</span>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>

					<div className='flex items-center'>
						<span className='text-[#6B6B6B]'>APY</span>
						<div className='w-[8px]'></div>
						<div className='flex-1 overflow-hidden'>
							<div className='flex space-x-8 animate-marquee whitespace-nowrap'>
								<AnimatePresence mode='wait'>
									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -20, opacity: 0 }}
										transition={{ duration: 0.5 }}
										className='whitespace-nowrap'
									>
										<span
											className='font-medium text-white block overflow-hidden text-ellipsis max-w-full'
											title={marqueeItems[currentNotice].apy}
										>
											{marqueeItems[currentNotice].apy}
										</span>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default APY
