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
							<div className='w-[34px] h-[34px] bg-orange'>
								<img
									src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBvcGFjaXR5PSIuNSIgY3g9IjE3IiBjeT0iMTcuNSIgcj0iMTMuNDU4IiBmaWxsPSIjRjhDNzFCIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC4yODQgMjUuNTg2YTIgMiAwIDAxLTIuNjExLS4wMDZsLTIuNjI3LTIuMjc1YTIgMiAwIDAxLS41OTEtMi4xMzRsMi4xMDItNi40MjcuMDIzLS4wNzdoNC44NjFsLjAyLjA2MyAyLjA4NiA2LjQzN2EyIDIgMCAwMS0uNiAyLjEzNWwtMi42NjMgMi4yODR6bTEuMjczLTEyLjMzNmgtNS4xbC0uOTQxLTIuMTM5YTEgMSAwIDAxLjkxNS0xLjQwM2g1LjEyMmExIDEgMCAwMS45MiAxLjM5M2wtLjkxNiAyLjE0OXoiIGZpbGw9IiNGOEM3MUIiLz48L3N2Zz4='
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
							</div>
							<div className='flex flex-col items-start'>
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
							<div className='w-[34px] h-[34px] bg-orange'>
								<img
									src='https://www.weex.com/_nuxt/img/icon_zhaomu_v1.9c2cf27.svg'
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
							</div>
							<div className='flex flex-col items-start'>
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
						<Link
							to='/protectfund'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'>
								<img
									src='https://www.weex.com/_nuxt/img/icon_dun_v1.13e8919.svg'
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
							</div>
							<div className='flex flex-col items-start'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Protection Fund
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Your security, our priority
								</div>
							</div>
						</Link>
					</li>
				</ul>
				<ul className='w-[300px] gap-[10px] flex flex-col'>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<Link
							to='/official-verification'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'>
								<img
									src='https://www.weex.com/_nuxt/img/icon_guanfang_v1.d8fa78d.svg'
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
							</div>
							<div className='flex flex-col items-start '>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Official Verification
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-left'>
									Preventing phishing and fraud
								</div>
							</div>
						</Link>
					</li>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<Link
							to='/wxt'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'>
								<img
									src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTciIGN5PSIxOCIgcj0iMTIuNSIgZmlsbD0iI0UyQkQyMiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuOTQ4IDE5LjcyM2wyLjM5OC0yLjQyN0wxNyAxMy44MzRsLTMuMzQ2IDMuNDYyIDIuMzk4IDIuNDItMS41IDEuNTI0LTQuMDAzLTMuOTQ0IDEuODM1LTEuODY4aDEuNjM3bDEuMjQtMS4zNDNoLTMuNDcybC0zLjEyMiAzLjIxMSA1Ljg4NSA1Ljc2NCAyLjQ0OC0yLjM3OCAyLjQ0OSAyLjM4NSA1Ljg4NS01Ljc3LTMuMTIyLTMuMjA1aC0zLjQ3MmwxLjI0IDEuMzQzaDEuNjM3bDEuODM1IDEuODYxLTQuMDAzIDMuOTUxLTEuNS0xLjUyNHptLS45NS0xLjA1OWwtMS4zOTQtMS4zNjlMMTcgMTUuODIybDEuMzk0IDEuNDc0TDE3IDE4LjY2M3oiIGZpbGw9IiMwMDAiLz48L3N2Zz4='
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
							</div>
							<div className='flex flex-col items-start '>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									WXT Zone
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Get free airdrops and exclusive perks weekly
								</div>
							</div>
						</Link>
					</li>
					<li className='pl-[16px] h-[70px] pointer rounded-[10px] hover:bg-[#333]'>
						<Link
							to='/affiliate'
							className='flex items-center gap-3 py-2 hover:opacity-80 h=[70px] w-[284px]'
						>
							<div className='w-[34px] h-[34px] bg-orange'>
								<img
									src='https://www.weex.com/_nuxt/img/icon_affiliate_v1.84a0dad.svg'
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
							</div>
							<div className='flex flex-col items-start'>
								<div className='font-semibold h-[22px] text-[16px] mt-[6px]'>
									Affiliate
								</div>
								<div className='text-sm opacity-70 color-[#777989] text-[12px] text-left'>
									Highest commissions in the industry
								</div>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default DropdownMain
