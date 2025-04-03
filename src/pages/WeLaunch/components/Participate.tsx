const Participate = () => {
	return (
		<div className='bg-[#151515] flex justify-center'>
			<div className='w-[1200px] py-[80px] max-sm:w-full max-sm:pt-0 max-sm:px-[4.2vw] max-sm:mb-[6.4vw]'>
				<div className='flex justify-between items-center mb-[103px] max-sm:mb-[4.2vw]'>
					<h2 className='text-[40px] font-[700] text-white max-sm:text-[6.4vw]'>
						How to Participate
					</h2>
					<a
						href='https://weexsupport.zendesk.com/hc/en-us/articles/31221048989849'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center text-[#F8C71B] hover:text-[#F8A71C]'
					>
						<span>FAQ</span>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDYgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEuNUw1IDUuNUwxIDkuNSIgc3Ryb2tlPSIjRjhDNzFCIiBzdHJva2Utd2lkdGg9IjEuMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
							alt=''
							className='ml-2 w-3 h-3'
						/>
					</a>
				</div>

				<div className='flex justify-between max-sm:flex-col max-sm:gap-[4.2vw]'>
					<div className='relative w-[33.33%] flex flex-col items-center bg-transparent max-sm:w-full max-sm:bg-[#222] max-sm:rounded-[6.4vw] max-sm:py-[6.4vw] max-sm:px-[4.2vw]'>
						<div className=''>
							<img
								src='https://www.weex.com/_nuxt/img/black_ways_step1.c3a2ade.svg'
								alt='img'
							/>
						</div>
						<h3 className='text-[30px] font-[700] text-white mt-[40px] max-sm:mb-[4.2vw]'>
							Buy
						</h3>
						<p className='text-[#8b8b8e] mt-[16px] px-[12px] text-center'>
							Buy at least 1,000 WXT
						</p>
						<div className='absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 hidden md:block'>
							<svg
								width='82'
								height='11'
								viewBox='0 0 82 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 10C3 10 38.1667 10 80.5 10L64 1'
									stroke='#2E2E2E'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>

					<div className='relative w-[33.33%] flex flex-col items-center bg-transparent max-sm:w-full max-sm:bg-[#222] max-sm:rounded-[6.4vw] max-sm:py-[6.4vw] max-sm:px-[4.2vw]'>
						<div className=''>
							<img
								src='https://www.weex.com/_nuxt/img/black_ways_step1.c3a2ade.svg'
								alt='img'
							/>
						</div>
						<h3 className='text-[30px] font-[700] text-white mt-[40px]'>
							Commit
						</h3>
						<p className='text-[#8b8b8e] mt-[16px] px-[12px] text-center'>
							Use the "Quick Commit" button to participate in the event (your
							WXT will not be locked up during the event).
						</p>
						<div className='absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 hidden md:block'>
							<svg
								width='82'
								height='11'
								viewBox='0 0 82 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 10C3 10 38.1667 10 80.5 10L64 1'
									stroke='#2E2E2E'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>

					<div className='relative w-[33.33%] flex flex-col items-center bg-transparent max-sm:w-full max-sm:bg-[#222] max-sm:rounded-[6.4vw] max-sm:py-[6.4vw] max-sm:px-[4.2vw]'>
						<div className=''>
							<img
								src='https://www.weex.com/_nuxt/img/black_ways_step1.c3a2ade.svg'
								alt='img'
							/>
						</div>
						<h3 className='text-[30px] font-[700] text-white mt-[40px]'>
							Claim
						</h3>
						<p className='text-[#8b8b8e] mt-[16px] px-[12px] text-center'>
							Receive token airdrop reward.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Participate
