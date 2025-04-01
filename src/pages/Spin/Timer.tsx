import React, { useState, useEffect } from 'react'

interface CountdownProps {
	targetDate: Date
	prefixText?: string
}

const CountdownTimer: React.FC<CountdownProps> = ({
	targetDate,
	prefixText = 'Ends in:',
}) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime()
			const distance = targetDate.getTime() - now

			if (distance < 0) {
				clearInterval(timer)
				return
			}

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [targetDate])

	return (
		<div className={`flex justify-center text-white max-sm:flex-col`}>
			<div className='flex items-center mr-[12px] text-[24px] text-[#d1d1d2] max-sm:text-[16px] max-sm:mr-0 max-sm:mb-[12px] max-sm:justify-center'>
				{prefixText}
			</div>
			<div className='flex items-center space-x-1 max-sm:justify-center'>
				<div className='text-center inline-block w-[72px] h-[72px] rounded-[12px] text-[40px] font-[700] bg-[hsla(0,0%,100%,.1)] mx-[20px] max-sm:w-[48px] max-sm:h-[48px] max-sm:rounded-[8px] max-sm:text-[18px] max-sm:pt-[6px] max-sm:mx-[10px]'>
					<span className='block text-center text-[36px] font-[700] max-sm:text-[18px]'>
						{timeLeft.days}
					</span>
					<span className='block text-[#8b8b8e] font-[500] text-[16px] max-sm:text-[12px]'>
						D
					</span>
				</div>
				<span>:</span>
				<div className='text-center inline-block w-[72px] h-[72px] rounded-[12px] text-[40px] font-[700] bg-[hsla(0,0%,100%,.1)] mx-[20px] max-sm:w-[48px] max-sm:h-[48px] max-sm:rounded-[8px] max-sm:text-[18px] max-sm:pt-[6px] max-sm:mx-[10px]'>
					<span className='block text-center text-[36px] font-[700] max-sm:text-[18px]'>
						{timeLeft.hours.toString().padStart(2, '0')}
					</span>
					<span className='block text-[#8b8b8e] font-[500] text-[16px] max-sm:text-[12px]'>
						H
					</span>
				</div>
				<span>:</span>
				<div className='text-center inline-block w-[72px] h-[72px] rounded-[12px] text-[40px] font-[700] bg-[hsla(0,0%,100%,.1)] mx-[20px] max-sm:w-[48px] max-sm:h-[48px] max-sm:rounded-[8px] max-sm:text-[18px] max-sm:pt-[6px] max-sm:mx-[10px]'>
					<span className='block text-center text-[36px] font-[700] max-sm:text-[18px]'>
						{timeLeft.minutes.toString().padStart(2, '0')}
					</span>
					<span className='block text-[#8b8b8e] font-[500] text-[16px] max-sm:text-[12px]'>
						M
					</span>
				</div>
				<span>:</span>
				<div className='text-center inline-block w-[72px] h-[72px] rounded-[12px] text-[40px] font-[700] bg-[hsla(0,0%,100%,.1)] mx-[20px] max-sm:w-[48px] max-sm:h-[48px] max-sm:rounded-[8px] max-sm:text-[18px] max-sm:pt-[6px] max-sm:mx-[10px]'>
					<span className='block text-center text-[36px] font-[700] max-sm:text-[18px]'>
						{timeLeft.seconds.toString().padStart(2, '0')}
					</span>
					<span className='block text-[#8b8b8e] font-[500] text-[16px] max-sm:text-[12px]'>
						S
					</span>
				</div>
			</div>
		</div>
	)
}

export default CountdownTimer
