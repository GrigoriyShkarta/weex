const TradeNow = () => {
	return (
		<section className='bg-black py-16 px-4 max-sm:hidden'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
						Trade Now
					</h2>
					<p className='text-white mb-8 text-lg'>
						Sign up in 10 seconds to explore endless trading possibilities
					</p>
					<a
						href='register.html'
						className='inline-flex items-center justify-between text-[20px] bg-white hover:bg-[#e6e6e6] text-gray-900 font-medium py-3 px-6 rounded-[24px] transition-colors duration-200 h-[64px] min-w-[172px]'
					>
						<span>Sign Up</span>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='ml-2'
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
			</div>
		</section>
	)
}

export default TradeNow
