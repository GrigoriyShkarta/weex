import React, { useState } from 'react'

const MediaKitPage: React.FC = () => {
	const [showPopup, setShowPopup] = useState(false)

	const togglePopup = () => {
		setShowPopup(!showPopup)
	}

	const logoVariants = [
		{
			id: 1,
			name: 'logo_yellow1',
			bg: '#fff',
			ico: 'https://www.weex.com/assets/images/aboutWeex/logo_yellow1.png',
		},
		{
			id: 2,
			name: 'logo_yellow2',
			bg: '#fff',
			ico: 'https://www.weex.com/assets/images/aboutWeex/logo_yellow2.png',
		},
		{
			id: 3,
			name: 'logo_yellow3',
			bg: '#fff',
			ico: 'https://www.weex.com/assets/images/aboutWeex/logo_yellow1.png',
		},
		{
			id: 4,
			name: 'logo_yellow1',
			bg: '#17171d',
			ico: 'https://www.weex.com/assets/images/aboutWeex/logo_yellow2.png',
		},
		{
			id: 5,
			name: 'logo_yellow2',
			bg: '#17171d',
			ico: 'https://www.weex.com/assets/images/aboutWeex/logo_yellow1.png',
		},
		{
			id: 6,
			name: 'logo_yellow3',
			bg: '#17171d',
			ico: 'https://www.weex.com/assets/images/aboutWeex/logo_yellow2.png',
		},
	]

	const brandColors = [
		{
			hex: '#D8AE15',
			rgb: '216 174 21',
			alpha: '100',
		},
		{
			hex: '#151515',
			rgb: '21 21 21',
			alpha: '100',
		},
	]

	const assets = [
		{
			title: 'WEEX Brand Guide',
			description:
				'Master WEEX brand standards with this concise guide on unique visuals and usage rules.',
			icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiIGZpbGw9IiNEOEFFMTUiLz4KPHBhdGggZD0iTTIxLjE2NjUgMTdWNDciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMy4zMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS4xNjY1IDE5LjVIMzIuODMzMkwzOC42NjY1IDIySDQ0LjQ5OThDNDUuNDIwMyAyMiA0Ni4xNjY1IDIyLjc0NjIgNDYuMTY2NSAyMy42NjY3VjM3LjgzMzNDNDYuMTY2NSAzOC43NTM4IDQ1LjQyMDMgMzkuNSA0NC40OTk4IDM5LjVIMzguNjY2NUwzMi44MzMyIDM3SDIxLjE2NjVWMTkuNVoiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMuMzMzMzMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjgzMzUgNDdIMjQuNTAwMiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==',
			link: 'https://drive.google.com/file/d/1pSSC2-204_eHUITSfLZZrrFjXVc7GIvx/view?usp=sharing',
		},
		{
			title: 'WEEX Media Kit',
			description:
				'The free kit includes everything you need to know about WEEX.',
			icon: '	https://www.weex.com/_nuxt/img/assets-icon2.0d62488.svg',
			popupItems: [
				{
					title: 'About WEEX',
					link: 'https://drive.google.com/file/d/14TfjcmeBTGkNCW9GljkECH6EzQdHWHIX/view?usp=sharing',
				},
				{
					title: 'WEEX Affiliate',
					link: 'https://drive.google.com/file/d/1_3h_7X3UnwZmulsk4CP5s9RnOiYHTuFZ/view?usp=sharing',
				},
				{
					title: 'WEEX Branding Poster',
					link: 'https://drive.google.com/drive/folders/1Hg6la9S3_4xNmxkQgB3V7ZFZuyQBk036?usp=sharing',
				},
			],
		},
		{
			title: 'Other Banners',
			description: 'More WEEX banners for events, trading trends, and news.',
			icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NSA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC4zMzM0OTYiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjE2IiBmaWxsPSIjRDhBRTE1Ii8+CjxwYXRoIGQ9Ik0xOSA0OC42NjY2VjE1LjMzMzNIMzguMTY2N0w0NS42NjY3IDI0LjA4MzNWNDguNjY2NkgxOVoiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMuMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuMzMzNyAyNC41TDM0LjkwMzggMzAuMTI5M0w0MS4wNTE3IDMwLjgzNEwzNi40OTIyIDM1LjAxNzhMMzcuNzIxNyA0MS4wODI3TDMyLjMzMzcgMzguMDM5MkwyNi45NDU3IDQxLjA4MjdMMjguMTc1MiAzNS4wMTc4TDIzLjYxNTcgMzAuODM0TDI5Ljc2MzYgMzAuMTI5M0wzMi4zMzM3IDI0LjVaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==',
			link: 'https://drive.google.com/drive/folders/1Ni1H_Cyb-bnlXrrH0JaTKGHoxYz_hwR-?usp=sharing',
		},
	]

	return (
		<div className='text-white overflow-hidden max-sm:w-full'>
			<div className='section-one w-[1200px] mx-auto bg-[#0f1115] max-sm:w-full max-sm:my-[12.8vw] max-sm:px-[4.2vw]'>
				<div className='flex justify-between items-center mt-[48px] pb-[80px] max-sm:flex-col-reverse'>
					<div className='top-img-mobile-wrap top-img-wrap'></div>
					<div className='one-left w-[700px] max-sm:w-full'>
						<div className='text-[48px] font-[700]'>About WEEX</div>
						<div className='one-txt mt-[20px] text-[20px] font-[500] max-sm:mt-[5.3vw] max-sm:text-[4.2vw]'>
							Since its establishment in 2018, WEEX has quickly emerged as a
							leading global cryptocurrency exchange, serving over 6 million
							registered users and ranked in the top 5 on CoinMarketCap. The
							platform features more than 1,000 trading pairs and is recognized
							for its advanced, user-friendly interface and robust security
							measures. WEEX offers various trading options, including spot
							trading, futures, and copy trading.
							<div className='p-info max-sm:mt-[20px]'>
								In June 2024, WEEX expanded its ecosystem by introducing WXT,
								its native platform token. WXT is designed to provide ecosystem
								incentives and offer holders various benefits. Users can
								participate in airdrop events through WEEX's WE-Launch by
								committing WXT tokens, thereby earning additional platform
								rewards. Committed to delivering professional and innovative
								trading services worldwide, WEEX is your trusted partner in
								diverse and global crypto trading.
							</div>
						</div>
					</div>
					<div className='top-img-pc-wrap top-img-wrap max-sm:h-[70.1vw] max-sm:mb-[8.5vw]'>
						<img
							src='https://www.weex.com/_nuxt/img/about_black.437de67.svg'
							alt='img'
						/>
					</div>
				</div>
			</div>

			<div className='section-two py-[80px] bg-[#07080a] max-sm:py-[12.8vw] max-sm:px-[4.2vw]'>
				<div className='main-wrap  w-[1200px] mx-auto max-sm:w-full'>
					<h2 className='page-title text-[56px] font-[700] text-center max-sm:text-[10.6vw]'>
						WEEX Logo
					</h2>
					<div className='flex flex-wrap gap-[48px] mt-[48px] max-sm:gap-[4.2vw] max-sm:mt-[12.8vw]'>
						{logoVariants.map(logo => (
							<div
								key={logo.id}
								className='brand-item-wrap w-[368px] max-sm:w-[43.6vw]'
							>
								<div
									className={`brand-top flex justify-center items-center h-[164px] rounded-[24px]`}
									style={{ backgroundColor: logo.bg }}
								>
									<img
										src={`${logo.ico}`}
										alt='WEEX'
										className='logo-img max-h-32'
									/>
								</div>
								<div className='flex gap-[16px] mt-[16px]'>
									<a
										download
										href={`/assets/images/aboutWeex/${logo.name}.png`}
										className='download-link flex flex-1 h-[40px] rounded-[12px] text-center bg-[hsla(0,0%,100%,.05)] text-white cursor-pointer justify-center items-center'
									>
										PNG
									</a>
									<a
										download
										href={`/assets/images/aboutWeex/${logo.name}.svg`}
										className='download-link flex flex-1 h-[40px] rounded-[12px] text-center bg-[hsla(0,0%,100%,.05)] text-white cursor-pointer justify-center items-center'
									>
										SVG
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='section-three main-wrap w-[1200px] mx-auto py-[100px] max-sm:w-full max-sm:py-[12.8vw] max-sm:px-[5.8vw]'>
				<h2 className='page-title text-[56px] font-[700] text-center max-sm:text-[10.6vw]'>
					Brand Colors
				</h2>
				<div className='color-h5-wrap hidden max-sm:block mt-[12.8vw] w-full h-[45.3vw]'>
					<img
						src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAxIiBoZWlnaHQ9IjI4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNjAuNSIgY3k9IjE0MCIgcj0iMTM5LjUiIGZpbGw9IiMxNTE1MTUiIHN0cm9rZT0iIzJFMkUyRSIvPjxjaXJjbGUgY3g9IjE0MC41IiBjeT0iMTQwIiByPSIxMzkuNSIgZmlsbD0iI0Q4QUUxNSIgc3Ryb2tlPSIjRDhBRTE1Ii8+PC9zdmc+'
						alt='bg'
					/>
				</div>
				<div className='three-wrap flex justify-between items-center mt-[100px] px-[140px] max-sm:mt-[8.5vw] max-sm:px-[6.9vw]'>
					{brandColors.map((color, index) => (
						<React.Fragment key={index}>
							<div className='color-item'>
								<div className='gray-item mb-[4px] text-[14px] font-[500] text-[#d1d1d2]'>
									HEX
								</div>
								<div className='color-txt mb-[12px] text-[18px] font-[700]'>
									{color.hex}
								</div>
								<div className='gray-item mb-[4px] text-[14px] font-[500] text-[#d1d1d2]'>
									RGB
								</div>
								<div className='color-txt mb-[12px] text-[18px] font-[700]'>
									{color.rgb}
								</div>
								<div className='gray-item mb-[4px] text-[14px] font-[500] text-[#d1d1d2]'>
									Alpha
								</div>
								<div className='color-txt mb-[12px] text-[18px] font-[700]'>
									{color.alpha}
								</div>
							</div>
							{index === 0 && (
								<div className='color-pc-wrap max-sm:hidden'>
									<img
										src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAxIiBoZWlnaHQ9IjI4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNjAuNSIgY3k9IjE0MCIgcj0iMTM5LjUiIGZpbGw9IiMxNTE1MTUiIHN0cm9rZT0iIzJFMkUyRSIvPjxjaXJjbGUgY3g9IjE0MC41IiBjeT0iMTQwIiByPSIxMzkuNSIgZmlsbD0iI0Q4QUUxNSIgc3Ryb2tlPSIjRDhBRTE1Ii8+PC9zdmc+'
										className='w-[500px] h-[280px]'
										alt='bg'
									/>
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>

			<div className='section-four main-wrap w-[1200px] mx-auto pt-[80px] pb-[100px] max-sm:pt-[8,5vw] max-sm:pb-[12.8vw] max-sm:w-full max-sm:px-[4.2vw]'>
				<h2 className='page-title text-[56px] font-[700] text-center'>
					Brand Assets
				</h2>
				<div className='four-wrap flex gap-[32px] mt-[48px] max-sm:flex-col'>
					{assets.map((asset, index) => (
						<div
							key={index}
							className='assets-item relative flex flex-col justify-between flex-1 p-[40px] rounded-[24px] bg-[#232329]'
						>
							<div className='assets-top'>
								<img
									src={asset.icon}
									alt='WEEX'
									className='item-icon w-16 h-16 mb-4'
								/>
								<div className='assets-title mt-[24px] text-[24px] font-[700]'>
									{asset.title}
								</div>
								<div className='assets-desc mt-[24px] text-[16px]'>
									{asset.description}
								</div>
							</div>
							<div className='assets-bottom flex mt-[24px]'>
								{index === 1 ? (
									<>
										<button
											onClick={togglePopup}
											className='download-link flex items-center px-3 h-10 rounded-[12px] text-sm font-medium text-black bg-white cursor-pointer box-border'
										>
											<div className='down-icon mr-2'>
												<img
													src='https://www.weex.com/_nuxt/img/view-black.67094aa.png'
													alt='l'
													className='w-[24px] h-[24px]'
												/>
											</div>
											View
										</button>
										{showPopup && (
											<div className='assets-popup absolute top-0 left-0 w-full h-full bg-[#0f1115] z-10 flex flex-wrap items-center px-[24px] rounded-[24px] border border-[#2e2e34]'>
												<img
													src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgBvZZNToNAFIDfoxBo44Ij1BvQG9gjeJOa2B9xw8Y20oW9iUfgCHADewQ2SgR0nNcIiRbmD+NbEBhmvm/mwWMA+K9YLh+CxSLyYWAQ43azu2quLTqs7h5Ty7ZTdzxOSQSGEYZx4E4mLyO0EmJSG5KNGppODCBndT3f7+8zDfYJ/gGQAGNtFj7remZdeF4GiHnTiAA+2nais5IuOI9jVVVHK4pu8hHA3FTSCeesEeL14RDlKOooS1cvnE94u11l35MVD+iTqMDPBKoSVXinQCZxHAdU4b0CkQSRD1GECwV9kp+jxXCpQChRgFPYYBiMMajqWtpvUIpUPitaD7mtdo1iVH5Nm5zTqU7FKxXa7weqU/HST0Xf26IqQRO4jgRN4aoSjKMnv3gvaXub6sJlkrIoLq3X8m06BE5Bfbs2Lc9zg1OK1mGccntgAj9bCWPPNGG+gizerWftzQ3f/P/qt4VEzfUXv193aTOioKgAAAAASUVORK5CYII='
													alt='WEEX'
													className='close-popup absolute right-[22px] top-[22px] w-[9px] h-[9px] cursor-pointer'
													onClick={togglePopup}
												/>
												<div className='pp-wrap w-full'>
													{asset.popupItems?.map((item, i) => (
														<a
															key={i}
															target='_blank'
															rel='nofollow'
															href={item.link}
															className='popup-item flex justify-between items-center mb-[12px] px-[12px] h-[52px] rounded-[16px] bg-[hsla(0,0%,100%,.05)] text-white'
														>
															<div className='item-lf flex items-center'>
																<img
																	src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgB7ZgxTsMwFIb/IOa4MLAl6gkQFZdBXeAShYIYQVwDFmCEEyBOADtDoWwMkHIBY6OqQ5U4duzEL9L7JCuRHEfvy3v2kwIwhJFSDtV4UuNHhmemxiHaYhl8G4Gv046EevGD7I7GEolBQKJbjpIkuYEjG6DDdZNMUBLQOEtQE9A4SVAU0FhLUBXQWElQFtDUSlAX0BglKPUBE4XqEVtlE30RgBIojbUPJWRkE57c3t3j9Owci8Wv07o8zzA9nmA8PoAP3iW0u7eP+fwTTRBC4GP2ZvVsVQl5Cwy2d+BD8f1l9RzvAVvqvqhvxtbpfQZYIDbB90DoGq+DS8iHPMvgSzQBkaaYnkzgS+d9IDS8B2LDArFhASHS1X2Ic90Vb4Gry4v/wEOd667wX4nYsEBsWCA2JoECPcAk8Ao6PFZNmPrAUF1e1BggLroSRqoNvJdNVmZguWAEg33L6MCfYQieocAfxaKbd1Bbr4QAAAAASUVORK5CYII='
																	alt='l'
																	className='w-[24px] h-[24px] mr-[8px]'
																/>

																{item.title}
															</div>
															<div className='w-[36px] h-[36px] rounded-[12px] bg-white flex justify-center items-center'>
																<img
																	src='https://www.weex.com/_nuxt/img/view-black.67094aa.png'
																	alt='l'
																	className='w-[24px] h-[24px]'
																/>
															</div>
														</a>
													))}
												</div>
											</div>
										)}
									</>
								) : (
									<a
										target='_blank'
										rel='nofollow'
										href={asset.link}
										className='flex items-center px-3 h-10 rounded-[12px] text-sm font-medium text-black bg-white cursor-pointer box-border'
									>
										<div className='down-icon mr-2'>
											<img
												src='https://www.weex.com/_nuxt/img/view-black.67094aa.png'
												alt='l'
												className='w-[24px] h-[24px]'
											/>
										</div>
										View
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MediaKitPage
