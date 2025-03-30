import { useState } from 'react'

const OfficialVerification = () => {
	const [inputValue, setInputValue] = useState('')
	const [error, setError] = useState('')
	const [countdown, setCountdown] = useState(0)

	const handleSearch = () => {
		if (!inputValue.trim()) {
			setError('Please enter something to verify')
			return
		}

		setError('')
		setCountdown(15)

		const timer = setInterval(() => {
			setCountdown(prev => {
				if (prev <= 1) {
					clearInterval(timer)
					return 0
				}
				return prev - 1
			})
		}, 1000)
	}

	return (
		<div className='bg-[#0f1115]'>
			<div className='h-[80vh] min-h-[720px] mx-auto text-white text-center bg-[linear-gradient(0deg,#0f1115,#0f1115,rgba(248,199,27,.1))] max-sm:min-h-auto'>
				<div className='w-[1200px] mx-auto pt-[175px] max-sm:w-full max-sm:px-[4.2vw] max-sm:pt-[14.9vw] '>
					<h1 className='flex items-center justify-center text-[40px] text-center font-[500] text-[#ffe82d] max-sm:text-[7.4vw]'>
						WEEX Official Verification Channel
					</h1>

					<p className='w-[832px] mt-[40px] mx-auto text-[16px] text-center max-sm:w-full max-sm:my-[6.4vw] max-sm:text-[4.2vw]'>
						Verify the authenticity of the URL, email, phone number, or Telegram
						account that you're in contact with to protect yourself from
						phishing and fraud.
					</p>

					<div className='flex items-center justify-center mt-[16px] text-[#777989] max-sm:flex-col max-sm:mt-[4.2vw] max-sm:text-[3.7vw]'>
						<p className=''>Please confirm that you are visiting:</p>
						<div className='flex'>
							<svg
								width='21'
								height='20'
								viewBox='0 0 21 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='mr-2'
							>
								<path
									d='M10.4414 1.26953C12.7282 1.26953 14.582 3.12336 14.582 5.41016V6.52344H15.8125C17.1932 6.52344 18.3125 7.64273 18.3125 9.02344V16.2109C18.3125 17.5916 17.1932 18.7109 15.8125 18.7109H5.1875C3.8068 18.7109 2.6875 17.5916 2.6875 16.2109V9.02344C2.6875 7.64273 3.8068 6.52344 5.1875 6.52344H6.30078V5.41016C6.30078 3.12336 8.15461 1.26953 10.4414 1.26953ZM10.4805 10.5664C10.1353 10.5664 9.85547 10.8462 9.85547 11.1914V14.0039C9.85547 14.3491 10.1353 14.6289 10.4805 14.6289C10.8256 14.6289 11.1055 14.3491 11.1055 14.0039V11.1914C11.1055 10.8462 10.8256 10.5664 10.4805 10.5664ZM10.4414 2.51953C8.84496 2.51953 7.55078 3.81371 7.55078 5.41016V6.52344H13.332V5.41016C13.332 3.81371 12.0379 2.51953 10.4414 2.51953Z'
									fill='#ADAFB8'
								/>
							</svg>
							<span className='font-medium'>www.weex.com</span>
						</div>
					</div>

					<div className='relative w-[875px] mt-[80px] mx-auto max-sm:w-full max-sm:my-[21.3vw]'>
						<div className='flex gap-[16px] max-sm:flex-col max-sm:gap-0'>
							<input
								type='text'
								maxLength={1000}
								placeholder='Enter what you wish to verify'
								className='inline-block w-[710px] h-[58px] py-[17px] px-[20px] text-[16px] text-white bg-[#1e2026] rounded-[8px] border-none outline-none max-sm:w-full max-sm:h-[10.6vw] max-sm:py-[4.5vw] max-sm:px-[8vw] max-sm:text-[3.2vw] max-sm:rounded-[2.1vw]'
								value={inputValue}
								onChange={e => setInputValue(e.target.value)}
							/>
							<button
								onClick={handleSearch}
								className='inline-block w-[136px] text-[18px] text-center bg-[#ffe82d] text-black font-[600] rounded-[8px] border-none outline-none max-sm:w-full max-sm:mt-[4.2vw] max-sm:text-[3.7vw] max-sm:rounded-[2.1vw] max-sm:h-[10.6vw]'
							>
								<span>Search</span>
								{countdown > 0 && <span className='ml-1'>({countdown}s)</span>}
							</button>
						</div>
						{error && <div className='text-red-500 text-sm mt-2'>{error}</div>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OfficialVerification
