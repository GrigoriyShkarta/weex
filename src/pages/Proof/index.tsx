import React, { useState } from 'react'

const ProofOfReserves: React.FC = () => {
	const [showDateDropdown, setShowDateDropdown] = useState(false)
	const [selectedDate, setSelectedDate] = useState('03/01/2025,00:00:00')

	const auditDates = [
		'03/01/2025,00:00:00',
		'02/01/2025,00:00:00',
		'01/01/2025,00:00:00',
		'12/01/2024,00:00:00',
		'11/01/2024,00:00:00',
		'10/01/2024,00:00:00',
		'09/01/2024,00:00:00',
		'08/01/2024,00:00:00',
		'07/01/2024,00:00:00',
		'06/01/2024,00:00:00',
		'05/01/2024,00:00:00',
	]

	const coins = [
		{
			icon: 'https://www.weex.com/assets/images/proof-of-reserves/ratio_icon1.png',
			name: 'USDT',
			network: 'Tether',
			ratio: '102%',
		},
		{
			icon: 'https://www.weex.com/assets/images/proof-of-reserves/ratio_icon2.png',
			name: 'BTC',
			network: 'Bitcoin',
			ratio: '107%',
		},
		{
			icon: 'https://www.weex.com/assets/images/proof-of-reserves/ratio_icon3.png',
			name: 'ETH',
			network: 'Ethereum',
			ratio: '108%',
		},
	]

	const toggleDateDropdown = () => {
		setShowDateDropdown(!showDateDropdown)
	}

	const handleDateSelect = (date: string) => {
		setSelectedDate(date)
		setShowDateDropdown(false)
	}

	return (
		<div className='proof-of-reserves bg-[#0f1115] text-white'>
			{/* First Module */}
			<div className='pt-[100px] flex justify-between w-[1200px] mx-auto max-sm:w-full max-sm:flex-col-reverse max-sm:pt-[4.2vw]'>
				<div className='mod-l text-left w-[792px] max-sm:w-[91.4vw] mt-[6.4vw] max-sm:mx-auto max-sm:text-center'>
					<h1 className='topic text-[48px] font-[700] max-sm:text-[9.6vw]'>
						WEEX Proof of Reserves
					</h1>
					<div className='sub-topic mt-[32px] text-[24px] font-[500] max-sm:text-left max-sm:mt-[6.4vw] max-sm:text-[4.2vw]'>
						At WEEX, we are committed to ensuring the safety and accessibility
						of your assets. To achieve this, we maintain a strict 1:1 reserve
						ratio to ensure that all funds held on our platform are fully backed
						and secure. User assets are matched by an equivalent reserve for
						full transparency and trust.
					</div>
				</div>
				<div className='w-[360px] h-[320px] max-sm:w-[58vw] max-sm:h-[52vw] mx-auto'>
					<img
						src='https://www.weex.com/assets/images/proof-of-reserves/mod1_bg_black.png'
						alt='WEEX Proof of Reserves'
						className='w-full h-auto'
					/>
				</div>
			</div>

			{/* Second Module */}
			<div className='relative w-[1200px] border border-[#2e2e34] rounded-[24px] my-[48px] p-[24px] mx-auto max-sm:w-[91.4vw] max-sm:rounded-[6.4vw] max-sm:mt-[6.4vw] max-sm:mx-auto max-sm:p-[4.2vw] bg-none'>
				{/* Date Selection */}
				<div className='time-block'>
					<div className='time-title font-[500] text-[#d1d1d2] max-sm:text-[4.2vw]'>
						Audit date:
					</div>
					<div
						className='time flex pl-[8px] w-[192px] h-[35px] rounded-[8px] text-[16px] font-[700] bg-[hsla(0,0%,100%,.05)] mt-[4px] cursor-pointer leading-[35px]'
						onClick={toggleDateDropdown}
					>
						<div>{selectedDate}</div>
						<div className='select'>
							<img
								src='https://www.weex.com/assets/images/proof-of-reserves/icon_jiantou_black.svg'
								alt='Dropdown'
								className={`transition-transform w-[16px] h-[16px] mt-[9px] ml-[4px] ${
									showDateDropdown ? 'rotate-180' : ''
								}`}
							/>
						</div>
					</div>

					<div className='des text-[14px] mt-[16px] mb-[24px] text-[#8b8b8e] max-sm:text-[3.7vw] max-sm:mt-[4.2vw] max-sm:mb-[6.4vw]'>
						Reserve ratio = platform reserve ÷ users' assets. When the reserve
						ratio is ≥100%, this means that the platform has sufficient funds to
						cover user assets.
					</div>

					{showDateDropdown && (
						<div className='time-select absolute top-[78px] max-h-[260px] p-[8px] rounded-[12px] border border-[#2e2e34] z-10 w-[166px] left-[122px] mt-2 bg-[#0f1115] overflow-y-auto overflow-x-hidden'>
							{auditDates.map((date, index) => (
								<div
									key={index}
									className={`item w-[150px] h-[32px] rounded-[8px] mb-[4px] leading-[32px] text-[12px] font-[500] text-center hover:bg-[hsla(0,0%,100%,.05)] cursor-pointer ${
										date === selectedDate
											? 'bg-[hsla(0,0%,100%,.05)] font-medium'
											: ''
									}`}
									onClick={() => handleDateSelect(date)}
								>
									{date}
								</div>
							))}
						</div>
					)}
				</div>

				{/* Ratio Blocks */}
				<div className='ratio-block flex justify-between gap-[32px] max-sm:flex-col max-sm:gap-[2.1vw]'>
					{coins.map((coin, index) => (
						<div
							key={index}
							className='item flex-1 p-[24px] bg-[#232329] rounded-[24px] max-sm:p-[4.2vw]'
						>
							<div className='coin flex items-center gap-[16px]'>
								<div className='icon w-[48px] h-[48px] max-sm:h-[35px] max-sm:w-[35px]'>
									<img
										src={coin.icon}
										alt={coin.name}
										className='w-full h-full'
									/>
								</div>
								<div>
									<div className='name font-bold text-[20px] max-sm:text-[4.2vw]'>
										{coin.name}
									</div>
									<div className='network text-gray-500 text-sm mt-[4px] max-sm:text-[3.7vw]'>
										{coin.network}
									</div>
								</div>
							</div>
							<div className='ratio_title text-[#d1d1d2] text-[16px] mt-[18px] font-medium max-sm:mt-[6.4vw] max-sm:text-[4.2vw]'>
								Reserve ratio
							</div>
							<div className='ratio text-[32px] font-bold mt-[8px] max-sm:mt-[2.1vw] max-sm:text-[8.5vw]'>
								{coin.ratio}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Third Module */}
			<div className='third-mod w-[1200px] my-[48px] mx-auto flex justify-between max-sm:w-full max-sm:mb-[12.8vw] max-sm:mx-auto max-sm:mt-0 max-sm:px-[4.2vw]'>
				<div className='flex justify-between gap-6 max-sm:flex-col max-sm:w-full'>
					{/* CoinMarketCap Verification */}
					<div className='text-left w-[586px] h-[220px] p-[24px] border border-[#2e2e34] rounded-[24px] max-sm:w-full max-sm:h-[190px]'>
						<h2 className='font-[500] text-[100%]'>
							<div className='proof-title text-[24px] max-sm:text-[12px]'>
								Verified on
							</div>
							<div className='name text-[40px] font-[700] mt-[8px] max-sm:text-[6.4vw] max-sm:mt-[1vw]'>
								CoinMarketCap
							</div>
						</h2>
						<div className='btn w-[186px] h-[56px] py-[12px] px-[16px] mt-[32px] rounded-[16px] bg-white flex justify-between cursor-pointer max-sm:w-full max-sm:h-[14.9vw] max-sm:py-[3.2vw] max-sm:px-[4.2vw] max-sm:mt-[6.4vw] max-sm:rounded-[4.2vw]'>
							<div className='item-l flex items-center'>
								<div className='icon w-8 h-8 mr-3'>
									<img
										src='https://www.weex.com/_nuxt/img/CoinMarketCap.dec3b80.svg'
										alt='CoinMarketCap'
									/>
								</div>
								<div className='text ml-[8px] font-[700] text-black'>CMC</div>
							</div>
							<div className='item-r flex items-center'>
								<img
									src='	https://www.weex.com/assets/images/proof-of-reserves/Union_black.svg'
									alt='Arrow'
								/>
							</div>
						</div>
					</div>

					{/* Protection Fund */}
					<div className='text-left w-[586px] h-[220px] p-[24px] border border-[#2e2e34] rounded-[24px] max-sm:w-full max-sm:h-[190px]'>
						<h2 className='font-[500] text-[100%]'>
							<div className='proof-title text-[24px] max-sm:text-[12px]'>
								Protection Fund
							</div>
							<div className='name text-[40px] font-[700] mt-[8px] max-sm:text-[6.4vw] max-sm:mt-[1vw]'>
								1000 BTC
							</div>
						</h2>
						<div className='btn w-[186px] h-[56px] py-[12px] px-[16px] mt-[32px] rounded-[16px] bg-white flex justify-between cursor-pointer max-sm:w-full max-sm:h-[14.9vw] max-sm:py-[3.2vw] max-sm:px-[4.2vw] max-sm:mt-[6.4vw] max-sm:rounded-[4.2vw]'>
							<div className='item-l flex items-center'>
								<div className='text ml-[8px] font-[700] text-black'>
									Verify
								</div>
							</div>
							<div className='item-r flex items-center'>
								<img
									src='	https://www.weex.com/assets/images/proof-of-reserves/Union_black.svg'
									alt='Arrow'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Fourth Module */}
			<div className='fourth-mod w-[1200px] mt-[80px] mx-auto pb-[80px] max-sm:w-full max-sm:px-[4.2vw] max-sm:mt-[12.8vw] max-sm:mb-[34.1vw]'>
				<div className='content w-full bg-[#232329] rounded-[24px] p-[48px] max-sm:py-[6.4vw] max-sm:px-[4.2vw]'>
					<h2 className='title text-white text-[36px] font-[700] mb-[32px] max-sm:text-[8.5vw] max-sm:mb-[6.4vw]'>
						What is Proof of Reserves?
					</h2>
					<div className='text text-[20px] mb-[30px] text-[#d1d1d2] max-sm:text-[4.2vw] max-sm:mb-[6.4vw]'>
						Proof of Reserves (PoR) is a fundamental mechanism that ensures
						custodians maintain sufficient funds to cover all user assets and
						deposit liabilities, guaranteeing the platform's solvency.
					</div>
					<div className='text text-[20px] mb-[30px] text-[#d1d1d2] max-sm:text-[4.2vw] max-sm:mb-[6.4vw]'>
						Through advanced cryptographic attestation, WEEX demonstrates the
						existence of specific assets on its blockchain at any given moment,
						providing transparent insights into aggregate user balances. This
						process upholds the confidentiality of individual account
						information.
					</div>
					<div className='text text-[20px] text-[#d1d1d2] max-sm:text-[4.2vw]'>
						PoR is an essential cornerstone of the cryptocurrency trading
						ecosystem, enhancing trust and accountability among all
						stakeholders.
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProofOfReserves
