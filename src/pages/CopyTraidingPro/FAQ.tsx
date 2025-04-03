const FAQ = () => {
	const questions = [
		'1. Advantages of copy trading',
		'2. Copier copy trading settings',
		'3. Trader-initiated copy trades',
	]

	return (
		<div className='flex justify-center py-[80px] max-sm:mx-[16px] max-sm:pt-[54px]'>
			<div className='content w-[1200px] max-sm:w-[full]'>
				<h2 className='title text-[32px] font-[700] border-b border-[rgba(119,121,137,.15)] pb-[16px] max-sm:text-[28px] text-white'>
					FAQ
				</h2>
				<div className='flex flex-col gap-[24px] pb-[120px] max-sm:gap-[3.2vw] max-sm:pb-[12vw]'>
					{questions.map((item, index) => (
						<a
							key={index}
							href={'/'}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-inherit p-[16px] text-[18px] font-[500] text-white rounded-[16px] max-sm:px-0 max-sm:py-[2.1vw]'
						>
							<div className='flex items-center'>
								<span className='font-medium'>{item}</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default FAQ
