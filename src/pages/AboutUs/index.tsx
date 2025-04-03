import { useEffect, useState } from 'react'
import AboutUsPage from './AboutUsPage'
import { Link } from 'react-router-dom'
import CommunityPage from './CommunityPage'
import MediaKitPage from './MediaKit'

const About = () => {
	const [page, setPage] = useState('aboutUs')
	const path = window.location.pathname.toLowerCase()

	useEffect(() => {
		// Получаем текущий URL
		if (path.includes('community')) {
			setPage('community')
		} else if (path.includes('media-kit')) {
			setPage('mediaKit')
		} else {
			setPage('aboutUs') // По умолчанию
		}
	}, [path])

	return (
		<div className='bg-[#0f1115]'>
			<div className='bg-[rgba(119,121,137,.05)]'>
				<div className='flex items-center w-[1200px] mx-auto gap-[24px] max-sm:px-[4.2vw] max-sm:w-full'>
					<Link
						to='/aboutUs'
						onClick={() => setPage('aboutUs')}
						className={`text-[16px] h-[58px] flex items-center border-b-2 max-sm:text-[4.2vw] ${
							page === 'aboutUs'
								? 'text-white border-[#f8c71b]'
								: 'text-[#777989] border-transparent'
						}`}
					>
						About Us
					</Link>
					<Link
						to='/community'
						onClick={() => setPage('community')}
						className={`text-[16px] h-[58px] flex items-center border-b-2 max-sm:text-[4.2vw] ${
							page === 'community'
								? 'text-white border-[#f8c71b]'
								: 'text-[#777989] border-transparent'
						}`}
					>
						Community
					</Link>
					<Link
						to='/Media-kit'
						onClick={() => setPage('mediaKit')}
						className={`text-[16px] h-[58px] flex items-center border-b-2 max-sm:text-[4.2vw] ${
							page === 'mediaKit'
								? 'text-white border-[#f8c71b]'
								: 'text-[#777989] border-transparent'
						}`}
					>
						Media Kit
					</Link>
				</div>
			</div>

			{page === 'aboutUs' && <AboutUsPage />}
			{page === 'community' && <CommunityPage />}
			{page === 'mediaKit' && <MediaKitPage />}
		</div>
	)
}

export default About
