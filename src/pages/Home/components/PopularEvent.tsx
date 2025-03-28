const PopularEvent = () => {
	return (
		<div className='theme-black home-box'>
			<div className='max-w-6xl mx-auto mt-auto mb-[64px] px-4 sm:px-0'>
				<h2 className='text-2xl md:text-3xl font-bold text-white mt-[118px] mb-[32px]'>
					Popular events
				</h2>

				<section className='flex gap-6 overflow-x-auto pb-4 sm:gap-[24px] sm:overflow-visible'>
					{/* Event Card 1 */}
					<a
						href='/'
						target='_blank'
						className='flex-shrink-0 box-border block w-[311px] sm:w-[384px] p-4 sm:p-6 rounded-2xl border border-[#2e2e34] relative cursor-pointer text-white h-[222px] sm:h-auto'
					>
						<div className='flex justify-between h-[calc(222px-80px)] sm:h-[200px]'>
							<section className='w-[140px] sm:w-[177px]'>
								<h3 className='text-lg sm:text-xl font-[500] text-white mb-4 sm:mb-[24px]'>
									WWFC
								</h3>
								<div className='text-xl sm:text-[24px]'>800,000 USDT</div>
								<p className='text-xs sm:text-[14px] text-[#8b8b8e]'>
									Team Up to get 5 - 20 USDT Each
								</p>
							</section>
							<section className='flex items-center justify-center'>
								<img
									src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/4be9d4de61be2a1150186417a5a2f3c9.png'
									alt='WWFC Event'
									className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]'
								/>
							</section>
						</div>
						<button className='absolute bottom-4 left-4 right-4 sm:bottom-[24px] sm:w-[148px] h-10 rounded-xl bg-white text-sm font-medium leading-10 text-center cursor-pointer text-[#161616] font-sans hover:bg-[#e6e6e6]'>
							Join Now
						</button>
					</a>

					{/* Event Card 2 */}
					<a
						href='/'
						target='_blank'
						className='flex-shrink-0 box-border block w-[311px] sm:w-[384px] p-4 sm:p-6 rounded-2xl border border-[#2e2e34] relative cursor-pointer text-white h-[222px] sm:h-auto'
					>
						<div className='flex justify-between h-[calc(222px-80px)] sm:h-[200px]'>
							<section className='w-[140px] sm:w-[177px]'>
								<h3 className='text-lg sm:text-xl font-[500] text-white mb-4 sm:mb-[24px]'>
									Welcome Bonus
								</h3>
								<div className='text-xl sm:text-[24px]'>30,000 USDT</div>
								<p className='text-xs sm:text-[14px] text-[#8b8b8e]'>
									Kickstart your trading journey
								</p>
							</section>
							<section className='flex items-center justify-center'>
								<img
									src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/4ef440f446a44227057981eea6b67487.png'
									alt='WWFC Event'
									className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]'
								/>
							</section>
						</div>
						<button className='absolute bottom-4 left-4 right-4 sm:bottom-[24px] sm:w-[148px] h-10 rounded-xl bg-white text-sm font-medium leading-10 text-center cursor-pointer text-[#161616] font-sans hover:bg-[#e6e6e6]'>
							Join Now
						</button>
					</a>

					{/* Event Card 3 */}
					<a
						href='/'
						target='_blank'
						className='flex-shrink-0 box-border block w-[311px] sm:w-[384px] p-4 sm:p-6 rounded-2xl border border-[#2e2e34] relative cursor-pointer text-white h-[222px] sm:h-auto'
					>
						<div className='flex justify-between h-[calc(222px-80px)] sm:h-[200px]'>
							<section className='w-[140px] sm:w-[177px]'>
								<h3 className='text-lg sm:text-xl font-[500] text-white mb-4 sm:mb-[24px]'>
									Daily Spin to Win
								</h3>
								<div className='text-xl sm:text-[24px]'>600,000 USDT</div>
								<p className='text-xs sm:text-[14px] text-[#8b8b8e]'>
									The chance to win BTC and 2,025 XRP!
								</p>
							</section>
							<section className='flex items-center justify-center'>
								<img
									src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/135ff0a0a71eb0e77f21aa95664fc153.png'
									alt='WWFC Event'
									className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]'
								/>
							</section>
						</div>
						<button className='absolute bottom-4 left-4 right-4 sm:bottom-[24px] sm:w-[148px] h-10 rounded-xl bg-white text-sm font-medium leading-10 text-center cursor-pointer text-[#161616] font-sans hover:bg-[#e6e6e6]'>
							Join Now
						</button>
					</a>
				</section>
			</div>
		</div>
	)
}

export default PopularEvent
