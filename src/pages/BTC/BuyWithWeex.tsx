import React from 'react'

type BuyWithWeexItemProps = {
	imageUrl: string
	title: string
	description: string
}

const BuyWithWeexItem: React.FC<BuyWithWeexItemProps> = ({
	imageUrl,
	title,
	description,
}) => {
	return (
		<div className='w-[202px] min-h-[216px] py-[24px] px-[16px] rounded-[24px] bg-[#222] max-sm:w-[43.7vw] max-sm:min-h-[58.6vw] max-sm:py-[6.4vw] max-sm:px-[4.2vw] max-sm:rounded-[6.4vw]'>
			<div
				className='w-[40px] h-[40px] bg-contain bg-no-repeat bg-center mb-4'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<h3 className='mt-[16px] text-[16px] font-[700]'>{title}</h3>
			<p className='mt-[8px] text-[12px] text-[#8b8b8e]'>{description}</p>
		</div>
	)
}

const BuyWithWeex: React.FC = () => {
	const items = [
		{
			imageUrl: '	https://www.weex.com/_pages/img/buy-weex1.1cefd83.png',
			title: 'No KYC Required',
			description:
				'Your funds are held securely in your own wallet, providing a safe and private environment for your transactions.',
		},
		{
			imageUrl: 'https://www.weex.com/_pages/img/buy-weex2.e381bce.png',
			title: 'Secure & Reliable',
			description:
				'Your assets are protected by robust security measures and 24/7 support.',
		},
		{
			imageUrl: 'https://www.weex.com/_pages/img/buy-weex3.88e3254.png',
			title: 'Trusted by Thousands',
			description:
				'Join over 1000000 users who choose WEEX for their Bitcoin trades.',
		},
		{
			imageUrl: 'https://www.weex.com/_pages/img/buy-weex4.872657e.png',
			title: 'Easy 5-Minute Purchase',
			description: 'Buy Bitcoin in just minutes with our intuitive platform.',
		},
		{
			imageUrl: 'https://www.weex.com/_pages/img/buy-weex5.7c2e111.png',
			title: 'Huge Crypto Selection',
			description:
				'Trade over 400 cryptocurrencies, with 20 new listings added daily.',
		},
		{
			imageUrl:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIfSURBVHgB7dw/T9tAGMfx56wEIUWVPEUdnY0hJdzWOVPHbjC29A2076QKbyBjx76CiGxsBhTmMEI8YMGCFOzjHP5K8BxnPbD4fh8pynDn5Zs72YkjEwEAAAAAAACERdWZPJ/P17Msi9vt9jo1VBzHZ71e79p3vlfANE237Jt9RQkFQClzZow50FofvjnXNVituDzPd0IJ95I6jeNP/1wrMnIdnudX38KNVzHJxcXld9cMNuDdtjVbFDilaMO2SLhxNmAURRsEK8ZEX7kxNmBRmITgHt+CDaiUauylSl2uFs6TCLwNAYUQUAgBhRBQiA1ovwt6f6EOWYsbWFtrjZfL5WeCSk4AAPAC+4Pq0dGxIXg0GGy+2grXgUIIKISAQggohIBCCCiEgEIIKISAQggohIBCCCiEgEIIKISAQggohIBCLWqAxWJBe3uj1buPfr9Pu7u/qNPpkFQjAo5GIzo5mXnPn0wm1O12aXt7h6QasYWzzG/lPXd+Xv+Y1zQiYJL0qK5qG7+HxtyVq7blbOa3jat4w+GQ6uDuyuG2pifc1vwgCCiEgEIIKISAQggo5AqIv7U+YVuwAcvSTAnu8S0cKzD6S7BSluo/N8YG1PrLvlLEHhgK22Cs9eaYG3eeRIqi+KmU2qdwTW2DP64Jng+dOP5hP4nf9jWgMEzL0r3yHtR67EmaprH9DbbBjwG4qc62p1prXIEAAAAAAAAAMG4B2cOHgWzvRKkAAAAASUVORK5CYII=',
			title: 'Flexible Payment Options',
			description:
				'Fund your account with ease using credit/debit cards, PayPal, bank transfers, and more.',
		},
		{
			imageUrl: 'https://www.weex.com/_pages/img/buy-weex7.1391289.png',
			title: 'Legal & Compliant',
			description:
				'Trade with confidence knowing WEEX operates legally worldwide.',
		},
		{
			imageUrl: 'https://www.weex.com/_pages/img/buy-weex8.224788f.png',
			title: 'Fee-Free New Listings',
			description:
				'Enjoy competitive trading fees as low as 0.0% on some crypto, with no slippage and minimal fees on large OTC transactions.',
		},
	]

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]' id='WhyBuyWEEX'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				Why Buy Bitcoin With WEEX?
			</h2>

			<p className='mt-[16px] text-[14px]'>
				WEEX Exchange offers a seamless and secure experience for purchasing
				Bitconi, making it the ideal platform for both beginners and seasoned
				traders. With a user-friendly interface and cutting-edge security
				features, you can trade confidently knowing your assets are protected.
				WEEX provides competitive fees, fast transactions, and a wide range of
				trading pairs, allowing you to diversify your portfolio effortlessly.
				Our dedicated customer support and educational resources ensure you are
				well-informed and supported throughout your trading journey. Start
				buying Bitcoin today on WEEX and enjoy the best crypto trading
				experience.
			</p>

			<div className='mt-[16px] flex flex-wrap justify-between gap-[16px]'>
				{items.map((item, index) => (
					<BuyWithWeexItem
						key={index}
						imageUrl={item.imageUrl}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>

			<p className='mt-[16px] text-[14px]'>
				Experience the WEEX difference! We make buying Bitcoin secure, simple,
				and rewarding.
			</p>
		</div>
	)
}

export default BuyWithWeex
