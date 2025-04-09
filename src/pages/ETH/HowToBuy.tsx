import { useState } from 'react'

const HowToBuy = () => {
	const [activeStep, setActiveStep] = useState('create')

	const guideSteps = [
		{
			id: 'create',
			title: 'Create Your Free WEEX Account',
			description:
				'Provide your email address or phone number. No KYC required!',
			image: 'https://www.weex.com/_pages/img/guide_en1.13565ca.png',
		},
		{
			id: 'make',
			title: 'Make a Quick Purchase',
			description: 'Use the "Buy Crypto" option on the WEEX homepage.',
			image: 'https://www.weex.com/_pages/img/guide_en2.78aa44f.png',
		},
		{
			id: 'enter',
			title: 'Enter Purchase Details',
			description:
				'Select Ethereum, enter the amount you want to buy, select your payment method, and review the exchange rate before confirming.',
			image: 'https://www.weex.com/_pages/img/guide_en3.c273875.png',
		},
		{
			id: 'complete',
			title: 'Complete Payment',
			description: 'Follow the prompts to complete your purchase securely.',
			image: 'https://www.weex.com/_pages/img/guide_en4.dc0fa91.png',
		},
		{
			id: 'view',
			title: 'View Your WXT',
			description:
				'Once successful, you can view your Ethereum by going to "Assets" > "Buy Crypto" > "Records" in the upper left corner.',
			image: 'https://www.weex.com/_pages/img/guide_en5.9401d71.png',
		},
	]

	const activeStepData = guideSteps.find(obj => obj.id === activeStep)

	return (
		<div id='HowTuBuy' className='mt-[80px] max-sm:mt-[40px]'>
			<h2 className='font-[500] text-[20px] max-sm:text-[4.2vw]'>
				Buy Ethereum on WEEX: A Step-by-Step Guide
			</h2>

			{/* Desktop Layout - Image on the right */}
			<div className='hidden md:flex justify-between mt-[24px]'>
				<div className='space-y-8 w-[546px]'>
					{guideSteps.map((step, index) => (
						<div
							key={step.id}
							className={`mb-[24px] p-[18px] rounded-[12px] border border-[#474747] cursor-pointer ${
								activeStep === step.id ? 'bg-[#333]' : 'bg-inherit'
							}`}
							onClick={() => setActiveStep(step.id)}
						>
							<div className='flex items-start gap-[8px]'>
								<span
									className={`w-[20px] h-[20px] text-[12px] rounded-[50%] text-center ${
										activeStep === step.id
											? 'bg-white text-black'
											: 'bg-[#333] text-white'
									}`}
								>
									{index + 1}
								</span>
								<h3 className='text-[16px] font-[500]'>{step.title}</h3>
							</div>

							<p className='mt-[16px] text-[14px] text-[#d1d1d2]'>
								{step.description}
							</p>
						</div>
					))}
				</div>

				<div className='flex items-center justify-center p-6'>
					<img
						src={activeStepData?.image}
						alt={activeStepData?.title}
						className='rounded-lg shadow-md max-w-full h-auto'
					/>
				</div>
			</div>

			{/* Mobile Layout - Image below active step */}
			<div className='md:hidden mt-[24px]'>
				{guideSteps.map((step, index) => (
					<div key={step.id}>
						<div
							className={`mb-[16px] p-[16px] rounded-[12px] border border-[#474747] cursor-pointer ${
								activeStep === step.id ? 'bg-[#333]' : 'bg-inherit'
							}`}
							onClick={() => setActiveStep(step.id)}
						>
							<div className='flex items-start gap-[8px]'>
								<span
									className={`w-[20px] h-[20px] text-[12px] rounded-[50%] text-center ${
										activeStep === step.id
											? 'bg-white text-black'
											: 'bg-[#333] text-white'
									}`}
								>
									{index + 1}
								</span>
								<h3 className='text-[16px] font-[500]'>{step.title}</h3>
							</div>

							<p className='mt-[12px] text-[14px] text-[#d1d1d2]'>
								{step.description}
							</p>
						</div>

						{/* Show image only for active step on mobile */}
						{activeStep === step.id && (
							<div className='mb-[24px] flex justify-center'>
								<img
									src={step.image}
									alt={step.title}
									className='rounded-lg shadow-md w-full'
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default HowToBuy
