const Banner = () => {
	return (
		<div className='relative bg-[#222] pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#1F1F1F] flex justify-center max-sm:pb-0'>
			<div className='flex justify-between w-[1200px] mx-auto max-sm:w-full max-sm:flex-col-reverse max-sm:items-center'>
				{/* Left Side */}
				<div className='w-[575px] max-sm:w-[91.4vw]'>
					<div className='flex items-center mt-[119px] gap-[16px] max-sm:mt-[5.3vw]'>
						<h1 className='text-[56px] font-[700] text-white max-sm:text-[9.6vw]'>
							WE-Launch
						</h1>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMjhWMjkuMzMzM0MxMy4zMzMzIDMxLjU0MjUgMTUuMTI0MSAzMy4zMzMzIDE3LjMzMzMgMzMuMzMzM0gzMC42NjY2QzMyLjg3NTcgMzMuMzMzMyAzNC42NjY2IDMxLjU0MjUgMzQuNjY2NiAyOS4zMzMzVjI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjkuMzMzMyAxOEgyNC42NjY2QzIwLjYxNjUgMTggMTcuMzMzMyAyMS4yODMyIDE3LjMzMzMgMjUuMzMzM1YyNS4zMzMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuMTYxNCAxMy4zMzMzTDMwLjk5MDEgMTguMTYyTDI2LjE2MTQgMjIuOTkwNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=='
							alt='Share'
							className='w-[48px] h-[48px]'
						/>
					</div>

					<p className='text-white text-[20px] mt-[12px] max-sm:text-[4.2vw] max-sm:mt-[4.2vw]'>
						Hold WXT to earn free airdrops weekly!
					</p>

					<div className='flex mt-[80px] justify-between max-sm:mt-[6.4vw] max-sm:flex-col max-sm:gap-[4.2vw]'>
						<div className='max-sm:flex max-sm:justify-between max-sm:items-center'>
							<p className='text-[#8b8b8e] text-[16px]'>Ongoing projects</p>
							<p className='text-[30px] font-bold text-white mt-[16px] max-sm:text-[5.3vw] max-sm:mt-0'>
								2
							</p>
						</div>
						<div className='max-sm:flex max-sm:justify-between max-sm:items-center'>
							<p className='text-[#8b8b8e] w-fit text-[16px] border-b border-dashed border-[#8b8b8e]'>
								Amount
							</p>
							<p className='text-[30px] font-bold text-white mt-[16px] max-sm:text-[5.3vw] max-sm:mt-0'>
								990,315,877
							</p>
						</div>
					</div>

					<div className='bg-[#333] rounded-[24px] p-[40px] mb-[32px] mt-[80px] max-sm:py-[6.4vw] max-sm:px-[4.2vw]'>
						<div className='text-white mb-[32px] max-sm:my-[8.5vw]'>
							<strong className='font-[700] text-[20px]'>
								Hold WXT to enjoy new token airdrops
							</strong>
							<button className='flex items-center cursor-pointer hover:opacity-[0.8] text-[14px]'>
								Learn more
								<img
									src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgb3BhY2l0eT0iMC4wMSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRDhEOEQ4Ii8+CjxwYXRoIGQ9Ik02IDRMMTAgOEw2IDEyIiBzdHJva2U9IiNGQ0M3MUIiIHN0cm9rZS13aWR0aD0iMS4zMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
									alt=''
									className='ml-2 w-4 h-4'
								/>
							</button>
						</div>
						<div className='flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-[8.5vw]'>
							<div>
								<p className='text-[#8b8b8e] text-[16px] font-[500]'>
									My WXT holding
								</p>
								<p className='text-[24px] font-[700] mt-[7px] text-white'>
									-- WXT
								</p>
							</div>
							<button className='font-[500] w-[160px] h-[48px] flex items-center justify-center bg-white rounded-[16px] text-[14px] text-black text-center cursor-pointer border-none max-sm:w-full'>
								<a href='/trade/WXT-USDT' className='text-black'>
									Buy WXT
								</a>
							</button>
						</div>
					</div>
				</div>

				{/* Right Side - Banner */}
				<div className='mt-[119px] w-[504px] h-[441px] max-sm:w-[80vw] max-sm:h-[63.4vw] max-sm:mt-[5.3vw]'>
					<img
						src='https://www.weex.com/_nuxt/img/banner_black.0da0d40.png'
						alt='WE-Launch Banner'
						className='w-full h-auto rounded-xl'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner
