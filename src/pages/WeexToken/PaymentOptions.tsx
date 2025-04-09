import React from 'react'

type PaymentOptionItemProps = {
	imageSrc: string
	title: string
	description: string
	altText?: string
}

const PaymentOptionItem: React.FC<PaymentOptionItemProps> = ({
	imageSrc,
	title,
	description,
	altText = 'WEEX',
}) => {
	return (
		<div className='w-[274px] min-h-[216px] py-[24px] px-[16px] rounded-[24px] bg-[#222] max-sm:w-full'>
			<div className=' h-[40px] '>
				<img
					src={imageSrc}
					alt={altText}
					className='max-w-full max-h-full object-contain'
				/>
			</div>
			<h3 className='mt-[16px] text-[16px] font-[700]'>{title}</h3>
			<p className=''>{description}</p>
		</div>
	)
}

const PaymentOptions: React.FC = () => {
	const paymentMethods = [
		{
			imageSrc:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANGSURBVHgB7ZvhWdswEIZPMv+bTlCzAE02CBO0GwATwAYpEwATNExQOgFsYEIGaDZoBmiknonzYBJs2TrFceLv/QE4SBi90UmnSCYCAAAAAAAAgKZR1FKSJBkS6eHyyowHg8GMWkjrBKbilIpGStEw/7q19GTt4o5FPlCLaIVAltbj3nauNV3yvxSXl7YzY8w1ixxTC9ipwFSc1jqVdsWXvXq17cxalfbK612G904EFoWpLxzeYxZ5zyKfqGEaFcjivrO4y1Di1snGyfsmw3vrAmVh6stynOQfnrYd3lsTyOL6y4lBnVFj4jbJwntr42RwgaHHt1Bk4X0depwMInCVhiilvrVN3CZh0yCRwN2Mb6EIkwZ5CcyWWavxbe/Jxsl0lfNMNaklsK3jWyh80iCnwP0OU1+qp0FH5CCKjn5Za4fUKVSsdfQz7ZF8cVpWUpMDfieOqaNwx3FGqFMgKMcZwtaaK2t1f3XNHznF3MUPYvZdxxh7x9/muVecnz16pTEvL9PHQxsXObMYn5ycXFBNnD3wIxaLfxdpHsg/xnQYPKfbBgSaJ+BauDBHnHMuNZfWaeIePniF8Cb6tmxZxw0ZrC+TODl/5PevX1BlznWO8w3k8knxfomd8ZfjtXvyAiD6SwVUyfGqECSNiSL9xVFkoxdwAz47yq/VUXFx8Q9/V7pq4kkjpgAgDxQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIUEEWmsc5wajeP0VpdQnCki2B5zjKHZUCXLWUSwwSSZXJfu7y5toO+IGxqvr6XQ6IkcDeE/38v09yuHyo7fy6Z6wuXFU6U0mkxEJ8T4jrVR0ppTtu+S98Xqoe8Z1elXrZJvfVP1I8eoelP79ij3stc6ztYvfPif3awtMexK/23/oADFmcVr3ORKfEK7Y4/YRXbttHgKjQz5oXrttHoeLFg/G6JgOEpwRbJzKk8jy6cuuPCdCVHUyqSSQ86Wb7EGbzsAzcvoM3Q9XuYqTiDqnjpFP5EvLuQpkK4jOhG6OXn71VAQ+TCjH2XEgsBynwEqTSJK8nPOaMaZuMR8Mvt4SAAAAAAAAALSO/3MFSDJuCgyWAAAAAElFTkSuQmCC',
			title: 'Bank Transfer',
			description:
				'A secure option for large purchases, though transfer times and fees may vary.',
		},
		{
			imageSrc: 'https://www.weex.com/_pages/img/apple_pay.7ac2c95.png',
			title: 'Apple Pay & Google Pay',
			description:
				'The fastest way to buy WEEX Token using your credit or debit card on your mobile device.',
		},
		{
			imageSrc: '	https://www.weex.com/_pages/img/credit.df78827.png',
			title: 'Credit/Debit Card',
			description:
				'A quick and easy way to buy WEEX Token using your Visa or Mastercard through our partner, ALCHEMY.',
		},
		{
			imageSrc: 'https://www.weex.com/_pages/img/ideal.253594b.png',
			title: 'iDEAL',
			description:
				'Buy instantly using your mobile banking app or online banking system through iDEAL.',
		},
		{
			imageSrc: 'https://www.weex.com/_pages/img/secure.e955ef5.png',
			title: 'SEPA',
			description: 'A fast, secure, and cost-effective way to buy using Euros.',
		},
	]

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]' id='BuyingWEEX'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				Buying WEEX Token on WEEX: Your Payment Options
			</h2>

			<p className='mt-[16px] text-[14px]'>
				The WEEX buying process is powered by industry leaders PLGPAY, CHIPPAY,
				ALCHEMY, and JBP, giving you secure and reliable options to purchase
				WEEX Token.
			</p>

			<div className='flex flex-wrap mt-[16px] gap-[16px]'>
				{paymentMethods.map((method, index) => (
					<PaymentOptionItem
						key={index}
						imageSrc={method.imageSrc}
						title={method.title}
						description={method.description}
					/>
				))}
			</div>

			<p className='text-[#8b8b8e] text-[14px] mt-[16px]'>
				The third-party quick coin purchase service charges users a transaction
				fee to fund service quality enhancement and ensure stability in coin
				acquisition. These fees are more affordable compared to other fiat
				currency trading platforms while offering greater security and privacy.
			</p>
		</div>
	)
}

export default PaymentOptions
