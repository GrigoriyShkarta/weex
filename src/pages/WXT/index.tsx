import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useState, useEffect } from 'react'

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(ArcElement, Tooltip, Legend)

const StickyNav = () => {
	const [activeSection, setActiveSection] = useState<
		null | 'benefits' | 'issuance' | 'distribution'
	>(null)
	const [isNavVisible, setIsNavVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const benefitsSection = document.getElementById('benefits')
			const issuanceSection = document.getElementById('issuance')
			const distributionSection = document.getElementById('distribution')

			// Проверяем видимость блока benefits для отображения навигации
			const benefitsRect = benefitsSection?.getBoundingClientRect()
			setIsNavVisible(benefitsRect?.top !== undefined && benefitsRect.top <= 65) // 65px - высота вашего хедера

			// Определяем активную секцию
			const scrollPosition = window.scrollY + 100 // Добавляем offset

			if (
				distributionSection &&
				scrollPosition >= distributionSection.offsetTop
			) {
				setActiveSection('distribution')
			} else if (
				issuanceSection &&
				scrollPosition >= issuanceSection.offsetTop
			) {
				setActiveSection('issuance')
			} else if (
				benefitsSection &&
				scrollPosition >= benefitsSection.offsetTop
			) {
				setActiveSection('benefits')
			} else {
				setActiveSection(null)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	if (!isNavVisible) return null

	return (
		<div className='left-0 fixed top-[65px] w-full z-10 border-t border-b border-[#282828] bg-black max-sm:hidden'>
			<div className='m-auto w-[1200px]'>
				<div className='flex items-center h-[48px] gap-[43px]'>
					<a
						href='#benefits'
						className={`h-[48px] leading-[48px] ${
							activeSection === 'benefits'
								? 'text-white border-b border-white'
								: 'text-[#8b8b8e] hover:text-white transition-colors'
						}`}
					>
						WXT holder benefits
					</a>
					<a
						href='#issuance'
						className={`h-[48px] leading-[48px] ${
							activeSection === 'issuance'
								? 'text-white border-b border-white'
								: 'text-[#8b8b8e] hover:text-white transition-colors'
						}`}
					>
						WXT token
					</a>
					<a
						href='#distribution'
						className={`h-[48px] leading-[48px] ${
							activeSection === 'distribution'
								? 'text-white border-b border-white'
								: 'text-[#8b8b8e] hover:text-white transition-colors'
						}`}
					>
						WXT security
					</a>
				</div>
			</div>
		</div>
	)
}

const TokenAllocationChart = () => {
	const data = {
		labels: [
			'WXT Ecosystem',
			'User acquisition',
			'WEEX Protection Fund',
			'Partner ecosystem fund',
			'Team incentives',
			'Branding and promotion',
		],
		datasets: [
			{
				data: [20, 10, 25, 15, 15, 15], // Проценты
				backgroundColor: [
					'#FFE9A2',
					'#FFB255',
					'#FF6F68',
					'#B6FF9C',
					'#9FE7FF',
					'#61B3FF',
				],
				borderWidth: 0,
			},
		],
	}

	const options = {
		cutout: '90%',
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: function (context: any) {
						return `${context.label}: ${context.raw}%`
					},
				},
			},
		},
		maintainAspectRatio: false,
	}

	return (
		<div className='relative w-[320px] h-[320px] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:my-[10.6vw] max-sm:w-full max-sm:h-auto'>
			<Doughnut data={data} options={options} />

			{/* Центральный текст */}
			<div className='absolute inset-0 flex flex-col items-center justify-center max-sm:gap-[18px]'>
				<div className='text-gray-400 text-sm'>Total Supply</div>
				<div className='text-2xl font-bold'>10,000,000,000</div>
			</div>
		</div>
	)
}

const WeexTokenPage = () => {
	return (
		<div className='overflow-hidden bg-black text-white'>
			{/* Hero Section with Video */}
			<section className='m-auto w-[1200px] relative py-[100px] max-sm:w-full max-sm:p-0'>
				<video
					autoPlay
					muted
					playsInline
					loop
					controlsList='nodownload'
					className='absolute right-[-80px] top-[40px] w-[750px] h-[431px] z-0 max-sm:right-0 max-sm:top-0 max-sm:relative, max-sm:w-full max-sm:h-full max-sm:static'
					poster='/assets/img/wxt/header-video-poster.png'
				>
					<source
						src='https://wxfzx4.info/spokesperson/wxt/header.mp4'
						type='video/mp4'
					/>
				</video>

				<div className='max-sm:px-[18.3px]'>
					<h1 className='relative z-2 mb-[24px] text-[56px] font-[700] max-sm:mb-[4.2vw] max-sm:text-[7.4vw]'>
						WEEX Token
					</h1>
					<p className='w-[560px] text-[24px] relative z-2 max-sm:w-auto max-sm:text-[4.2vw]'>
						WXT is the native token launched by WEEX. WXT holders enjoy
						exclusive benefits such as free airdrops and up to 70% off on
						transaction fees.
					</p>
					<Link
						to='#'
						className='flex mt-[52px] text-black bg-white w-[200px] items-center cursor-pointer justify-center h-[56px] rounded-[56px] font-[700] max-sm:mt-[6.4vw] max-sm:h-[12.8vw] max-sm:rounded-[14.9vw] max-sm:text-[4.2vw] max-sm:w-full'
					>
						Buy WXT
					</Link>
				</div>
			</section>

			{/* Benefits Section */}
			<section
				id='benefits'
				className='w-[1200px] m-auto max-sm:pt-[14.9vw] max-sm:w-full max-sm:px-[4.2vw]'
			>
				<div className='pt-[80px] overflow-hidden max-sm:pt-0'>
					<h2 className='mb-[48px] font-[700] text-[40px] text-center max-sm:mb-[8.5vw] max-sm:text-[6.4vw]'>
						WXT holder benefits
					</h2>

					<div className='pt-[40px] flex items-center max-sm:h-auto max-sm:pt-0 max-sm:mb-[6.4vw] max-sm:pb-0'>
						<div className='h-[100%] w-[340px] flex flex-col justify-between max-sm:h-auto max-sm:w-full max-sm:flex-row max-sm:items-center'>
							<div className='flex items-center text-white max-sm:flex-col-reverse max-sm:items-start max-sm:mb-0'>
								<div className='text-[16px]'>APY</div>
								<div className='w-[16px] max-sm:hidden'></div>
								<div className='text-[32px] font-[700] text-ellipsis text-nowrap overflow-hidden max-sm:text-[4.8vw] max-sm:mb-[1vw] max-sm:w-auto'>
									140%
								</div>
							</div>
						</div>

						<div className='w-[48px]'></div>

						<div className='flex-1 h-full flex flex-col justify-between gap-[32px]'>
							<div className='flex justify-end gap-[24px]'>
								<Link
									to='#'
									className='text-[16px] relative text-white px-[16px] font-[500] gap-[8px] flex items-center overflow-hidden cursor-pointer max-sm:text-[4.2vw] max-sm:justify-center max-sm:text-nowrap'
								>
									WXT unlock progress
									<svg
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										className='ml-2'
									>
										<path
											d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
											fill='white'
											fillOpacity='0.08'
										/>
										<path
											d='M7 5L10 8L7 11'
											stroke='#8B8B8E'
											strokeWidth='1.33333'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>

					<Link
						to='#'
						className='hidden bg-[hsla(0,0%,100%,.12)] text-white w-auto py-[16px] px-[32px]  items-center overflow-hidden cursor-pointer justify-center h-[56px] rounded-[56px] font-[700] max-sm:flex max-sm:py-[3.1vw] max-sm:px-[6.2vw] max-sm:rounded-[14.9vw] max-sm:text-[4.2vw] max-sm:mb-0 max-sm:h-auto'
					>
						Buy WXT to enjoy high APY
					</Link>

					{/* Benefits List */}
					<div className='mt-[80px] flex flex-col gap-[26px] max-sm:mt-[8.5vw] max-sm:gap-[4.2vw]'>
						{/* Benefit 1 */}
						<div className='p-[24px] rounded-[32px] border border-[#282828] flex justify-between cursor-pointer hover:border-white max-sm:h-auto max-sm:py-[4.2vw] max-sm:px-[2.1vw] max-sm:rounded-[6.4vw] max-sm:block'>
							<div className='flex items-center gap-[32px] max-w-[80%] max-sm:items-start max-sm:gap-[16px] max-sm:max-w-full'>
								<img
									src='https://www.weex.com/_nuxt/img/airdrops.62139d9.png'
									alt='Airdrops'
									className='w-12 h-12 mr-4 max-sm:w-[12.8vw] max-sm:h-[12.8vw]'
								/>
								<div className='text-white flex flex-col justify-between'>
									<h3 className='text-[28px] font-[700] mb-[12px] max-sm:text-[5.3vw] max-sm:mb-[2.1vw]'>
										Diverse new crypto airdrops
									</h3>
									<p>Hold at least 1,000 WXT to enjoy free airdrops!</p>
								</div>
							</div>
							<Link
								to='#'
								className='flex items-center max-sm:pl-[20vw] mt-[4.2vw]'
							>
								Get airdrops now
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									className='ml-2'
								>
									<path
										d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
										fill='white'
										fillOpacity='0.08'
									/>
									<path
										d='M7 5L10 8L7 11'
										stroke='#8B8B8E'
										strokeWidth='1.33333'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
						</div>

						{/* Benefit 2 */}
						<div className='p-[24px] rounded-[32px] border border-[#282828] flex justify-between cursor-pointer hover:border-white max-sm:h-auto max-sm:py-[4.2vw] max-sm:px-[2.1vw] max-sm:rounded-[6.4vw] max-sm:block'>
							<div className='flex items-center gap-[32px] max-w-[80%] max-sm:items-start max-sm:gap-[16px] max-sm:max-w-full'>
								<img
									src='	https://www.weex.com/_nuxt/img/vip.d9e4386.png'
									alt='VIP'
									className='w-12 h-12 mr-4 max-sm:w-[12.8vw] max-sm:h-[12.8vw]'
								/>
								<div className='text-white flex flex-col justify-between'>
									<h3 className='text-[28px] font-[700] mb-[12px] max-sm:text-[5.3vw] max-sm:mb-[2.1vw]'>
										Upgrade your VIP level to enjoy 70% off on fees
									</h3>
									<p className=''>
										Hold WXT and upgrade to VIP 8 to enjoy up to 70% off on fees
									</p>
								</div>
							</div>
							<Link
								to='#'
								className='flex items-center max-sm:pl-[20vw] mt-[4.2vw]'
							>
								View details
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									className='ml-2'
								>
									<path
										d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
										fill='white'
										fillOpacity='0.08'
									/>
									<path
										d='M7 5L10 8L7 11'
										stroke='#8B8B8E'
										strokeWidth='1.33333'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
						</div>

						{/* Benefit 3 */}
						<div className='p-[24px] rounded-[32px] border border-[#282828] flex justify-between cursor-pointer hover:border-white max-sm:h-auto max-sm:py-[4.2vw] max-sm:px-[2.1vw] max-sm:rounded-[6.4vw] max-sm:block'>
							<div className='flex items-center gap-[32px] max-w-[80%] max-sm:items-start max-sm:gap-[16px] max-sm:max-w-full'>
								<img
									src='https://www.weex.com/_nuxt/img/WE-Launch.b492939.png'
									alt='Trader Perks'
									className='w-12 h-12 mr-4 max-sm:w-[12.8vw] max-sm:h-[12.8vw]'
								/>
								<div className='text-white flex flex-col justify-between'>
									<h3 className='text-[28px] font-[700] mb-[12px] max-sm:text-[5.3vw] max-sm:mb-[2.1vw]'>
										Elite trader perks upgrade
									</h3>
									<p className=''>Hold WXT and enjoy up to 20% profit share!</p>
								</div>
							</div>
							<Link
								to='#'
								className='flex items-center max-sm:pl-[20vw] mt-[4.2vw]'
							>
								View details
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									className='ml-2'
								>
									<path
										d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
										fill='white'
										fillOpacity='0.08'
									/>
									<path
										d='M7 5L10 8L7 11'
										stroke='#8B8B8E'
										strokeWidth='1.33333'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<StickyNav />

			{/* Token Info Section */}
			<section
				id='issuance'
				className='w-[1200px] m-auto max-sm:w-full max-sm:px-[4.2vw]'
			>
				<div className='pt-[134px] pb-[80px] max-sm:pt-[11.7vw] max-sm:pb-[10.6vw]]'>
					<h2 className='mb-[48px] font-[700] text-[40px] text-center max-sm:mb-[8.5vw] max-sm:text-[6.4vw]'>
						WXT token
					</h2>

					<>
						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Token Name</span>
							<span>WEEX Token</span>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Token Symbol</span>
							<span>WXT</span>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Chain</span>
							<span>Ethereum (ERC20)</span>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Contract Address</span>
							<a
								href='https://etherscan.io/token/0x1B66474c8ECA3827f16202907F41F63785579716'
								className='relative text-white font-[500] gap-[8px] flex items-center overflow-hidden cursor-pointer max-sm:break-words max-sm:w-[53.3vw] max-sm:text-[3.7vw] max-sm:flex max-sm:items-start'
							>
								<span>0x1B66474c8ECA3827f16202907F41F63785579716</span>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									className='ml-2'
								>
									<path
										d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
										fill='white'
										fillOpacity='0.08'
									/>
									<path
										d='M7 5L10 8L7 11'
										stroke='#8B8B8E'
										strokeWidth='1.33333'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</a>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Issue Price</span>
							<span>$0.01</span>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Total Supply</span>
							<span>6,000,000,000</span>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Total issued</span>
							<span>10,000,000,000</span>
						</div>

						<div className='flex justify-between items-center py-[16px] border-b border-[#26282f] max-sm:text-[3.7vw] max-sm:py-[4.2vw]'>
							<span>Registration Date</span>
							<span>2023.08.01</span>
						</div>
					</>

					{/* Token Allocation */}
				</div>
			</section>

			<section className='w-[1200px] m-auto max-sm:w-full max-sm:px-[4.2vw]'>
				{/* Supply Stats */}
				<div className='flex justify-end gap-[32px] max-sm:block'>
					<div className='border-[2.5px] shadow-[0_0_20px_0_rgba(225,232,0,0.5)] w-[355px] py-[16px] px-[24px] rounded-[24px] max-sm:w-full max-sm:mb-[4.2vw] max-sm:p-[4.2vw] max-sm:rounded-[6.4vw]'>
						<div className='text-[#8b8b8e] mb-[8px] max-sm:text-[3.7vw] max-sm:mb-[2.1vw]'>
							Current total supply (WXT)
						</div>
						<div className='text-white text-[32px] font-[700] leading-[42px] max-sm:text-[4.8vw]'>
							6,000,000,000
						</div>
					</div>
					<div className='border-[2.5px] border-[#8b8b8e] shadow-[0_0_20px_0_hsla(0,0%,50%,.50196078)] w-[355px] py-[16px] px-[24px] rounded-[24px] max-sm:w-full max-sm:p-[4.2vw] max-sm:rounded-[6.4vw]'>
						<div className='text-[#8b8b8e] mb-[8px] max-sm:text-[3.7vw] max-sm:mb-[2.1vw]'>
							Total burned (WXT)
						</div>
						<div className='text-[#8b8b8e] text-[32px] font-[700] leading-[42px] max-sm:text-[4.8vw]'>
							4,000,000,000
						</div>
					</div>
				</div>

				<div className='flex justify-between items-end gap-[127px] h-[345px] max-sm:block max-sm:h-auto'>
					{/* Placeholder for pie chart - you would replace this with your actual chart component */}

					<TokenAllocationChart />

					<div className='w-[742px] max-sm:w-full max-sm:mt-[3.9vw]'>
						<div className='grid grid-cols-3 gap-4 mb-[12px] text-[#8b8b8e] max-sm:hidden'>
							<div className='text-gray-400 font-medium'>Allocation</div>
							<div className='text-gray-400 font-medium'>
								Annual release ratio
							</div>
							<div className='text-gray-400 font-medium text-right'>
								Percentage
							</div>
						</div>

						<div className='space-y-4'>
							{/* Allocation 1 */}
							<div className='grid grid-cols-3 gap-4 items-center h-[32px] max-sm:pb-[4.2vw] max-sm:border-b max-sm:border-[#282828] max-sm:block max-sm:h-auto'>
								<div className='flex items-center max-sm:pb-[6.4vw] max-sm:text-[4.2vw]'>
									<div className='w-3 h-3 bg-[#FFE9A2] rounded-full mr-2'></div>
									<span>WXT Ecosystem</span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between max-sm:mb-[2.1vw]'>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'>
										Annual release ratio
									</span>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'></span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between'>
									<div>2%</div>
									<div className='text-right'>20%</div>
								</div>
								<div className='max-sm:hidden'>2%</div>
								<div className='text-right max-sm:hidden'>20%</div>
							</div>

							{/* Allocation 2 */}
							<div className='grid grid-cols-3 gap-4 items-center h-[32px] max-sm:pb-[4.2vw] max-sm:border-b max-sm:border-[#282828] max-sm:block max-sm:h-auto'>
								<div className='flex items-center max-sm:pb-[6.4vw] max-sm:text-[4.2vw]'>
									<div className='w-3 h-3 bg-[#FFB255] rounded-full mr-2'></div>
									<span>User acquisition</span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between max-sm:mb-[2.1vw]'>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'>
										Annual release ratio
									</span>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'></span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between'>
									<div>1%</div>
									<div className='text-right'>10%</div>
								</div>
								<div className='max-sm:hidden'>1%</div>
								<div className='text-right max-sm:hidden'>10%</div>
							</div>

							{/* Allocation 3 */}
							<div className='grid grid-cols-3 gap-4 items-center h-[32px] max-sm:pb-[4.2vw] max-sm:border-b max-sm:border-[#282828] max-sm:block max-sm:h-auto'>
								<div className='flex items-center max-sm:pb-[6.4vw] max-sm:text-[4.2vw]'>
									<div className='w-3 h-3 bg-[#FF6F68] rounded-full mr-2'></div>
									<span>WEEX Protection Fund</span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between max-sm:mb-[2.1vw]'>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'>
										Annual release ratio
									</span>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'></span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between'>
									<div>2.5%</div>
									<div className='text-right'>25%</div>
								</div>
								<div className='max-sm:hidden'>2.5%</div>
								<div className='text-right max-sm:hidden'>25%</div>
							</div>

							{/* Allocation 4 */}
							<div className='grid grid-cols-3 gap-4 items-center h-[32px] max-sm:pb-[4.2vw] max-sm:border-b max-sm:border-[#282828] max-sm:block max-sm:h-auto'>
								<div className='flex items-center max-sm:pb-[6.4vw] max-sm:text-[4.2vw]'>
									<div className='w-3 h-3 bg-[#B6FF9C] rounded-full mr-2'></div>
									<span>Partner ecosystem fund</span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between max-sm:mb-[2.1vw]'>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'>
										Annual release ratio
									</span>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'></span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between'>
									<div>1.5%</div>
									<div className='text-right'>15%</div>
								</div>
								<div className='max-sm:hidden'>1.5%</div>
								<div className='text-right max-sm:hidden'>15%</div>
							</div>

							{/* Allocation 5 */}
							<div className='grid grid-cols-3 gap-4 items-center h-[32px] max-sm:pb-[4.2vw] max-sm:border-b max-sm:border-[#282828] max-sm:block max-sm:h-auto'>
								<div className='flex items-center max-sm:pb-[6.4vw] max-sm:text-[4.2vw]'>
									<div className='w-3 h-3 bg-[#9FE7FF] rounded-full mr-2'></div>
									<span>Team incentives</span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between max-sm:mb-[2.1vw]'>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'>
										Annual release ratio
									</span>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'></span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between'>
									<div>1.5%</div>
									<div className='text-right'>15%</div>
								</div>
								<div className='max-sm:hidden'>1.5%</div>
								<div className='text-right max-sm:hidden'>15%</div>
							</div>

							{/* Allocation 6 */}
							<div className='grid grid-cols-3 gap-4 items-center h-[32px] max-sm:pb-[4.2vw] max-sm:border-b max-sm:border-[#282828] max-sm:block max-sm:h-auto'>
								<div className='flex items-center max-sm:pb-[6.4vw] max-sm:text-[4.2vw]'>
									<div className='w-3 h-3 bg-[#61B3FF] rounded-full mr-2'></div>
									<span>Branding and promotion</span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between max-sm:mb-[2.1vw]'>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'>
										Annual release ratio
									</span>
									<span className='text-[3.7vw] text-[#8b8b8e] w-auto'></span>
								</div>
								<div className='hidden max-sm:flex max-sm:justify-between'>
									<div>1.5%</div>
									<div className='text-right'>15%</div>
								</div>
								<div className='max-sm:hidden'>1.5%</div>
								<div className='text-right max-sm:hidden'>15%</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Security Section */}
			<section id='distribution' className='bg-black'>
				<div className='m-auto w-[1200px] max-sm:w-full max-sm:px-[4.2vw]'>
					<div className='pt-[160px] pb-[80px] max-sm:py-[10.6vw]'>
						<h2 className='mb-[48px] font-[700] text-[40px] text-center max-sm:mb-[8.5vw] max-sm:text-[6.4vw]'>
							WXT security
						</h2>

						<div className='flex p-[48px] items-center justify-between max-sm:block max-sm:py-[8.5vw] max-sm:px-0'>
							{/* Security Audit */}
							<div className='flex items-start gap-[40px] w-[480px] max-sm:w-full max-sm:flex-col max-sm:gap-[8.5vw] max-sm:items-center max-sm:mb-[8.5vw]'>
								<div className='w-[80px] h-[80px] max-sm:w-[12.8vw] max-sm:h-[12.8vw]'>
									<img
										src='https://www.weex.com/_nuxt/img/security.e10205f.png'
										alt='Security'
										className='w-32 h-32 object-contain max-sm:w-[12.8vw] max-sm:h-[12.8vw]'
									/>
								</div>
								<div className='text-white w-[360px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:gab-[8.5vw]'>
									<h3 className='text-[28px] mb-[16px] font-[700] max-sm:text-center max-sm:text-[5.3vw] max-sm:mb-[2.1vw]'>
										Security audit
									</h3>
									<p className='mb-[32px] max-sm:text-center max-sm:text-[3.7vw] max-sm:mb-[0] max-sm:break-words'>
										Audited by an industry-leading auditing organization, with
										safe and reliable results
									</p>
									<a
										href='https://beosin.com/audits/WXT_202404081138.pdf'
										target='_blank'
										rel='noopener noreferrer'
										className='text-[16px] text-[#8b8b8e] relative pr-[16px] font-[500] gap-[8px] flex items-center overflow-hidden cursor-pointer hover:text-whit max-sm:text-[4.2vw] max-sm:pt-[6.4vw]'
									>
										View Audit
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											className='ml-2'
										>
											<path
												d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
												fill='white'
												fillOpacity='0.08'
											/>
											<path
												d='M7 5L10 8L7 11'
												stroke='#8B8B8E'
												strokeWidth='1.33333'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</a>
								</div>
							</div>

							{/* Whitepaper */}
							<div className='flex items-start gap-[40px] w-[480px] max-sm:w-full max-sm:flex-col max-sm:gap-[8.5vw] max-sm:items-center'>
								<div className='w-[80px] h-[80px] max-sm:w-[12.8vw] max-sm:h-[12.8vw]'>
									<img
										src='	https://www.weex.com/_nuxt/img/whitepaper.48a9819.png'
										alt='Whitepaper'
										className='w-32 h-32 object-contain max-sm:w-[12.8vw] max-sm:h-[12.8vw]'
									/>
								</div>
								<div className='text-white w-[360px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:gab-[8.5vw]'>
									<h3 className='text-[28px] mb-[16px] font-[700] max-sm:text-center max-sm:text-[5.3vw] max-sm:mb-[2.1vw]'>
										White Paper
									</h3>
									<p className='mb-[32px] max-sm:text-center max-sm:text-[3.7vw] max-sm:mb-[0] max-sm:break-words'>
										WXT is the native token launched by WEEX that runs on the
										ERC-20 standard protocol.
									</p>
									<a
										href='/WXT-whitepaper'
										target='_blank'
										rel='noopener noreferrer'
										className='text-[16px] text-[#8b8b8e] relative pr-[16px] font-[500] gap-[8px] flex items-center overflow-hidden cursor-pointe hover:text-white max-sm:text-[4.2vw] max-sm:pt-[6.4vw]'
									>
										View Whitepaper
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											className='ml-2'
										>
											<path
												d='M8.00004 14.6666C9.84097 14.6666 11.5076 13.9204 12.7141 12.714C13.9205 11.5076 14.6667 9.84091 14.6667 7.99998C14.6667 6.15905 13.9205 4.49238 12.7141 3.28593C11.5076 2.07951 9.84097 1.33331 8.00004 1.33331C6.15911 1.33331 4.49244 2.07951 3.28599 3.28593C2.07957 4.49238 1.33337 6.15905 1.33337 7.99998C1.33337 9.84091 2.07957 11.5076 3.28599 12.714C4.49244 13.9204 6.15911 14.6666 8.00004 14.6666Z'
												fill='white'
												fillOpacity='0.08'
											/>
											<path
												d='M7 5L10 8L7 11'
												stroke='#8B8B8E'
												strokeWidth='1.33333'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='m-auto w-[1200px] max-sm:w-full max-sm:px-[4.2vw]'>
				<div className='pb-[120px] max-sm:pb-[14.9vw]'>
					<video
						autoPlay
						muted
						playsInline
						loop
						controlsList='nodownload'
						className='w-full max-w-4xl mx-auto mb-8 rounded-lg'
						poster='/assets/img/wxt/footer-video-poster.png'
					>
						<source
							src='https://wxfzx4.info/spokesperson/wxt/footer.mp4'
							type='video/mp4'
						/>
					</video>

					<h2 className='text-[32px] text-white text-center mt-[32px] mx-auto mb-[48px] max-sm:text-[5.3vw] max-sm:mt-[4.2vw] max-sm:mb-[6.4vw] max-sm:w-auto'>
						Buy WXT now to receive exclusive airdrops and enjoy ultra-low
						fees—your starting point for greater wealth!
					</h2>
					<div className='flex items-center justify-center'>
						<a
							href='#'
							className='flex items-center justify-center overflow-hidden cursor-pointer h-[56px] rounded-[56px] text-[16px] font-[700] bg-white text-black w-[200px] max-sm:w-full max-sm:h-[12.8vw] max-sm:border max-sm:rounded-[14.9vw] max-sm:text-[4.2vw]'
						>
							Buy WXT
						</a>
					</div>
				</div>
			</section>

			{/* Telegram Floating Button */}
			<a
				href='https://t.me/WeexGlobal_Group'
				target='_blank'
				rel='noopener noreferrer'
				className='fixed right-6 bottom-6 bg-blue-500 hover:bg-blue-600 text-white flex items-center px-4 py-3 rounded-full shadow-lg transition duration-200'
			>
				<svg className='w-6 h-6 mr-2' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z' />
				</svg>
				<span>Telegram</span>
			</a>
		</div>
	)
}

export default WeexTokenPage
