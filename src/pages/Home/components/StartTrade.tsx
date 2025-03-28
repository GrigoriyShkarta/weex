const StartTrade = () => {
	return (
		<div className='pt-[100px] w-[1200px] m-auto relative max-sm:w-full max-sm:pt-[56px] max-sm:pb-[48px]'>
			<h2 className='text-2xl font-bold text-white max-sm:hidden'>
				Copy Trading
			</h2>
			<div className='w-[740px] text-[56px] font-[500] text-white max-sm:w-[343px] max-sm:text-[24px] max-sm:mb-[24px] max-sm:mx-auto max-sm:text-center'>
				Never miss another market movement
			</div>
			<div className='text-[20px] text-[#8b8b8e] max-sm:text-[16px] max-sm:px-[16px]'>
				Save time and effort by copying top traders
			</div>

			<div className='flex justify-between mt-[48px] py-[32px] px-[16px] border-t border-b border-[#2e2e2e] max-sm:hidden'>
				<div className='num-item'>
					<div className='text-white text-[32px] font-bold mb-[16px]'>
						5,000+
					</div>
					<div className='text-[14px] text-[#d1d1d2]'>Professional traders</div>
				</div>
				<div className='num-item'>
					<div className='text-white text-[32px] font-bold mb-[16px]'>
						50,000+
					</div>
					<div className='text-[14px] text-[#d1d1d2]'>Copiers</div>
				</div>
				<div className='num-item'>
					<div className='text-white text-[32px] font-bold mb-[16px]'>
						$800,000,000+
					</div>
					<div className='text-[14px] text-[#d1d1d2]'>Copy trading volume</div>
				</div>
			</div>

			<a
				href='/copy-trading'
				className='mt-[24px] mx-[16px] h-[48px] leading-[48px] rounded-[16px] px-[24px] text-[16px] font-medium text-[#151515] flex justify-between items-center bg-white
             md:min-w-[192px] md:h-16 md:leading-[64px] md:rounded-[24px] md:px-6 md:text-lg md:absolute md:top-[140px] md:right-0'
			>
				Start Copy Trading
				<span className='w-6 inline-block'></span>
				<svg
					width='24'
					height='25'
					viewBox='0 0 24 25'
					fill='none'
					className='td-btn-arrow'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M11.8936 1.83334L22.453 12.3928L20.1903 14.6555L20.1902 14.6555L11.8933 22.9524L9.63053 20.6897L16.624 13.6962H3.23079L3.23079 10.4962L16.0309 10.4962L9.63081 4.09609L11.8936 1.83334Z'
						fill='#0F1115'
					/>
				</svg>
			</a>
		</div>
	)
}

export default StartTrade
