import React from 'react'

const VipPerks: React.FC = () => {
	return (
		<div className='bg-[#151515] text-white max-sm:px-[4.2vw]'>
			{/* Main Module */}
			<div className='flex pt-[80px] w-[1200px] mx-auto justify-between max-sm:w-full max-sm:flex-col-reverse max-sm:text-center max-sm:pt-0'>
				<div className='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:mt-[25px] max-sm:items-center max-sm:text-center max-sm:w-full'>
					<h2 className='text-[56px] text-[#ffe9ab] font-[700] max-sm:text-[28px]'>
						WEEX VIP perks
					</h2>
					<p className='text-[24px] mt-[16px] max-sm:text-[20px]'>
						Become a WEEX VIP
						<br />
						Unlock exclusive perks on your WEEX journey
					</p>
					<div className='w-[321px] rounded-[40px] bg-[#222] mt-[40px] py-[20px] px-[25px] flex justify-between items-center max-sm:h-[24px] max-sm:w-full max-sm:justify-center max-sm:gap-16px'>
						<h5 className='text-[20px] text-[#d1d1d2] max-sm:text-[14px]'>
							My VIP level:
						</h5>
						<img
							src='https://www.weex.com/_trade/img/borderless_vip_lvl0.e31b273.svg'
							alt='No VIP'
							className='h-8 max-sm:w-[75.6px]'
						/>
					</div>
				</div>
				<div className='flex-1 flex'>
					<img
						src='https://www.weex.com/_trade/img/main-banner-vip.e91c9dd.png'
						alt='VIP banner'
						className='max-w-full h-auto'
					/>
				</div>
			</div>

			{/* Data Overview */}
			<div className='flex justify-center pb-[120px] w-[1200px] mx-auto flex-col max-sm:w-full max-sm:pt-[40px] max-sm:pb-[50px]'>
				<h5 className='text-[40px] font-medium mb-[40px] max-sm:text-[24px] max-sm:mb-[24px]'>
					Data overview
				</h5>
				<div className='w-full h-[264px] flex justify-between gap-[32px] max-sm:flex-col max-sm:h-auto'>
					<div className='border border-[#737373] p-[48px] rounded-[24px] flex flex-col gap-[40px]'>
						<div className='w-[350px] flex flex-col gap-[8px]'>
							<h6 className='text-[16px] text-[#8b8b8e] max-sm:text-[14px]'>
								Futures trading volume (USDT)
							</h6>
							<p className='text-[32px] max-sm:text-[24px]'>0</p>
						</div>
						<div className='w-[350px] flex flex-col gap-[8px]'>
							<h6 className='text-[16px] text-[#8b8b8e] max-sm:text-[14px]'>
								WXT holding volume
							</h6>
							<p className='text-[32px] max-sm:text-[24px]'>0</p>
						</div>
					</div>
					<div className='border border-[#737373] p-[48px] rounded-[24px] flex flex-col'>
						<h6 className='text-[14px]'>Current futures trading fees</h6>
						<div className='border-t border-[#282828] my-[16px]'></div>
						<div className='flex justify-between items-center py-[23.5px] px-[8px] gap-[201px] max-sm:pt-[8px] max-sm:px-[8px] max-sm:pb-[8px] max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:gap-[16px]'>
							<div className='flex items-center gap-[16px]'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2'
								>
									<path
										d='M16.5526 17.0111L21 22H6C4.34315 22 3 20.6569 3 19V5.5C3 3.84315 4.34315 2.5 6 2.5H18C19.6569 2.5 21 3.84315 21 5.5V12.8889'
										stroke='white'
										strokeWidth='2.4'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M14.8801 9.10004H9.12015C8.72225 9.10004 8.40015 9.36867 8.40015 9.70004C8.40015 10.0314 8.72225 10.3 9.12015 10.3H14.8801C15.278 10.3 15.6001 10.0314 15.6001 9.70004C15.6001 9.36867 15.278 9.10004 14.8801 9.10004Z'
										stroke='white'
										strokeWidth='1.2'
									/>
								</svg>
								<span>Maker</span>
							</div>
							<div className='flex items-center gap-[16px] max-sm: ml-[50px]'>
								<span className='min-w-[130px] text-[16px] max-sm:min-w-[72px]'>
									0.020%
								</span>
								<span className='text-gray-500 min-w-[130px] text-[16px] max-sm:min-w-[72px]'>
									0.020%
								</span>
							</div>
						</div>
						<div className='border-t border-[#282828] my-[4px]'></div>
						<div className='flex justify-between items-center py-[23.5px] px-[8px] gap-[201px] max-sm:pt-[8px] max-sm:px-[8px] max-sm:pb-[8px] max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:gap-[16px]'>
							<div className='flex items-center gap-[16px]'>
								<svg
									width='24'
									height='25'
									viewBox='0 0 24 25'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='mr-2'
								>
									<g clipPath='url(#clip0_3212_64650)'>
										<path
											d='M16.4474 18.0111L12 23H18C19.6569 23 21 21.6569 21 20V6.5C21 4.84315 19.6569 3.5 18 3.5H6C4.34315 3.5 3 4.84315 3 6.5V19.8889C3 21.5457 4.34315 22.8889 6 22.8889H6.03449'
											stroke='white'
											strokeWidth='2.4'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M14.8801 10.1H9.12015C8.72225 10.1 8.40015 10.3686 8.40015 10.7C8.40015 11.0314 8.72225 11.3 9.12015 11.3H14.8801C15.278 11.3 15.6001 11.0314 15.6001 10.7C15.6001 10.3686 15.278 10.1 14.8801 10.1Z'
											stroke='white'
											strokeWidth='1.2'
										/>
									</g>
									<defs>
										<clipPath id='clip0_3212_64650'>
											<rect
												width='24'
												height='24'
												fill='white'
												transform='translate(0 0.5)'
											/>
										</clipPath>
									</defs>
								</svg>
								<span>Taker</span>
							</div>
							<div className='flex items-center gap-[16px] max-sm: ml-[50px]'>
								<span className='min-w-[130px] text-[16px] max-sm:min-w-[72px]'>
									0.080%
								</span>
								<span className='text-gray-500 min-w-[130px] text-[16px] max-sm:min-w-[72px]'>
									0.080%
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Fee Table */}
			<div className='w-[1200px] mx-auto pb-[40px] max-sm:w-full max-sm:'>
				<div className='flex items-center gap-[16px] mb-[40px]'>
					<h1 className='text-[40px] font-[700] max-sm:mb-[16px] max-sm:text-[16px]'>
						Futures fee rate info
					</h1>
					<img
						src='https://www.weex.com/_trade/img/vip_tips_web.44369c7.svg'
						alt='Info'
						className='h-5 w-5'
					/>
				</div>

				<div className='w-full overflow-hidden'>
					<div className='max-sm:overflow-x-auto max-sm:w-full'>
						{/* Table Header */}
						<div className='grid grid-cols-5 gap-2 bg-[#222] py-[13.7px] font-medium place-items-center text-center min-w-[800px]'>
							<div>Level</div>
							<div>30-d futures volume (USDT)</div>
							<div>and/or</div>
							<div>Quantity of WXT held for 1 consecutive day(s)</div>
							<div>Taker/Maker fee</div>
						</div>

						{/* Table Rows */}
						<div className='max-sm:overflow-x-auto'>
							{[
								{
									level: 'VIP0',
									volume: '≥ 0',
									wxt: '≥ 0',
									fee: '0.080% / 0.020%',
								},
								{
									level: 'VIP1',
									volume: '≥ 3,000,000',
									wxt: '≥ 5,000',
									fee: '0.072% / 0.018%',
								},
								{
									level: 'VIP2',
									volume: '≥ 5,000,000',
									wxt: '≥ 50,000',
									fee: '0.060% / 0.015%',
								},
								{
									level: 'VIP3',
									volume: '≥ 10,000,000',
									wxt: '≥ 250,000',
									fee: '0.052% / 0.013%',
								},
								{
									level: 'VIP4',
									volume: '≥ 30,000,000',
									wxt: '≥ 500,000',
									fee: '0.048% / 0.012%',
								},
								{
									level: 'VIP5',
									volume: '≥ 50,000,000',
									wxt: '≥ 1,000,000',
									fee: '0.044% / 0.011%',
								},
								{
									level: 'VIP6',
									volume: '≥ 100,000,000',
									wxt: '≥ 1,500,000',
									fee: '0.040% / 0.010%',
								},
								{
									level: 'VIP7',
									volume: '≥ 300,000,000',
									wxt: '≥ 2,500,000',
									fee: '0.032% / 0.008%',
								},
								{
									level: 'VIP8',
									volume: '≥ 500,000,000',
									wxt: '≥ 3,500,000',
									fee: '0.024% / 0.006%',
								},
							].map((row, index) => (
								<div
									key={index}
									className='grid grid-cols-5 gap-2 p-3 border border-[#2e2e2e] py-[13.7px] text-center min-w-[600px]'
								>
									<div>{row.level}</div>
									<div>{row.volume}</div>
									<div>or</div>
									<div>{row.wxt}</div>
									<div>{row.fee}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VipPerks
