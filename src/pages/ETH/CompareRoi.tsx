import React, { useState } from 'react'

const options = ['1 hour ago', '24 hours ago', '7 days ago']
const coin = ['Bitcoin', 'Ethereum', 'Solana', 'XRP', 'Dogecoin']

const CompareRoi: React.FC = () => {
	const [selectedTime, setSelectedTime] = useState(options[2])

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]'>
			<strong className='text-[20px] font-[500]'>
				<span>Compare the ROI of Ethereum to</span>
				<select
					className='w-[102px] h-[32px] leading-[32px] border border-[#474747] rounded-[8px] text-[12px]'
					value={selectedTime}
					onChange={e => setSelectedTime(e.target.value)}
				>
					{coin.map(option => (
						<option
							key={option}
							value={option}
							className='bg-[#222] text-white text-[12px]'
						>
							{option}
						</option>
					))}
				</select>
				<span>And See If It's the Right Investment for You</span>
			</strong>

			<div className='mt-[16px] text-[14px]'>
				<span>If you had invested $1,000 in Ethereum </span>
				<select
					className='w-[102px] h-[32px] leading-[32px] border border-[#474747] rounded-[8px] text-[12px]'
					value={selectedTime}
					onChange={e => setSelectedTime(e.target.value)}
				>
					{options.map(option => (
						<option
							key={option}
							value={option}
							className='bg-[#222] text-white text-[12px]'
						>
							{option}
						</option>
					))}
				</select>
				<span>
					, your returns would have been <strong>$33.6</strong> more compared to
					if you had invested the same amount in Bitcoin over the same period.
				</span>
			</div>
		</div>
	)
}

export default CompareRoi
