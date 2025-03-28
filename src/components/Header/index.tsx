import { useState } from 'react'
import CubeIcon from '../../assets/svg/CubeIcon'
import DropdownFutures from './DropdownFutures'
import DropdownMain from './DropdownMain'
import DropdownRewards from './DropdownRewards'
import Lupa from '../../assets/svg/Lupa'
import Download from '../../assets/svg/Download'
import DropdownDownload from './DropdownDownload'
import World from '../../assets/svg/World'
import SearchDropdown from './SearchDropdown'

const Header = () => {
	const [activeDropdown, setActiveDropdown] = useState(null)
	let timeoutId: number | undefined = undefined

	const handleMouseEnter = (dropdown: any) => {
		clearTimeout(timeoutId)
		setActiveDropdown(dropdown)
	}

	const handleMouseLeave = () => {
		timeoutId = setTimeout(() => setActiveDropdown(null), 300) // Задержка 300 мс перед скрытием
	}

	return (
		<header className='pt-[65px]'>
			<nav className='fixed box-border px-6 w-full left-0 top-0 h-[65px] z-[2000] flex bg-[black]'>
				<div className='h-full flex items-center'>
					<a href='/' className='flex '>
						<img
							src='https://www.weex.com/_nuxt/img/logoweex_black.488d562.svg'
							className='logo-weex'
						/>
					</a>
				</div>

				<div className='flex-grow-0 w-6' />
				<div className='flex justify-between flex-1 max-sm:hidden'>
					<ul className='flex items-center leading-none relative gap-[24px]'>
						<li
							className='relative inline-box'
							onMouseEnter={() => handleMouseEnter('main')}
							onMouseLeave={handleMouseLeave}
						>
							<CubeIcon />
							{activeDropdown === 'main' && <DropdownMain />}
						</li>

						<li className='flex items-center relative'>
							<div className='relative inline-block'>
								<div className='flex items-center pointer'></div>
								<a
									href='/'
									className='text-[#fff] pointer hover:text-[#d8ae15] transition-colors duration-200'
								>
									Market
								</a>
							</div>
						</li>

						<li
							className='relative group'
							onMouseEnter={() => handleMouseEnter('futures')}
							onMouseLeave={handleMouseLeave}
						>
							<div className='flex items-center cursor-pointer'>
								<span className='text-white hover:text-[#d8ae15] transition-colors duration-200 group-hover:text-[#d8ae15]'>
									Futures
								</span>
								<svg
									width='12'
									height='12'
									viewBox='0 0 12 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={`ml-1 transition-transform duration-200 ${
										activeDropdown === 'futures' ? 'rotate-180' : ''
									}`}
								>
									<path
										d='M1.5 3.75L6 8.25L10.5 3.75'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='text-white group-hover:text-[#d8ae15] transition-colors duration-200'
									/>
								</svg>
							</div>
							{activeDropdown === 'futures' && <DropdownFutures />}
						</li>

						<li className='flex items-center relative'>
							<div className='relative inline-block'>
								<div className='flex items-center pointer'></div>
								<a
									href='/'
									className='text-[#fff] pointer hover:text-[#d8ae15] transition-colors duration-200'
								>
									Spot
								</a>
							</div>
						</li>

						<li className='flex items-center relative'>
							<div className='relative inline-block'>
								<div className='flex items-center pointer'></div>
								<a
									href='/'
									className='text-[#fff] pointer hover:text-[#d8ae15] transition-colors duration-200'
								>
									Copy Trade
								</a>
							</div>
						</li>

						<li className='flex items-center relative'>
							<div className='flex items-center gap-[4px]'>
								<img
									src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjM2NTA4IDE0Ljg5ODZDMTIuMjM1OSAxNC40NDk3IDE0IDEyLjUyMTUgMTQgOS4zMzMzNEMxNCA3LjgzMzM0IDEyLjgzMzMgNi41ODMzNCAxMS42NjY3IDUuMzMzMzRDMTAuNSA0LjA4MzM0IDkuMzMzMzMgMi44MzMzNCA5LjMzMzMzIDEuMzMzMzRDNi4zMzMzMyAxLjY2NjY4IDIuMzMzMzMgNS42NjY2OCAyLjMzMzMzIDkuNjY2NjhDMi4zMzMzMyAxMi4zNzE2IDQuMDMzOTkgMTQuNjIzIDcuMTczOTUgMTQuOTU3MkM2Ljc3NjQ0IDE0LjM3MzEgNi40OTk5OCAxMy41ODY1IDYuNDk5OTggMTIuNUM2LjQ5OTk4IDEwLjc1IDcuMzc0OTggOS41ODMzMyA4LjI0OTk4IDlDOC4yOTM5IDkuMDQzOTIgOC4zNDExMiA5LjA5MDEgOC4zOTA5IDkuMTM4NzlDOS4wMDIzNyA5LjczNjgyIDkuOTk5OTggMTAuNzEyNSA5Ljk5OTk4IDEyLjVDOS45OTk5OCAxMy41NTA2IDkuNzQxNTIgMTQuMzIwNyA5LjM2NTA4IDE0Ljg5ODZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzg0M18zMTMxMCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8zODQzXzMxMzEwIiB4MT0iOC4xNjY3IiB5MT0iMC4wOTQyMTIyIiB4Mj0iNC43NjQ1NiIgeTI9IjE1LjE3NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRDhBRTE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VDNDU0NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo='
									alt='hot'
									data-v-23812cb2=''
									data-v-2b19e9fd=''
								/>
								<a
									href='/'
									className='text-[#fff] pointer hover:text-[#d8ae15] transition-colors duration-200'
								>
									WE-Launch
								</a>
							</div>
						</li>

						<li
							className='relative group'
							onMouseEnter={() => handleMouseEnter('rewards')}
							onMouseLeave={handleMouseLeave}
						>
							<div className='flex items-center cursor-pointer'>
								<span className='text-white hover:text-[#d8ae15] transition-colors duration-200 group-hover:text-[#d8ae15]'>
									Rewards Hub
								</span>
								<svg
									width='12'
									height='12'
									viewBox='0 0 12 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={`ml-1 transition-transform duration-200 ${
										activeDropdown === 'rewards' ? 'rotate-180' : ''
									}`}
								>
									<path
										d='M1.5 3.75L6 8.25L10.5 3.75'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='text-white group-hover:text-[#d8ae15] transition-colors duration-200'
									/>
								</svg>
							</div>
							{activeDropdown === 'rewards' && <DropdownRewards />}
						</li>

						<li className='flex items-center relative'>
							<a href='/' className='pointer'>
								<div className='flex items-center justify-center h-[40px] rounded-[20px] gap-[4px] bg-[hsla(0,0%,100%,.08)] hover:bg-[#fff] group'>
									<img
										data-v-57eb15ee=''
										alt=''
										src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/navigationBar/f6cf74c72abada9420e9d65beff1eae4.png'
										loading='lazy'
										className='h-[32px]'
									/>
									<div className='text-[#fff] text-[13px] font-bold group-hover:text-[black]'>
										WWFC
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>

				<div className='pl-[24px] flex items-center max-sm:hidden'>
					<ul className='flex items-center relative justify-end gap-[16px]'>
						<li
							onMouseEnter={() => handleMouseEnter('search')}
							onMouseLeave={handleMouseLeave}
						>
							<Lupa />
							{activeDropdown === 'search' && <SearchDropdown />}
						</li>

						<li className='flex items-center relative'>
							<div className='relative inline-block'>
								<div className='flex items-center pointer'></div>
								<a
									href='/'
									className='text-[#fff] pointer hover:text-[#d8ae15] transition-colors duration-200'
								>
									Log In
								</a>
							</div>
						</li>

						<li>
							<a
								href='/'
								className='flex bg-[#fff] text-[#161616!important] items-center justify-center rounded-[100px] h-[44px] px-[24px] text-[16px] '
							>
								Sign Up
							</a>
						</li>

						<li
							onMouseEnter={() => handleMouseEnter('download')}
							onMouseLeave={handleMouseLeave}
						>
							<Download />
							{activeDropdown === 'download' && <DropdownDownload />}
						</li>

						<li>
							<a href='/'>
								<World />
							</a>
						</li>
					</ul>
				</div>

				<div className='hidden max-sm:block'>
					<img
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAU5JREFUeF7t3EGOg0AQBEHm/48eX5dz54FehR+QYoLCkiXk8/ikAietiT1A4xEABRoLxDkLBRoLxDkL/RrovffG17Q6N14o0Pf9Bxo/D0CBxgJxzkKBxgJxzkKBxgJxzkKBxgJxzkK/Bhpfz/rceKHrBeIDAAUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8Q5CwUaC8S58UK3v4pzzhkb/L0n4xjQ98SBWmj7peeRbz0foEBjgThnoUBjgThnoUBjgThnof8dND7f+tz4p+d6gfgAQIHGAnHOQoHGAnHOQoHGAnHOQoHGAnHOQoHGAnHOQoHGAnHOQoHGAnFuvNDtr+LEnvO/uwT6viUWGk8UKNBYIM5ZKNBYIM5ZKNBYIM5ZKNBYIM5Z6NdA4+tZnxsvdL1AfACgQGOBOGehQGOBOGehQGOBOPcDmfSP9WvkUZIAAAAASUVORK5CYII='
						className='w-[25px] h-[25px] absolute top-[3vw] right-[4vw]'
					/>
				</div>
			</nav>
		</header>
	)
}

export default Header
