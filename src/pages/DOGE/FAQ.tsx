import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleItem = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}
	const faqItems = [
		{
			question: '1. What are the fees for buying Dogecoin on WEEX?',
			answer:
				'We strive to provide transparent and competitive fees. You can find a detailed breakdown of our trading fees on our <a href="https://www.weex.com/support/rate" target="_blank">Fee Schedule page</a>. Rest assured, we don\'t charge any deposit fees!',
		},
		{
			question: '2. What is the minimum amount of Dogecoin I can buy?',
			answer:
				'We want to make crypto accessible to everyone. You can start investing in Dogecoin with as little as $10.',
		},
		{
			question: '3. In which currencies can I buy Dogecoin on WEEX?',
			answer:
				'We currently support the following fiat currencies for Dogecoin purchases: US dollar (USD), Chinese yuan (CNY), Euros (EUR), Canadian dollar (CAD), British pound sterling (GBP), Swiss franc (CHF), and the Australian dollar (AUD).',
		},
		{
			question: '4. What if my national currency is not supported on WEEX?',
			answer:
				'We are continuously working to expand our supported currencies. In the meantime, you can explore using a credit card that allows transactions in a supported fiat currency like USD or CNY.',
		},
		{
			question: '5. How long does it take to buy Dogecoin?',
			answer:
				'We prioritize speed and efficiency. Once your account is funded, buying Dogecoin is usually instant.',
		},
		{
			question: '6. Is it safe to buy Dogecoin on WEEX?',
			answer:
				'Your security is our top priority. We utilize industry-leading security measures, including two-factor authentication and cold storage for digital assets to keep your funds and personal information safe.',
		},
		{
			question: '7. What if I need help with my Dogecoin purchase?',
			answer:
				"Our dedicated customer service team is here to assist you. You can reach us via live chat or email, and we'll be happy to answer any questions you may have.",
		},
		{
			question: '8. How can I buy Dogecoin as a beginner?',
			answer:
				'To buy Dogecoin as a beginner on WEEX, ensure you have completed the KYC verification process. You can access the trading page via your phone or computer. Just follow these steps:<br>1. Go to the trading list, select the Dogecoin pair, and select "Trade."<br>2. Select "Buy" and set your buying price.<br>3. Enter the amount of Dogecoin you want to buy.<br>4. Place your order by selecting "Buy Dogecoin."<br>5. Once everything is done, check your "Open Orders" and go back to your account assets under "Spot" to view your purchased Dogecoin.<br><br>If you have any questions, please contact our 24/7 online customer service center.',
		},
		{
			question: '9. Can I buy a small amount of Dogecoin, like $1 or $10?',
			answer:
				'Yes, on WEEX, you can buy small amounts of Dogecoin, including amounts as low as $1 or $10. Keep in mind that minimum purchase amounts can vary depending on the crypto and market conditions. For the most up-to-date information, check the "more information" button on the trading page for specific details on the crypto you\'re interested in. You can contact our customer service if you have any questions.',
		},
		{
			question: '10. What payment methods are available on WEEX?',
			answer:
				'You have several convenient options for buying Dogecoin on WEEX. Here are the most convenient ways:<br>Bank transfer: Simply transfer funds from your bank account to easily buy Dogecoin. This method is straightforward and highly recommended for its reliability.<br>Alipay: Utilize Alipay, a widely-used digital wallet in China, for fast and secure transactions on WEEX.<br>ChipPay: Use the ChipPay service directly through our WEEX app. Complete a quick identity verification and choose a merchant to make your purchase.<br><br>For more payment options, please visit the WEEX Support Center.',
		},
		{
			question: '11. Can I use PayPal to buy Dogecoin?',
			answer:
				'WEEX does not currently support direct purchases with PayPal. However, you may use PayPal to withdraw funds if it is linked to your bank account.',
		},
		{
			question: '12. Can I transfer Dogecoin from WEEX to my personal wallet?',
			answer:
				'Absolutely! You can easily transfer your Dogecoin from WEEX to any compatible external wallet. Just enter your wallet address and follow the simple transfer instructions on the platform.',
		},
		{
			question: '13. What is the best time to buy Dogecoin?',
			answer:
				"Wondering when to buy Dogecoin on WEEX? It all comes down to market conditions and your personal strategy. Many traders aim to buy during price dips or when the market is quieter, such as late at night or on weekends. Staying updated with market news and trends is crucial as they can influence prices significantly. If you're new to trading, WEEX Copy Trading is a great way to follow experienced traders and make informed decisions without the pressure.",
		},
		{
			question: '14. Will I have to pay taxes on my Dogecoin transactions?',
			answer:
				"It depends on your location. In many countries, profits from buying and selling Dogecoin are taxable. It's important to keep detailed records of your transactions and consult a tax professional to ensure you're following local regulations. You can also check your local tax authority's website, as it should provide up-to-date information.",
		},
		{
			question: '15. Which is the best exchange to buy Dogecoin?',
			answer:
				"WEEX is a great choice for buying Dogecoin. It's user-friendly and secure. WEEX frequently offers new trading pairs with no fees, which makes trading more affordable. If you're new to trading, you can also take advantage of their Affiliate Program and Copy Trading features to earn extra money.",
		},
	]

	return (
		<div
			className='flex justify-center pt-[80px] max-sm:mx-[16px] max-sm:pt-[54px]'
			id='FAQ'
		>
			<div className='content w-[1200px] max-sm:w-[full]'>
				<h2 className='title text-[32px] font-[700] border-b border-[rgba(119,121,137,.15)] pb-[16px] max-sm:text-[28px] text-white'>
					FAQ
				</h2>
				<div className='news-list mt-[32px] flex flex-col gap-[32px] mb-[48px]'>
					{faqItems.map((item, index) => (
						<div key={index} className='item'>
							<button
								onClick={() => toggleItem(index)}
								className='w-full flex justify-between items-center text-left'
							>
								<h3 className='text-white font-[500] text-[20px] max-sm:text-[16px]'>
									{item.question}
								</h3>
								<motion.div
									animate={{ rotate: activeIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className='text-yellow-400 text-lg'
								>
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M6 9l6 6 6-6' />
									</svg>
								</motion.div>
							</button>

							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className='mt-[16px] text-[#8b8b8e]'
									>
										{item.answer}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FAQ
