const WhyBy = () => {
	const whyBuyItems = [
		{
			icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgB7dwxchoxFAbgJ22T0mVKfALCDTYnCDkB3MC5gfEJEt/ANwhlOtudO8AcIJQuKdOslCdY2WADkhaMJPx/MxSMxdj7r7T7VpIhAgAAAAAAODZBiRuNRqUQRU8I6vLbM37Ntaah1tV1p9MZU2RJBzidTi+V0oPtLfSg3W5fUUTJBugOz4obYpIB8rBtSVn89W2vVHXOw3lGEUhKkhxQmD5FkmSAUlI7rL38QpEk2gNFUCBKLe7OUSQXIF//ovWmJhLsgbKkjCQXYFHIb5SRpAI05YvWuqSMpNYDS8pMUgFyOXJJmUkmQB6+fS5fWpSZJALk8M5y7H1GEgEuwxMtylD0AOuh+4MyFTVA89TBsy4/KWPRAqzDuyWK9xx7CFECnEwmvUOGJ6VomxsRRXDUCdXlQcpffMA9OjBeMxlWVXVN+xnzxOw85ANHCbAuUy7qm0XSQ5YXrG54werKd4bbO8B6molfsrWlCZ85Zc7g3cpnuryidsG9o6S8zHmZ4KvPqp/XNdAsLXLT7o7wDDM8y/X5PNnNMDzDjJjfPtdVZ4BmhiRwji7ru+oL0eLj7rtaefTAIqsZ4kMSQjjXZjwCrE6kR4XjuclzV5tEF5XygQB34OVVZ02IAHdQSgxdbRDgTtWdqwUC3EqMfZ5GEOAWSql7n3YIcCvlvP4ZCHCz+eoz/S4IcCPtNXwNBLiBT/liIcCN3OWLhQDf8CtfLAT4im/5YiHAN5T39c9AgOu8yxcLAa7RQcPXQIArQsoXCwGu8S9fLAT4LKx8sRBgLbR8sRDgMxV8/TMQ4FJw+WIhwAXdaPgaCJCalS8WAlwIL18sBNiwfLE+fIBNyxcLPbBh+WI5A5RS/qOTpcdNyxfLpwcG7RnOyJyH73fakzNA/iUPdHrsFt4Z7ckZoNm1LiX9IU9VVT2tvE1xb+E9h9c51LcehWwy5zCKUgjxWWv16fXPtaYnIdTD6ll9fJzecg92blJ8b/w3z5TSfLNQN6H/xgAAAAAAAJCe/6Ex9ujJ0N9gAAAAAElFTkSuQmCC',
			title: 'Popularity',
			description:
				"With many holders already onboard, Ethereum is becoming a popular choice for those diving into the crypto universe. Don't miss your chance to be part of this growing community and discover the potential of Ethereum!",
		},
		{
			icon: 'https://www.weex.com/_pages/img/subtract.8421161.png',
			title: 'Trade Your Way',
			description:
				'Ethereum gives you the freedom to trade on your terms. Use it for spot and futures trading on both centralized and decentralized exchanges, and put yourself in control of your crypto experience.',
		},
	]

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]' id='WhyBuy'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				Why Buy Ethereum (ETH)?
			</h2>
			<p className='mt-[16px] text-[14px]'>
				WXT is a decentralized digital asset available for trading on WEEX. It
				is designed to meet various needs in the growing cryptocurrency market.
				This asset offers investors and traders the potential to diversify their
				portfolios, depending on its unique features and market trends. With its
				limited supply, WXT may provide scarcity, which could influence its
				value under certain conditions. Additionally, it supports use cases like
				payments, trading, and more, depending on its adoption and technological
				infrastructure. Make sure to understand its specific characteristics and
				carefully evaluate the risks and opportunities before investing.
			</p>
			<a
				href='/tokens/weex-token'
				target='_blank'
				className='mt-[8px] text-[14px] text-[#d8ae15] block'
			>
				Learn more about Ethereum (ETH)
			</a>

			<div className='flex mt-[24px] gap-[24px] max-sm:flex-col'>
				{whyBuyItems.map((item, index) => (
					<div key={index} className='flex-1 p-[24px] rounded-[24px] bg-[#222]'>
						<img
							src={item.icon}
							alt={item.title}
							className='w-[40px] h-[40px]'
						/>
						<h3 className='mt-[16px] text-[18px] font-[700]'>{item.title}</h3>

						<p className='mt-[8px] text-[14px] text-[#8b8b8e]'>
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default WhyBy
