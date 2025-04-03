import { useRef, useState } from 'react'

const CommunityPage = () => {
	const [activeTab, setActiveTab] = useState('global')

	const tabs: {
		id: 'global' | 'chinese' | 'korea' | 'more_about'
		label: string
	}[] = [
		{ id: 'global', label: 'Global' },
		{ id: 'chinese', label: 'Chinese' },
		{ id: 'korea', label: 'Korea' },
		{ id: 'more_about', label: 'More About WEEX' },
	]

	const socialLinks = {
		global: [
			{
				name: 'X (formerly Twitter)',
				url: 'https://twitter.com/WEEX_Official',
				icon: 'https://www.weex.com/_nuxt/img/X.1a14ce1.png',
			},
			{
				name: 'Medium',
				url: 'https://weexofficial.medium.com/',
				icon: 'https://www.weex.com/_nuxt/img/Medium.9d9fb89.png',
			},
			{
				name: 'Telegram',
				url: 'https://t.me/WeexGlobal_Group',
				icon: 'https://www.weex.com/_nuxt/img/Telegram.e4b79fc.png',
			},
			{
				name: 'Discord',
				url: 'https://discord.gg/2CFnGbMzbh',
				icon: '	https://www.weex.com/_nuxt/img/Discord.65b7b32.png',
			},
			{
				name: 'Facebook',
				url: 'https://www.facebook.com/WEEXGlobal/',
				icon: 'https://www.weex.com/_nuxt/img/Facebook.6594a10.png',
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/company/weex-global',
				icon: 'https://www.weex.com/_nuxt/img/Linkedin.1836486.png',
			},
			{
				name: 'YouTube',
				url: 'https://www.youtube.com/@WEEXGlobal',
				icon: 'https://www.weex.com/_nuxt/img/Youtube.d3a2174.png',
			},
		],
		chinese: [
			{
				name: 'X (formerly Twitter)',
				url: 'https://twitter.com/WEEX_Official',
				icon: 'https://www.weex.com/_nuxt/img/X.1a14ce1.png',
			},
			{
				name: 'Medium',
				url: 'https://weexofficial.medium.com/',
				icon: 'https://www.weex.com/_nuxt/img/Medium.9d9fb89.png',
			},
			{
				name: 'Telegram',
				url: 'https://t.me/WeexGlobal_Group',
				icon: 'https://www.weex.com/_nuxt/img/Telegram.e4b79fc.png',
			},
			{
				name: 'Discord',
				url: 'https://discord.gg/2CFnGbMzbh',
				icon: '	https://www.weex.com/_nuxt/img/Discord.65b7b32.png',
			},
			{
				name: 'Facebook',
				url: 'https://www.facebook.com/WEEXGlobal/',
				icon: 'https://www.weex.com/_nuxt/img/Facebook.6594a10.png',
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/company/weex-global',
				icon: 'https://www.weex.com/_nuxt/img/Linkedin.1836486.png',
			},
			{
				name: 'YouTube',
				url: 'https://www.youtube.com/@WEEXGlobal',
				icon: 'https://www.weex.com/_nuxt/img/Youtube.d3a2174.png',
			},
		],
		korea: [
			{
				name: 'X (formerly Twitter)',
				url: 'https://twitter.com/WEEX_Official',
				icon: 'https://www.weex.com/_nuxt/img/X.1a14ce1.png',
			},
			{
				name: 'Medium',
				url: 'https://weexofficial.medium.com/',
				icon: 'https://www.weex.com/_nuxt/img/Medium.9d9fb89.png',
			},
			{
				name: 'Telegram',
				url: 'https://t.me/WeexGlobal_Group',
				icon: 'https://www.weex.com/_nuxt/img/Telegram.e4b79fc.png',
			},
			{
				name: 'Discord',
				url: 'https://discord.gg/2CFnGbMzbh',
				icon: '	https://www.weex.com/_nuxt/img/Discord.65b7b32.png',
			},
			{
				name: 'Facebook',
				url: 'https://www.facebook.com/WEEXGlobal/',
				icon: 'https://www.weex.com/_nuxt/img/Facebook.6594a10.png',
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/company/weex-global',
				icon: 'https://www.weex.com/_nuxt/img/Linkedin.1836486.png',
			},
			{
				name: 'YouTube',
				url: 'https://www.youtube.com/@WEEXGlobal',
				icon: 'https://www.weex.com/_nuxt/img/Youtube.d3a2174.png',
			},
		],
		more_about: [
			{
				name: 'Coinmarketcap',
				url: 'https://coinmarketcap.com/exchanges/weex/',
				icon: '	https://www.weex.com/_nuxt/img/Coinmarketcap.c8e58a8.png',
			},
			{
				name: 'Cryptowisser',
				url: 'https://www.cryptowisser.com/exchange/weex-exchange/',
				icon: 'https://www.weex.com/_nuxt/img/Cryptowisser.5482d70.png',
			},
			{
				name: 'Feixiaohao',
				url: 'https://www.feixiaohaozh.info/exchange/weex/',
				icon: 'https://www.weex.com/_nuxt/img/Feixiaohao.ccb3553.png',
			},
		],
	}

	const sectionRefs = {
		global: useRef<HTMLDivElement>(null),
		chinese: useRef<HTMLDivElement>(null),
		korea: useRef<HTMLDivElement>(null),
		more_about: useRef<HTMLDivElement>(null),
	}

	const handleTabClick = (
		tabId: 'global' | 'chinese' | 'korea' | 'more_about'
	) => {
		setActiveTab(tabId)
		sectionRefs[tabId]?.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	return (
		<div className='w-[1200px] mx-auto text-white max-sm:px-[4.2vw] max-sm:w-full'>
			{/* Hero Section */}
			<div className='pt-[65px] flex flex-row-reverse justify-between max-sm:flex-col max-sm:pt-[65px] max-sm:mb-[15.4vw] max-sm:items-center max-sm:text-center'>
				<img
					src='https://www.weex.com/_nuxt/img/top_bg1.d9715b8.png'
					alt='WEEX Trading Community & Social Media'
					className='w-[520px] h-auto max-sm:w-[85.6vw]'
				/>
				<div className='w-[600px] max-sm:w-full max-sm:pt-[10.8vw]'>
					<h1 className='font-[700] text-[48px] mb-[16px] max-sm:text-[8.5vw]'>
						WEEX Trading Community & Social Media
					</h1>
					<p className='text-[20px] text-[#777989] max-sm:text-[3.7vw]'>
						Welcome to the WEEX community! Stay informed about the latest news
						and updates in the crypto world by following our social media
						accounts. As one of the best crypto trading platforms out there,
						WEEX offers a seamless trading experience without the need for KYC.
						Experience the excitement of futures trading on WEEX with up to 200X
						leverage, allowing you to magnify your earnings.
					</p>
				</div>
			</div>

			{/* Tabs Section */}
			<div className='container mx-auto px-4 py-8'>
				<div className='border-b border-gray-700'>
					<div className='flex overflow-x-auto'>
						{tabs.map(tab => (
							<button
								key={tab.id}
								onClick={() => handleTabClick(tab.id)}
								className={`px-6 py-4 text-[16px] font-[500] whitespace-nowrap cursor-pointer ${
									activeTab === tab.id
										? 'text-[#f8c71b] border-b-2 border-[#f8c71b]'
										: 'text-[#777989] hover:text-white'
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>
				</div>

				{/* Tab Content */}
				<div className='mt-[15px]'>
					<SocialLinksSection
						refProp={sectionRefs.global}
						title='Global'
						links={socialLinks.global}
					/>
					<SocialLinksSection
						refProp={sectionRefs.chinese}
						title='Chinese'
						links={socialLinks.chinese}
					/>
					<SocialLinksSection
						refProp={sectionRefs.korea}
						title='Korea'
						links={socialLinks.korea}
					/>
					<SocialLinksSection
						refProp={sectionRefs.more_about}
						title='More About'
						links={socialLinks.more_about}
					/>
				</div>
			</div>
		</div>
	)
}

export default CommunityPage

const SocialLinksSection = ({
	links,
	title,
	refProp,
}: {
	links: any[]
	title: string
	refProp: any
}) => (
	<div
		ref={refProp}
		className='py-[48px] px-[40px] rounded-[24px] border border-gray-500 border-opacity-15 bg-[rgba(119,121,137,.05)] my-[26px]'
	>
		<h2 className='text-[24px] font-[500] mb-[48px] text-white'>{title}</h2>
		<div className='grid grid-cols-1 md:grid-cols-2'>
			{links.map((link, index) => (
				<div key={index} className='flex'>
					<img
						src={link.icon}
						alt={link.name}
						className='mr-[16px] w-[40px] h-[40px] mb-[40px]'
					/>
					<div>
						<p className='font-medium text-white text-[16px] font-[500]'>
							{link.name}
						</p>
						<a
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-[14px] text-white underline max-sm:text-wrap max-sm:break-all'
						>
							{link.url}
						</a>
					</div>
				</div>
			))}
		</div>
	</div>
)
