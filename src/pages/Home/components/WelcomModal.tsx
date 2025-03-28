import { useState, useEffect } from 'react'

const WelcomeModal = ({ onClose }) => {
	const [isOpen, setIsOpen] = useState(true)
	const [dontRemind, setDontRemind] = useState(false)

	useEffect(() => {
		// Проверяем localStorage при загрузке
		const dontRemindUntil = localStorage.getItem('dontRemindUntil')
		if (dontRemindUntil && new Date().getTime() < Number(dontRemindUntil)) {
			setIsOpen(false)
			onClose?.()
		}
	}, [onClose])

	const handleClose = () => {
		if (dontRemind) {
			// Устанавливаем время, до которого не показывать (текущее время + 24 часа)
			const dontRemindUntil = new Date().getTime() + 24 * 60 * 60 * 1000
			localStorage.setItem('dontRemindUntil', dontRemindUntil.toString())
		}
		setIsOpen(false)
		onClose?.()
	}

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(0,0,0,.7)] bg-opacity-50'>
			<div className='bg-[#0f1115] rounded-[16px] p-[16px] mb-[16px]'>
				<div className='relative bg-black rounded-lg max-w-[90%] md:max-w-2xl overflow-hidden'>
					{/* Close button */}
					<button
						onClick={handleClose}
						className='absolute top-4 right-4 z-10 text-white hover:text-yellow-400 cursor-pointer'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>

					{/* Carousel content */}
					<div className='relative h-[300px] md:h-[400px]'>
						<img
							src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/floatingWindow/a5c0ac1d213149d85ceae67246dc8fca.png'
							className='w-full h-full object-contain'
							alt='Welcome offer'
						/>
					</div>

					{/* Learn More button */}
					<div className='p-4 text-center bg-[#0f1115]'>
						<button
							onClick={() => {
								window.location.href = '/promotion'
							}}
							className='bg-[#ffe82d] hover:bg-[#ffed57] text-black font-[500] py-3 px-6 rounded-[16px] cursor-pointer transition-colors duration-200 w-[200px] h-[48px]'
						>
							Learn More
						</button>
					</div>
				</div>
			</div>

			<section className='flex items-center p-4 rounded-[16px]'>
				<button
					onClick={() => setDontRemind(!dontRemind)}
					className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
						dontRemind
							? 'bg-[#ffe82d] border-[#ffe82d]'
							: 'bg-transparent border-gray-400'
					}`}
				>
					{dontRemind && (
						<svg
							className='w-3 h-3 text-black'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				</button>

				<div className='w-2'></div>

				<span
					className='text-sm text-white cursor-pointer select-none'
					onClick={() => setDontRemind(!dontRemind)}
				>
					Don't remind me again today
				</span>
			</section>
		</div>
	)
}

export default WelcomeModal
