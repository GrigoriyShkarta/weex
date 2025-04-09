import React, { useState } from 'react'

const RightSidebar: React.FC = () => {
	const [amount, setAmount] = useState<string>('')
	const [currency, setCurrency] = useState<string>('USD')
	const [wxtAmount, setWxtAmount] = useState<string>('')
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

	const currencies = [
		'USD',
		'CNY',
		'JPY',
		'TWD',
		'VND',
		'RUB',
		'EUR',
		'AED',
		'UAH',
		'PLN',
	]

	const handleCurrencyChange = (selectedCurrency: string) => {
		setCurrency(selectedCurrency)
		setIsDropdownOpen(false)
	}

	const calculateWxt = () => {
		// This would be replaced with actual API call or calculation
		const usdAmount = parseFloat(amount) || 0
		const wxtPrice = 0.02286
		const calculated = usdAmount / wxtPrice
		setWxtAmount(calculated.toFixed(8))
	}

	const cryptoGuides = [
		{
			name: 'Bitcoin',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_coin_img/d99bca657face47f8c24e2f5c7ef983e.png',
			link: '/how-to-buy/bitcoin',
		},
		{
			name: 'Ethereum',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/8c7d2cf75276d2a339e785150b2f62b7.png',
			link: '/how-to-buy/ethereum',
		},
		{
			name: 'Solana',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/ed524d4ea39d1d851018d710a76b74cd.png',
			link: '/how-to-buy/solana',
		},
		{
			name: 'XRP',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/3db965abfc5ade491b235aec325c5eb9.png',
			link: '/how-to-buy/xrp',
		},
		{
			name: 'Dogecoin',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/5b334524c37271407ff9dc3a4b9033d7.png',
			link: '/how-to-buy/dogecoin',
		},
	]

	const pricePages = [
		{
			name: 'Bitcoin',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_coin_img/d99bca657face47f8c24e2f5c7ef983e.png',
			link: '/tokens/bitcoin',
		},
		{
			name: 'Ethereum',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/8c7d2cf75276d2a339e785150b2f62b7.png',
			link: '/tokens/ethereum',
		},
		{
			name: 'Solana',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/ed524d4ea39d1d851018d710a76b74cd.png',
			link: '/tokens/solana',
		},
		{
			name: 'XRP',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/3db965abfc5ade491b235aec325c5eb9.png',
			link: '/tokens/xrp',
		},
		{
			name: 'Dogecoin',
			icon: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_pro_coin_img/5b334524c37271407ff9dc3a4b9033d7.png',
			link: '/tokens/dogecoin',
		},
	]

	return (
		<div className='w-[296px] max-sm:w-full max-sm:mt-[14.9vw]'>
			{/* Converter Section */}
			<div className=''>
				<h2 className='text-[18px] font-[500]'>Sign Up to Buy WEEX Token</h2>
				<p className='text-[14px] mt-[16px] text-[#8b8b8e]'>
					Start with just $10
				</p>

				<div className='mt-[32px]'>
					<div className='flex items-center justify-between bg-[hsla(0,0%,100%,.08)] rounded-[12px] px-[16px] h-[40px] gap-[8px]'>
						<input
							type='number'
							placeholder='0'
							className='flex-1 text-[14px] border-none bg-transparent font-[500] outline-none'
							value={amount}
							onChange={e => {
								setAmount(e.target.value)
								calculateWxt()
							}}
						/>

						<div className='w-[63px] border-none h-[24px]'>
							<button
								className='h-full flex items-center'
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<span>{currency}</span>
								<svg
									className='w-4 h-4 ml-2'
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
							</button>

							{isDropdownOpen && (
								<div className='absolute z-10 mb-[-7px] mr-[-7px] overflow-scroll h-full max-h-[274px] bg-[#222]'>
									{currencies.map(curr => (
										<div
											key={curr}
											className='p-2 cursor-pointer'
											onClick={() => handleCurrencyChange(curr)}
										>
											{curr}
										</div>
									))}
								</div>
							)}
						</div>
					</div>

					<div className='flex justify-center my-[8px] h-[24px]'>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB3ZpBctNAEEW/ZCfBrsSpYk9OwA24AStOAavcgCWX4AZZsoJlVmxZseUMVDDYGFs2/eUeIcmSrZlRNBKvqku2Myn9r+mxWj2O0AK73S6Sw4XESGMsEWkYthKJxEZjHUXRFp5EcERFTyTONFygkSU8zFgbyAmfwOMCVPBbYmFrxEqAiJ+ifeFlaGLRdHAjISI8lsMM+9zuAq6VhyazcdKAiOfivMTjXvXKU0vMxcSfY4OOitKUmSIsR1Oq1kBPxBtqTcRVH4r4c/RHPJlqKh9wYEAX7BX6x6VqK1A1A9fofsE2gZpm5Q8LBjTvR3BnhoqTVIx5BjfGqjEjM6DT45P3zyW+SHyTeF0zhsLvddw7uDHRaiAlPwO+4j9gn37kTc24lxI3J8acwpQyKakBvfpP4EZZ/DFOpVdTslkwM+BaTdqIb5NsFoyBCewJJd6QXvRY08e2SONiLIv/gW45YxpRvEv6XKMo/k7iI7rn3OXqk6/YiybvJW4RhjHFu9b4twgn3DDiDPjceUOTGogxXOIhiyfR0A2k6bPDgBm6gYQG1giLuavfw/45YUsD3v1JD4z4F9jXVrbPCBsaSBAOir/Jvbetp9IUWiEcefEsT97CjnUs/RYu4tDrgOJfSTxY/E8i2hNzHwhpwEU8YVs+KyP4pouv03KOu4on6UVPDWgaLeHHXe71p5oxn/FPrI/4FdOHL7L2hD4kP4VfU4uLcqbifMac4vuBAdKzhm4dhUZvoZjTP2zQX7blLnVVNTpHP+sjajpYLwcGNLd+oX/MTd7nqXwekIHpjiH6w6Juq+n/3WIy6G7NFRBkk++niD9aqzXdZmXngo2srh5B+U1YmfNlXDa6HzOl0oqg9Y3uwhn2s0ETF2gPU8ostaxpjM+PPWiEfVXuK7h299Ya1sINrSzMnBnzUxse8+tlp8HcTjRWrqLz/AWcwdupp4CcuAAAAABJRU5ErkJggg=='
							alt='Transfer'
							className='h-6 w-6'
						/>
					</div>

					<div className='flex items-center justify-between bg-[hsla(0,0%,100%,.08)] rounded-[12px] px-[16px] h-[40px] gap-[8px]'>
						<input
							type='number'
							placeholder='0'
							className='flex-1 text-[14px] border-none bg-transparent font-[500] outline-none'
							value={wxtAmount}
							readOnly
						/>
						<div className='flex items-center gap-[8px]'>
							<img
								src='https://s2.coinmarketcap.com/static/img/coins/64x64/32207.png'
								alt='WEEX Token'
								className='w-5 h-5 mr-2 rounded-full'
							/>
							<span>WXT</span>
						</div>
					</div>
				</div>

				<a
					href='/register?forward_entry_source=%2Fhow-to-buy%2Fweex-token'
					className='flex items-center justify-center min-w-[240px] h-[56px] px-9 rounded-[16px] text-black bg-[#e6c325] box-border font-medium text-[16px] font-[PlusJakartaSans-Medium,Arial-Medium,-apple-system,BlinkMacSystemFont,sans-serif] mt-[32px]'
				>
					Buy WEEX Token
				</a>
			</div>

			{/* Price Section */}
			<div className='mt-[56px]'>
				<div className='flex items-center gap-[16px]'>
					<img
						src='https://s2.coinmarketcap.com/static/img/coins/64x64/32207.png'
						alt='WEEX Token'
						className='w-8 h-8 rounded-full'
					/>
					<h2 className='text-[18px] font-[700]'>WEEX Token Price</h2>
				</div>

				<div className='flex items-center flex-wrap mt-[16px] gap-[29px]'>
					<h2 className='text-[32px] font-[700]'>$ 0.02286</h2>
				</div>

				<p className='mt-[16px] p-[16px] text-[14px] rounded-[16px] border border-[#282828] text-[#d1d1d2]'>
					The current WEEX Token price is{' '}
					<span className='font-bold'>$0.02286</span>, with a 24-hour trading
					volume of <span className='font-bold'>$9.32M</span>. WEEX Token has{' '}
					<span className='font-bold text-green-500'>increased</span> by{' '}
					<span className='font-bold'>4.84</span>% in the past 24 hours. WEEX
					Token's market cap currently sits at{' '}
					<span className='font-bold'>$0</span>. There are currently{' '}
					<span className='font-bold'>0.00 WXT</span> in circulation out of a
					maximum supply of <span className='font-bold'>0.00 WXT</span>.
				</p>
			</div>

			{/* Other Crypto Section */}
			<div className='mt-[56px]'>
				<h2 className='text-[18px] font-[500]'>Buy Other Crypto</h2>
				<div className='flex flex-col mt-[24px] p-[16px] rounded-[16px] border border-[#282828] gap-[16px]'>
					{cryptoGuides.map(crypto => (
						<a
							key={crypto.name}
							href={crypto.link}
							className='flex flex-row-reverse flex-wrap items-center justify-between p-[8px]'
						>
							<img
								src={crypto.icon}
								alt={crypto.name}
								className='w-10 h-10 mb-2'
							/>
							<span className=' text-center'>How to buy {crypto.name}</span>
						</a>
					))}
				</div>

				<h2 className='mt-[56px] text-[18px] font-[500]'>
					Learn More About Crypto
				</h2>
				<div className='flex flex-col mt-[24px] p-[16px] rounded-[16px] border border-[#282828] gap-[16px]'>
					{pricePages.map(crypto => (
						<a
							key={crypto.name}
							href={crypto.link}
							className='flex flex-row-reverse flex-wrap items-center justify-between p-[8px]'
						>
							<img
								src={crypto.icon}
								alt={crypto.name}
								className='w-10 h-10 mb-2'
							/>
							<span className='text-center'>{crypto.name} price</span>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default RightSidebar
