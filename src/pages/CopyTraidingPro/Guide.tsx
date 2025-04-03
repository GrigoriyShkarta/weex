const TraderGuide = () => {
	return (
		<section className='w-[1200px] mx-auto pt-[140px] pb-[80px] max-sm:w-full max-sm:px-[4.2vw] max-sm:py-[20px]'>
			<h2 className='text-[40px] font-bold max-sm:text-[32px] max-sm:text-center'>
				Copy trades with ease
			</h2>

			<div className='flex mt-[48px] gap-[48px] max-sm:flex-col'>
				{/* Guide Item 1 */}
				<div className='text-center flex-1'>
					<img
						src='https://www.weex.com/_trade/img/guide1.376d0f2.png'
						alt='Select traders'
						className='w-[120px] h-[120px] mx-auto mb-4'
					/>
					<h3 className='mt-[40px] text-[24px] '>Select the right traders</h3>
					<p className='text-[#8b8b8e] mt-[12px]'>
						Select the right traders for you through recommendations, overall
						rankings, or manual search.
					</p>
				</div>

				{/* Guide Item 2 */}
				<div className='text-center flex-1'>
					<img
						src='https://www.weex.com/_trade/img/guide2.06390f5.png'
						alt='Set parameters'
						className='w-[120px] h-[120px] mx-auto mb-4'
					/>
					<h3 className='mt-[40px] text-[24px]'>Set your parameters</h3>
					<p className='text-[#8b8b8e] mt-[12px]'>
						Set the trading pairs, leverage mode, amount, and risk control
						parameters most suited for you.
					</p>
				</div>

				{/* Guide Item 3 */}
				<div className='text-center flex-1'>
					<img
						src='https://www.weex.com/_trade/img/guide3.1efdf80.png'
						alt='Start copying'
						className='w-[120px] h-[120px] mx-auto mb-4'
					/>
					<h3 className='mt-[40px] text-[24px]'>Get copying</h3>
					<p className='text-gr[#8b8b8e] mt-[12px]'>
						Copy trades in real-time.
					</p>
				</div>
			</div>
		</section>
	)
}

export default TraderGuide
