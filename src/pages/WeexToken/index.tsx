import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HowToBuy from './HowToBuy'
import BuyWith from './BuyWith'
import WhyBy from './WhyBy'
import ROI from './ROI'
import CompareRoi from './CompareRoi'
import UseDex from './UseDex'
import BuyWithWeex from './BuyWithWeex'
import PaymentOptions from './PaymentOptions'
import AfterBuy from './AfterBuy'
import FAQ from './FAQ'
import CallToAction from './CallToAction'
import MoreCryptos from './MoreCryptos'
import RightSidebar from './RightSidebar'

const HowToBuyWeexToken: React.FC = () => {
	const [activeTab, setActiveTab] = useState('HowTuBuy')
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
	const observerRef = useRef<IntersectionObserver | null>(null)

	// Initialize Intersection Observer
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5, // Trigger when 50% of section is visible
		}

		observerRef.current = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setActiveTab(entry.target.id)
				}
			})
		}, options)

		// Observe all sections
		Object.values(sectionRefs.current).forEach(section => {
			if (section) {
				observerRef.current?.observe(section)
			}
		})

		return () => {
			observerRef.current?.disconnect()
		}
	}, [])

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		setActiveTab(id)
	}

	const navigationItems = [
		{
			id: 'HowTuBuy',
			title: 'How to buy',
		},
		{
			id: 'WhyBuy',
			title: 'Why Buy WEEX Token(WXT)',
		},
		{
			id: 'WEEXToken',
			title: 'WEEX Token ROI & Earning Potential This Week',
		},
		{
			id: 'BuyWEEX',
			title: 'Buy WEEX Token (WXT) Using Decentralized Exchanges',
		},
		{
			id: 'WhyBuyWEEX',
			title: 'Why Buy WEEX Token With WEEX?',
		},
		{
			id: 'BuyingWEEX',
			title: 'Buying WEEX Token on WEEX: Your Payment Options',
		},
		{
			id: 'WhatCanIDo',
			title: 'What Can I Do After I Buy WEEX Token (WXT)',
		},
		{
			id: 'FAQ',
			title: 'FAQ',
		},
	]

	return (
		<div className='bg-[#151515] text-white max-sm:pb-[26.6vw]'>
			{/* Navigation */}
			<div className='py-[48px] text-white w-[1200px] mx-auto max-sm:px-[4.2vw] max-sm:w-full max-sm:py-0'>
				<div className='container mx-auto flex items-center space-x-6 max-sm:py-[6.4vw] flex-wrap'>
					<Link to='/' className='font-medium max-sm:text-[14px]'>
						WEEX
					</Link>
					<Link to='/how-to-buy' className='font-medium max-sm:text-[14px]'>
						How to Buy Crypto
					</Link>
					<span className='font-medium text-gray-400 max-sm:text-[14px]'>
						Buy WEEX Token (WXT)
					</span>
				</div>
			</div>

			<div className='fixed left-[40px] flex flex-col gap-[22px] top-[176px] w-[161px] py-[26px] px-[24px] z-100 rounded-[24px] border border-[#2e2e2e] bg-[#222] max-sm:hidden max-sm:px-[4.2vw]'>
				{navigationItems.map(nav => (
					<div
						key={nav.id}
						className={`text-[12px] cursor-pointer ${
							activeTab === nav.id ? 'text-white' : 'text-[#8b8b8e]'
						}`}
						onClick={() => scrollToSection(nav.id)}
					>
						{nav.title}
					</div>
				))}
			</div>

			<div className='flex justify-between gap-[48px] w-[1200px] mx-auto max-sm:w-full max-sm:flex-col max-sm:px-[4.2vw]'>
				<div className='w-[856px] pb-[100px] max-sm:w-full max-sm:pb-0'>
					{/* Coin Base Info */}
					<div>
						<div className='flex items-center gap-[16px] max-sm:flex-col max-sm:items-start'>
							<span className='bg-[#24c18d] px-[16px] rounded-[8px] h-[28px] leading-[28px]'>
								Listed Crypto
							</span>
							<span className='text-gray-500 text-sm ml-4 max-sm:ml-0 max-sm:text-[4.2vw] max-sm:text-white'>
								Last updated on 2025/04/08
							</span>
						</div>
						<h1 className='mt-[16px] text-[32px] font-[500] max-sm:mt-[4.2vw] max-sm:text-[6.4vw]'>
							A Guide on Where and How to Buy WEEX Token (WXT)
						</h1>
						<p className='mt-[16px] max-sm:mt-[4.2vw] max-sm:text-[3.2vw]'>
							You can buy WEEX Token on WEEX. Create your free account and
							connect a funding method to buy over 400 cryptocurrencies,
							including WXT. Here's a step-by-step guide to get you started:
						</p>
						<div className='flex items-center mt-[32px] gap-[32px] max-sm:flex-col max-sm:items-start max-sm:mt-[6.4vw] max-sm:gap-[4.2vw]'>
							<button className='flex items-center justify-center min-w-[240px] h-[56px] px-9 rounded-[16px] text-black bg-[#e6c325] box-border font-medium text-[16px] font-[PlusJakartaSans-Medium,Arial-Medium,-apple-system,BlinkMacSystemFont,sans-serif] max-sm:w-full'>
								Buy WEEX Token
							</button>
							<div className=''>
								<span className=''>Coin rating</span>
								<div className='flex gap-2 items-center'>
									<div className='flex'>
										{[...Array(4)].map((_, i) => (
											<svg
												key={i}
												className='w-4 h-4 text-yellow-300 max-sm:w-[5.3vw] max-sm:h-[5.3vw]'
												aria-hidden='true'
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'
												viewBox='0 0 22 20'
											>
												<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
											</svg>
										))}
										<svg
											className='w-4 h-4 text-gray-300 max-sm:w-[5.3vw] max-sm:h-[5.3vw]'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 22 20'
										>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
									</div>
									<span className='text-gray-600 ml-1'>4.0</span>
								</div>
							</div>
						</div>
					</div>

					<HowToBuy />
					<BuyWith />
					<WhyBy />
					<ROI />
					<CompareRoi />
					<UseDex />
					<BuyWithWeex />
					<PaymentOptions />
					<AfterBuy />
					<FAQ />
					<CallToAction />
					<MoreCryptos />
				</div>

				<RightSidebar />
			</div>
		</div>
	)
}

export default HowToBuyWeexToken
