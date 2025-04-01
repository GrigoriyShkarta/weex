import React from 'react'

interface TaskItem {
	label: string
	value: number
	icon: string
	multiplier: number
	currencyIcon?: string
	threshold?: string
}

interface TaskSection {
	title: string
	icon: string
	tooltip: string
	buttonText: string
	items: {
		type: 'single' | 'double' | 'multiple'
		daily?: TaskItem[]
		cumulative?: TaskItem[]
		leftContent?: {
			label: string
			value: number
		}
		centerContent?: string
		rightContent?: {
			icon: string
			multiplier: number
		}
		items?: {
			leftContent?: {
				label: string
				value: number
			}
			centerContent?: string
			rightContent?: {
				icon: string
				multiplier: number
			}
		}[]
	}[]
}

const TaskComponent: React.FC = () => {
	const tasks: TaskSection[] = [
		{
			title: 'Futures trading',
			icon: 'https://www.weex.com/static/images/lottery/icon_futures_trading.svg',
			tooltip:
				'Reach the daily required futures trading volume or the required total futures trading volume to get spin chances. Each user can only claim the first-trade reward once.',
			buttonText: 'Trade Now',
			items: [
				{
					type: 'multiple',
					daily: [
						{
							label: '10K',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 2,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '50K',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 2,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '100K',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 2,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '300K',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 2,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '500K',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 2,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '1M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 3,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '3M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 3,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
					],
					cumulative: [
						{
							label: '10M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 3,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '30M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 3,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '50M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 3,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '100M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 3,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '300M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 5,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
						{
							label: '500M',
							value: 0,
							icon: '/static/images/lottery/draw_icon_gray.png',
							multiplier: 5,
							currencyIcon: '/static/images/lottery/ordi_icon.png',
						},
					],
				},
			],
		},
		{
			title: 'Spot trading',
			icon: 'https://www.weex.com/static/images/lottery/icon_spot_trading.svg',
			tooltip:
				'Reach the daily required spot trading volume or the required total spot trading volume to get spin chances. Each user can only claim the first-trade reward once.',
			buttonText: 'Trade Now',
			items: [
				{
					type: 'double',
					items: [
						{
							leftContent: { label: 'Daily', value: 0 },
							centerContent: 'Spot trading volume ≥ 200 USDT',
							rightContent: {
								icon: '/static/images/lottery/draw_icon_gray.png',
								multiplier: 1,
							},
						},
						{
							leftContent: { label: 'Daily', value: 0 },
							centerContent: 'Spot trading volume ≥ 2,000 USDT',
							rightContent: {
								icon: '/static/images/lottery/draw_icon_gray.png',
								multiplier: 1,
							},
						},
					],
				},
			],
		},
		{
			title: 'Invite',
			icon: 'https://www.weex.com/static/images/lottery/icon_invite_friends.svg',
			tooltip:
				'Invite friends and win spin chances when your invited friends complete their deposit and trading tasks (if any).',
			buttonText: 'Invite Now',
			items: [
				{
					type: 'double',
					items: [
						{
							leftContent: { label: 'Cumulative', value: 0 },
							centerContent:
								'Invite ≥ 3 new users\nTrading volume ≥ 500 USDT\nNet deposit ≥ 50 USDT',
							rightContent: {
								icon: '/static/images/lottery/draw_icon_gray.png',
								multiplier: 2,
							},
						},
						{
							leftContent: { label: 'Cumulative', value: 0 },
							centerContent:
								'Invite ≥ 5 new users\nTrading volume ≥ 500 USDT\nNet deposit ≥ 50 USDT',
							rightContent: {
								icon: '/static/images/lottery/draw_icon_gray.png',
								multiplier: 3,
							},
						},
					],
				},
			],
		},
	]

	return (
		<div className='mt-[32px] w-[1200px] mx-auto max-sm:w-full max-sm:px-[16px] max-sm:mb-[30px]'>
			{tasks.map((section, sectionIndex) => (
				<div
					key={sectionIndex}
					className='border border-[#2e2e2e] rounded-[32px] mb-[40px] p-[32px] max-sm:py-[24px] max-sm:px-[16px]'
				>
					<div className='flex items-center justify-between pb-[24px]'>
						<div className='flex items-center'>
							<img
								src={section.icon}
								alt={section.title}
								className='w-[56px] h-[56px] max-sm:w-[32px] max-sm:h-[32px]'
							/>
							<span className='px-[12px] text-[32px] font-[700] text-white max-sm:pl-[6px] max-sm:text-[20px] max-sm:text-nowrap'>
								{section.title}
							</span>
							<img
								src='https://www.weex.com/static/images/lottery/tip_icon.png'
								alt='info'
								width={20}
								height={20}
								className='w-5 h-5'
								title={section.tooltip}
							/>
						</div>
						<button className='w-[160px] bg-transparent rounded-[24px] border border-[#e2bd22] text-[#e2bd22] h-[48px] cursor-pointer hover:bg-[#e2bd22] hover:text-black max-sm:hidden'>
							{section.buttonText}
						</button>
					</div>

					{section.items.map((item, itemIndex) => (
						<div key={itemIndex} className='space-y-4'>
							{item.type === 'multiple' && (
								<>
									<div className='flex justify-between items-center p-3 bg-[#222] rounded-[16px] py-[24px] px-[40px] max-sm:flex-col max-sm:p-[12px]'>
										<div className='flex space-x-3 flex-col max-sm:w-full max-sm:mb-[20px] max-sm:flex-row max-sm:justify-between max-sm:items-center'>
											<span className='text-[16px] font-[500] text-[#8b8b8e]'>
												Daily
											</span>
											<h3 className='text-[32px] text-white font-bold'>0</h3>
										</div>
										<div className='flex items-center justify-around w-[80%] relative max-sm:w-full'>
											{item.daily?.map((dailyItem, dailyIndex) => (
												<div
													key={dailyIndex}
													className='flex items-center flex-col text-[16px] font-[700] mx-[12px] max-sm:w-[64px] max-sm:h-[64px] max-sm:m-0'
												>
													<div className='flex items-center h-[30px] text-[#8b8b8e] max-sm:justify-center'>
														<img
															src='https://www.weex.com/static/images/lottery/draw_icon_gray.png'
															alt='draw'
															width={16}
															height={16}
															className='w-4 h-4'
														/>
														<span>×</span>
														<span>{dailyItem.multiplier}</span>
													</div>
													{dailyItem.currencyIcon && (
														<img
															src='https://www.weex.com/static/images/lottery/ordi_icon.png'
															alt='currency'
															width={16}
															height={16}
															className='pb-[3px]'
														/>
													)}
													<span className='text-[16px] text-[#8b8b8e] inline-block h-[24px]'>
														{dailyItem.label}
													</span>
												</div>
											))}
											<div className='absolute top-[37px] inline-block left-0 h-[1px] w-full bg-white opacity-[0.2] max-sm:top-[32px]' />
										</div>
									</div>

									<div className='flex justify-between items-center p-3 bg-[#222] rounded-[16px] py-[24px] px-[40px] max-sm:flex-col max-sm:p-[12px]'>
										<div className='flex space-x-3 flex-col max-sm:flex-row max-sm:justify-between w-full max-sm:items-center max-sm:mb-[20px]'>
											<span className='text-[16px] font-[500] text-[#8b8b8e]'>
												Cumulative
											</span>
											<h3 className='text-[32px] text-white font-bold'>0</h3>
										</div>
										<div className='flex items-center justify-around w-[80%] relative max-sm:w-full'>
											{item.cumulative?.map(
												(cumulativeItem, cumulativeIndex) => (
													<div
														key={cumulativeIndex}
														className='flex items-center flex-col text-[16px] font-[700] mx-[12px] max-sm:w-[64px] max-sm:h-[64px] max-sm:m-0'
													>
														<div className='flex items-center h-[30px] text-[#8b8b8e] '>
															<img
																src='https://www.weex.com/static/images/lottery/draw_icon_gray.png'
																alt='draw'
																width={16}
																height={16}
																className='w-4 h-4'
															/>
															<span>×</span>
															<span>{cumulativeItem.multiplier}</span>
														</div>
														{cumulativeItem.currencyIcon && (
															<img
																src='https://www.weex.com/static/images/lottery/ordi_icon.png'
																alt='currency'
																width={16}
																height={16}
																className='w-4 h-4'
															/>
														)}
														<span className='text-[16px] text-[#8b8b8e] inline-block h-[24px]'>
															{cumulativeItem.label}
														</span>
													</div>
												)
											)}
											<div className='absolute top-[37px] inline-block left-0 h-[1px] w-full bg-white opacity-[0.2] max-sm:top-[32px]' />
										</div>
									</div>
								</>
							)}

							{item.type === 'double' && (
								<div className='flex justify-between max-sm:flex-col'>
									{item.items?.map((doubleItem, doubleIndex) => (
										<div
											key={doubleIndex}
											className='flex justify-between items-center p-3 bg-[#222] rounded-[16px] py-[24px] px-[40px] w-[49%] max-sm:mb-[20px] max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:p-[12px]'
										>
											<div className='flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-[4px]'>
												<span className='text-[#8b8b8e] text-[16px] font-[500]'>
													{doubleItem.leftContent?.label}
												</span>
												<h3 className='text-[32px] font-[700] text-white'>
													{doubleItem.leftContent?.value}
												</h3>
											</div>
											<div className='flex justify-between h-full items-center w-full'>
												<div className='text-[20px] font-[500] text-[#d1d1d2] px-[20px] max-sm:px-0 max-sm:w-[60%] max-sm:text-[16px]'>
													{doubleItem.centerContent
														?.split('\n')
														.map((line, i) => (
															<p key={i} className=''>
																{line}
															</p>
														))}
												</div>
												<div className='flex items-center text-[#8b8b8e] text-[24px] font-[700]'>
													<img
														src='https://www.weex.com/static/images/lottery/draw_icon_gray.png'
														alt='draw'
														width={24}
														height={24}
														className='w-6 h-6'
													/>
													<span>×</span>
													<span>{doubleItem.rightContent?.multiplier}</span>
												</div>
											</div>
										</div>
									))}
								</div>
							)}

							<button className='w-full bg-transparent rounded-[24px] border border-[#e2bd22] text-[#e2bd22] h-[48px] cursor-pointer hover:bg-[#e2bd22] hover:text-black hidden max-sm:block'>
								{section.buttonText}
							</button>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default TaskComponent
