import { Link } from 'react-router-dom'

const DropdownMain = () => {
	return (
		<div className='absolute left-0 top-[45px] z-10 mx-auto gap-[10px] bg-[#222] text-white rounded-[24px] shadow-[0_2px_14px_0_rgba(0,0,0,0.12)] p-[20px] transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible'>
			<div className='flex'>
				<ul className='w-[300px] gap-[10px] flex flex-col'>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<Link
							to='/job'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'></div>
							<div className='flex flex-col items-start h-[70px]'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Career
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Witness the digital age with WEEX
								</div>
							</div>
						</Link>
					</li>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<Link
							to='/elite-trader'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'></div>
							<div className='flex flex-col items-start h-[70px]'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Become a Top Trader
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Share your strategies and earn rewards
								</div>
							</div>
						</Link>
					</li>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<a
							href='/job'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'></div>
							<div className='flex flex-col items-start h-[70px]'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Protection Fund
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Your security, our priority
								</div>
							</div>
						</a>
					</li>
				</ul>
				<ul className='w-[300px] gap-[10px] flex flex-col'>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<a
							href='/job'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'></div>
							<div className='flex flex-col items-start h-[70px]'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Official Verification
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-left'>
									Preventing phishing and fraud
								</div>
							</div>
						</a>
					</li>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<a
							href='/job'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'></div>
							<div className='flex flex-col items-start h-[70px]'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									WXT Zone
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Get free airdrops and exclusive perks weekly
								</div>
							</div>
						</a>
					</li>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<a
							href='/job'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'></div>
							<div className='flex flex-col items-start h-[70px]'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Affiliate
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Highest commissions in the industry
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default DropdownMain
