import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ setIsOpen }: Props) => {
	const [showLanguages, setShowLanguages] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState('English')

	const languages = [
		{ name: 'English' },
		{ name: '简体中文' },
		{ name: '繁體中文' },
		{ name: 'Tiếng Việt' },
		{ name: 'فارسی' },
		{ name: 'العربية' },
		{ name: 'Русский' },
		{ name: 'Українська' },
		{ name: 'Deutsch' },
		{ name: 'Español (España)' },
		{ name: 'Español (Latinoamérica)' },
		{ name: 'Français' },
		{ name: 'Polski' },
		{ name: 'Português (Brasil)' },
		{ name: 'Italiano' },
		{ name: '日本語' },
	]

	return (
		<>
			<div className='top-0 bg-[rgba(15,17,21,.6)] z-9'>
				<div className='absolute bg-[#222] bg-no-repeat top-0 w-[80vw] h-full flex flex-col overflow-hidden z-9999 text-[4vw] right-0'>
					{/* Menu Header with Close Button */}
					<div className='w-full h-[20vw]'>
						<button
							onClick={() => setIsOpen(false)}
							className='float-right right-[3.2vw] w-[5.6vw] absolute top-[4.5vw]'
						>
							<svg width='24' height='24' viewBox='0 0 42 42' fill='none'>
								<path
									fillRule='evenodd'
									fillOpacity='0'
									fill='rgb(19, 20, 25)'
									d='M0.0,0.0 L41.999,0.0 L41.999,41.999 L0.0,41.999 L0.0,0.0 Z'
								/>
								<path
									fillRule='evenodd'
									fill='rgb(255, 255, 255)'
									d='M41.849,31.606 L37.606,35.849 L26.999,25.242 L16.393,35.849 L12.150,31.606 L22.757,20.999 L12.150,10.393 L16.393,6.150 L26.999,16.757 L37.606,6.150 L41.849,10.393 L31.242,20.999 L41.849,31.606 Z'
								/>
							</svg>
						</button>
					</div>

					{/* Menu Body */}
					<section className='max-h-[160vw] overflow-auto flex-1 px-[4vw]'>
						{/* Sign Up Button */}
						<button className=' w-[72vw] h-[12vw] bg-[#e6c325] rounded-[1.6vw] text-black text-center text-[3.7vw] font-[500] mb-[8vw]'>
							Sign Up Now
						</button>

						{/* Language Selector */}
						<div
							className='h-[13.3vw] text-white font-[500] flex justify-between items-center'
							onClick={() => setShowLanguages(!showLanguages)}
						>
							<div className=' '>Language</div>
							<div className='flex items-center'>
								<svg
									width='16'
									height='16'
									viewBox='0 0 28 28'
									fill='none'
									className={`transition-transform duration-200 ${
										showLanguages
											? 'transform rotate-90 text-yellow-400'
											: 'text-gray-400'
									}`}
								>
									<path
										fillRule='evenodd'
										opacity='0'
										fill='currentColor'
										d='M0.0,0.0 L27.999,0.0 L27.999,27.999 L0.0,27.999 L0.0,0.0 Z'
									/>
									<path
										fillRule='evenodd'
										fill={showLanguages ? '#FBBF24' : 'rgb(112, 122, 138)'}
										d='M10.984,26.75 L7.396,22.486 L15.621,14.260 L7.396,6.35 L10.984,2.446 L22.797,14.260 L10.984,26.75 Z'
									/>
								</svg>
							</div>
						</div>

						{/* Language Dropdown */}
						{showLanguages && (
							<ul className='pl-[8.6vw]'>
								{languages.map((language, index) => (
									<li
										key={index}
										className={`h-[8.8vw] text-[3.7vw] ${
											selectedLanguage === language.name
												? 'text-[#f8c71b]'
												: 'text-[#777989]'
										}`}
										onClick={() => {
											setSelectedLanguage(language.name)
											setShowLanguages(false)
										}}
									>
										{language.name}
									</li>
								))}
							</ul>
						)}

						{/* Menu Items */}
						<div className=''>
							<a
								href='#'
								className='flex items-center gap-[2.3vw] h-[13.3vw] text-white font-[500]'
							>
								<span>Download</span>
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M11.8355 19.1513C15.7261 18.5432 18.1169 15.9304 18.1169 11.6098C18.1169 9.57716 16.536 7.8833 14.9551 6.18944C13.3742 4.49559 11.7932 2.80173 11.7932 0.769104C7.72796 1.2208 2.30762 6.64114 2.30762 12.0615C2.30762 15.7267 4.61192 18.7774 8.86639 19.2306C8.32774 18.439 7.95312 17.3731 7.95312 15.9008C7.95312 13.5294 9.13888 11.9485 10.3245 11.158C10.384 11.2175 10.448 11.2801 10.5155 11.3461C11.3441 12.1565 12.6959 13.4786 12.6959 15.9008C12.6959 17.3245 12.3456 18.3682 11.8355 19.1513Z'
										fill='#EC4551'
									/>
								</svg>
							</a>

							<a
								href='/markets'
								className='block py-3 text-white hover:text-blue-400'
							>
								Market
							</a>
							<a
								href='/affiliate'
								className='block py-3 text-white hover:text-blue-400'
							>
								Affiliate
							</a>
							<a
								href='/lunc-burn'
								className='block py-3 text-white hover:text-blue-400'
							>
								Lunc Burn
							</a>

							<a
								href='#'
								className='flex items-center gap-[2.3vw] py-3 text-white hover:text-blue-400'
							>
								<span>Claim 800 USDT Daily Bonus!</span>

								<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M11.8355 19.1513C15.7261 18.5432 18.1169 15.9304 18.1169 11.6098C18.1169 9.57716 16.536 7.8833 14.9551 6.18944C13.3742 4.49559 11.7932 2.80173 11.7932 0.769104C7.72796 1.2208 2.30762 6.64114 2.30762 12.0615C2.30762 15.7267 4.61192 18.7774 8.86639 19.2306C8.32774 18.439 7.95312 17.3731 7.95312 15.9008C7.95312 13.5294 9.13888 11.9485 10.3245 11.158C10.384 11.2175 10.448 11.2801 10.5155 11.3461C11.3441 12.1565 12.6959 13.4786 12.6959 15.9008C12.6959 17.3245 12.3456 18.3682 11.8355 19.1513Z'
										fill='#EC4551'
									/>
								</svg>
							</a>

							<a
								href='/protectfund'
								className='block py-3 text-white hover:text-blue-400'
							>
								Protection Fund
							</a>
							<a
								href='/community'
								className='block py-3 text-white hover:text-blue-400'
							>
								Global Community
							</a>
							<a
								href='/official-verification'
								className='block py-3 text-white hover:text-blue-400'
							>
								Official Verification
							</a>
							<a
								href='/copy-trading/elite-trader'
								className='block py-3 text-white hover:text-blue-400'
							>
								Recruiting Traders
							</a>
						</div>

						{/* Dark Mode Toggle - Hidden as per your original code */}
						<div className='hidden'>
							<div className='flex justify-between items-center py-3'>
								<div></div>
								<svg width='82' height='44' viewBox='0 0 82 44' fill='none'>
									<path
										fillRule='evenodd'
										fill='rgb(15, 17, 21)'
										d='M22.0,0.0 L59.999,0.0 C72.150,0.0 81.999,9.849 81.999,22.0 C81.999,34.150 72.150,43.999 59.999,43.999 L22.0,43.999 C9.849,43.999 0.0,34.150 0.0,22.0 C0.0,9.849 9.849,0.0 22.0,0.0 Z'
									/>
									<path
										fillRule='evenodd'
										fill='rgb(112, 122, 138)'
										d='M21.999,3.999 C31.941,3.999 39.999,12.58 39.999,21.999 C39.999,31.941 31.941,39.999 21.999,39.999 C12.58,39.999 3.999,31.941 3.999,21.999 C3.999,12.58 12.58,3.999 21.999,3.999 Z'
									/>
								</svg>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default MobileMenu
