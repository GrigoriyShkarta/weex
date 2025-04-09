import React from 'react'

const CallToAction: React.FC = () => {
	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]'>
			<div className=''>
				<h2 className='text-[24px] font-[500] max-sm:text-[6.4vw]'>
					Join WEEX Today and Start Your Ethereum Investment Journey!
				</h2>
				<a
					href='/register?forward_entry_source=%2Fhow-to-buy%2Fweex-token'
					className='mt-6 inline-block px-[50px] py-4 text-base rounded-[16px] bg-[#e6c325] text-black font-medium max-sm:w-full max-sm:text-center'
				>
					Buy Ethereum Now
				</a>
			</div>
		</div>
	)
}

export default CallToAction
