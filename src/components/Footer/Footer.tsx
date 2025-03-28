import { useState } from 'react'

const Footer = () => {
	return (
		<div className='bg-black text-white py-12 px-4 md:px-8 max-sm:pt-0 max-sm:pt-[16px]'>
			<div className='max-w-7xl mx-auto flex gap-8 max-sm:flex-col-reverse'>
				{/* Left Column - Logo and Contact */}
				<div className='md:col-span-2'>
					<div className='mb-6 max-sm:hidden'>
						<img
							src='https://www.weex.com/_nuxt/img/logoweex_black.488d562.svg'
							alt='WEEX Logo'
							width='115'
							height='24'
							className='h-6'
						/>
					</div>

					{/* Social Icons */}
					<div className='flex space-x-4 mb-6'>
						{[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
							<a key={i} href='#' className='text-gray-400 hover:text-white'>
								<span className={`link-icon${i}`}></span>
							</a>
						))}
					</div>

					{/* Contact Info */}
					<div className='space-y-2 text-sm text-gray-400 max-sm:text-[16px] max-sm:flex max-sm:flex-col max-sm:gap-[24px]'>
						<div>
							Customer Support:{' '}
							<a href='#' className='text-gray-400 hover:text-[#d8ae15]'>
								@weikecs
							</a>
						</div>
						<div>
							Business Cooperation:{' '}
							<a href='#' className='text-gray-400 hover:text-[#d8ae15]'>
								@weikecs
							</a>
						</div>
						<div>
							Quant Trading & MM:{' '}
							<a
								href='mailto:bd@weex.com'
								className='text-gray-400 hover:text-[#d8ae15]'
							>
								bd@weex.com
							</a>
						</div>
						<div>
							VIP Services:{' '}
							<a
								href='mailto:support@weex.com'
								className='text-gray-400 hover:text-[#d8ae15]'
							>
								support@weex.com
							</a>
						</div>
					</div>
				</div>

				{/* Right Columns - Links */}
				<FooterSection
					title='About'
					links={[
						{ text: 'About Us', href: '/aboutus' },
						{ text: 'Media Kit', href: '/Media-kit' },
						{ text: 'WEEX Community', href: '/community' },
						{ text: 'WXT Zone', href: '/wxt' },
						{
							text: 'Announcements',
							href: 'https://weexsupport.zendesk.com/hc/en-us/categories/18540264809497-Latest-Announcement',
							external: true,
						},
						{
							text: 'Michael Owen Global Brand Ambassador',
							href: '/weex-owen',
						},
					]}
				/>

				<FooterSection
					title='Compliance'
					links={[
						{
							text: 'Legal Statement',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/4417379598745',
							external: true,
						},
						{
							text: 'Risk Disclosure',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/9544830692505',
							external: true,
						},
						{
							text: 'User Agreement',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/4417379529241',
							external: true,
						},
						{
							text: 'Privacy Policy',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/4417383227545',
							external: true,
						},
						{
							text: 'Whistleblower Notice',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/9544541660057',
							external: true,
						},
						{
							text: 'AML/KYC Policies',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/4417379667481',
							external: true,
						},
						{
							text: 'Law Enforcement',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/37782530742681',
							external: true,
						},
					]}
				/>

				<FooterSection
					title='Products'
					links={[
						{ text: 'Invite Friends', href: '/useragent' },
						{ text: 'Futures', href: '/futures/BTC-USDT' },
						{ text: 'Spot', href: '/trade/BTC-USDT' },
						{ text: 'Copy Trade', href: '/copy-trading' },
						{ text: 'Market', href: '/markets' },
					]}
				/>

				<FooterSection
					title='Services'
					links={[
						{ text: 'Proof of Reserves', href: '/proof-of-reserves' },
						{
							text: 'OTC',
							href: 'https://weexsupport.zendesk.com/hc/en-us/categories/4467195499673',
							external: true,
						},
						{ text: 'Download', href: '/download' },
						{ text: 'Affiliate', href: '/affiliate' },
						{ text: 'VIP Services', href: '/asset/rateDesc' },
						{
							text: 'Listing Application',
							href: 'https://forms.gle/fW6CDUAqUbvKY3cUA',
							external: true,
						},
						{
							text: 'Affiliate T&C',
							href: 'https://weexsupport.zendesk.com/hc/en-us/articles/16598153464857',
							external: true,
						},
						{ text: 'Sitemap', href: '/sitemap' },
					]}
				/>

				<FooterSection
					title='Support'
					links={[
						{
							text: 'Help Center',
							href: 'https://weexsupport.zendesk.com/hc/en-us',
							external: true,
						},
						{ text: 'Fee Schedule', href: '/support/rate' },
						{
							text: 'Trading Rules',
							href: 'https://weexsupport.zendesk.com/hc/en-us/sections/4411638039833',
							external: true,
						},
						{ text: 'Official Verification', href: '/official-verification' },
						{ text: 'Submit Feedback', href: '#' },
					]}
				/>

				<FooterSection
					title='Learn'
					links={[
						{
							text: 'FAQ',
							href: 'https://weexsupport.zendesk.com/hc/en-us/categories/4410757386393',
							external: true,
						},
						{
							text: 'Spot',
							href: 'https://weexsupport.zendesk.com/hc/en-us/sections/4411635873049',
							external: true,
						},
						{
							text: 'Futures',
							href: 'https://weexsupport.zendesk.com/hc/en-us/sections/4411638039833',
							external: true,
						},
						{
							text: 'Glossary',
							href: 'https://weexsupport.zendesk.com/hc/en-us/sections/4410854448409',
							external: true,
						},
						{ text: 'Crypto prices', href: '/tokens' },
						{ text: 'WXT price', href: '/tokens/weex-token' },
						{ text: 'BTC price', href: '/tokens/bitcoin' },
						{ text: 'ETH price', href: '/tokens/ethereum' },
						{ text: 'DOGE price', href: '/tokens/dogecoin' },
						{ text: 'How to Buy Crypto', href: '/how-to-buy' },
						{ text: 'How to buy WXT', href: '/how-to-buy/weex-token' },
						{ text: 'How to buy BTC', href: '/how-to-buy/bitcoin' },
						{ text: 'How to buy ETH', href: '/how-to-buy/ethereum' },
						{ text: 'How to buy DOGE', href: '/how-to-buy/dogecoin' },
					]}
				/>
			</div>
		</div>
	)
}

const FooterSection = ({ title, links }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='space-y-3 max-sm:pb-4'>
			<div
				className='flex justify-between items-center cursor-pointer max-sm:mb-0'
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className='text-white font-bold text-[18px] mb-[32px] max-sm:mb-0 max-sm:text-[16px]'>
					{title}
				</h3>

				<svg
					className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 max-sm:block hidden ${
						isOpen ? 'rotate-180' : ''
					}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</div>

			<ul
				className={`space-y-2 text-sm text-gray-400 max-sm:gap-[16px] max-sm:pt-[16px] ${
					isOpen ? 'max-sm:block' : 'max-sm:hidden'
				}`}
			>
				{links.map((link, index) => (
					<li key={index}>
						<a
							href={'/'}
							className='hover:text-[#d8ae15] block py-1 max-sm:py-[2.6vw] max-sm:px-[5vw]'
							target={link.external ? '_blank' : '_self'}
							rel={link.external ? 'noopener noreferrer' : ''}
						>
							{link.text}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Footer
