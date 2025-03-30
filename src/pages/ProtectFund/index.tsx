import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProtectionFund = () => {
	const [activeQa, setActiveQa] = useState<string | null>(null)

	const faqs = [
		{
			id: 'q1',
			question: 'Q1. Who benefits from the WEEX Protection Fund?',
			answer:
				'All verified WEEX users benefit from our Protection Fund coverage when trading on our platform.',
		},
		{
			id: 'q2',
			question: 'Q2. Who is not covered in the WEEX Protection Fund?',
			answer:
				'Accounts involved in fraudulent activities or violating our terms of service are not eligible for protection.',
		},
		{
			id: 'q3',
			question: 'Q3. How do I make a claim?',
			answer:
				'Contact our support team with details of any incident, and our team will guide you through the claims process.',
		},
	]

	const toggleQa = (id: string) => {
		setActiveQa(activeQa === id ? null : id)
	}

	return (
		<div className='protectfund bg-[#0f1115] '>
			{/* Hero Section */}
			<div className='introduce bg-[linear-gradient(0deg,#0f1115,#0f1115,rgba(248,199,27,0.1))] max-sm:bg-transparent max-sm:px-[4.2vw]'>
				<div className='introduce_cont w-[1200px] flex mx-auto relative max-sm:flex-col-reverse max-sm:w-full max-sm:p-[0.4vw]'>
					<div className='introduce_left w-[787px] mt-[136px] max-sm:w-full max-sm:mt-0'>
						<div className='invest_fund text-[24px] font-[700] text-[#f8c71b] flex items-center max-sm:mt-[10vw] max-sm:text-[4.8vw]'>
							<div className='ico mr-[10px] max-sm:hidden'>
								<img
									src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljk5ODM3IDEuMDU4NDdMMTIuOTM4NiA2Ljk5ODY3TDYuOTk4MzcgMTIuOTM4OUwxLjA1OTU3IDYuOTk4NjdMNi45OTgzNyAxLjA1ODQ3WiIgZmlsbD0iI0Y4QzcxQiIvPgo8L3N2Zz4K'
									alt=''
								/>
							</div>
							<h1 className='font-[500]'>WEEX Protection Fund</h1>
						</div>

						<div className='our_task mt-[75px] w-[614px] text-[56px] font-[700] text-white max-sm:mt-[10.6vw] max-sm:w-full'>
							<strong className='font-[700]'>
								Your security, our priority
							</strong>
						</div>

						<p className='task_detail mt-[36px] w-[614px] font-[500] text-[#777989] max-sm:mt-[4.2vw] max-sm:w-[100%] max-sm:text-[4.2vw]'>
							Our mission is to inspire the world to embrace cryptocurrencies.
							In order to provide investors with a safe and secure trading
							environment when trading on our platform, WEEX is committed to
							maintaining an emergency insurance reserve of 1,000 BTC for our
							users.
						</p>

						<div className='wallet flex mt-[91px] mb-[50px] max-sm:my-[10.6vw]'>
							{/* BTC Wallet */}
							<motion.div
								className='wallet_bit relative w-[375px] h-[199px] bg-[#ffe82d] rounded-[24px] pt-[30px] px-[30px] pb-[22px] max-sm:w-full max-sm:h-[278px] max-sm:rounded-[4.2vw] max-sm:py-[4.2vw] max-sm:px-[4.2vw]'
								whileHover={{ y: -5 }}
							>
								<div className='wallet_title text-[#000]'>
									<div className='title text-[48px] font-[700] max-sm:text-[12.8vw]'>
										1,000
									</div>
									<div className='sub_title text-[30px] font-[700] mt-[5px] max-sm:text-[8vw] max-sm:mt-[2.6vw]'>
										BTC
									</div>
								</div>
								<div className='wallet_link absolute left-[30px] bottom-[22px] w-[120px] h-[32px] bg-black rounded-[8px] flex justify-between items-center px-[10px] font-[700] text-white cursor-pointer max-sm:static max-sm:mt-[10.6vw] max-sm:w-full max-sm:h-[11.7vw] max-sm:rounded-[2.1vw] max-sm:px-[12px] max-sm:text-[3.7vw]'>
									<div className='tit'>Wallet 1</div>
									<div className='ico'>
										<img
											src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ljk4Mzk0IDEzLjI5TDMuMTg5OTQgMTEuMjM1TDcuMzAyOTQgNy4xMjJMMy4xODk5NCAzLjFMNC45ODM5NCAxLjIxNUwxMC44ODk5IDcuMTIyTDQuOTgzOTQgMTMuMjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'
											alt=''
										/>
									</div>
								</div>
								<div className='btc_icon absolute right-0 top-[50px]  max-sm:top-[-4.8vw]'>
									<img
										src='https://www.weex.com/_nuxt/img/btc.c29a03b.svg'
										alt='Bitcoin'
										className='w-[80px] h-[100px]'
									/>
								</div>
							</motion.div>

							{/* USDT Wallet */}
							<motion.div
								className='wallet_usdt bg-gray-800 rounded-xl p-6 hidden'
								whileHover={{ y: -5 }}
							>
								<div className='wallet_title flex items-end mb-4'>
									<div className='title text-3xl font-bold'>10 M</div>
									<div className='sub_title text-xl ml-2'>USDT</div>
								</div>
								<div className='wallet_link flex items-center justify-between'>
									<div className='tit'>Wallet 2</div>
									<div className='ico'>
										<img
											src='data:image/svg+xml;base64,PHN2ZwogeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiAgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSJyZ2IoMjQ4LCAxOTksIDI3KSIKIGQ9Ik0wLjAsMC4wIEwxMy45OTksMC4wIEwxMy45OTksMTMuOTk5IEwwLjAsMTMuOTk5IEwwLjAsMC4wIFoiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiAgZmlsbD0icmdiKDAsIDAsIDApIgogZD0iTTQuOTg0LDEzLjI5IEwzLjE5MCwxMS4yMzUgTDcuMzAzLDcuMTIyIEwzLjE5MCwzLjEwIEw0Ljk4NCwxLjIxNSBMMTAuODkwLDcuMTIyIEw0Ljk4NCwxMy4yOSBaIi8+Cjwvc3ZnPgo='
											alt=''
										/>
									</div>
								</div>
								<div className='btc_icon mt-4 flex justify-center'>
									<img
										src='data:image/svg+xml;base64,PHN2ZyANIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0gd2lkdGg9IjgwcHgiIGhlaWdodD0iMTAwcHgiPg08cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBvcGFjaXR5PSIwLjA1OSIgZmlsbD0icmdiKDIzMCwgMTczLCAwKSINIGQ9Ik03OS45OTksOTAuMCBDNzEuNjQzLDk2LjI3NyA2MS4yNTYsOTkuOTk5IDQ5Ljk5OSw5OS45OTkgQzIyLjM4NSw5OS45OTkgMC4wLDc3LjYxMyAwLjAsNDkuOTk5IEMwLjAsMjIuMzg1IDIyLjM4NSwwLjAgNDkuOTk5LDAuMCBDNjEuMjU2LDAuMCA3MS42NDMsMy43MjEgNzkuOTk5LDkuOTk5IEw3OS45OTksOTAuMCBaTTY1LjczNCw0MC4yNzUgTDY1LjczNCwzMS41NDYgTDMzLjcyOSwzMS41NDYgTDMzLjcyOSw0MC4yNzUgTDQ1LjM2Nyw0MC4yNzUgTDQ1LjM2Nyw0Ni4xOTMgQzMyLjE3Niw0Ni43OTIgMjIuOTAsNTAuNjEgMjIuOTAsNTQuNCBDMjIuOTAsNTcuOTQ4IDMyLjE3Niw2MS4yMTcgNDUuMzY3LDYxLjgxNiBMNDUuMzY3LDcyLjI4MCBMNTQuOTYsNzIuMjgwIEw1NC45Niw2MS44MTYgQzY3LjI4OCw2MS4yMTcgNzcuMzczLDU3Ljk0OCA3Ny4zNzMsNTQuNCBDNzcuMzczLDUwLjYxIDY3LjI4OCw0Ni43OTIgNTQuOTYsNDYuMTkzIEw1NC45Niw0MC4yNzUgTDY1LjczNCw0MC4yNzUgWk0yNy42MzcsNTQuNCBDMjcuNjM3LDUxLjQ0OCAzNS4yNTYsNDkuMzE4IDQ1LjM2Nyw0OC44MzQgTDQ1LjM2Nyw1OS4xNzUgQzM1LjI1Niw1OC42OTEgMjcuNjM3LDU2LjU2MCAyNy42MzcsNTQuNCBaTTcxLjgyNiw1NC40IEM3MS44MjYsNTYuNTYwIDY0LjIwOCw1OC42OTEgNTQuOTYsNTkuMTc1IEw1NC45Niw0OC44MzQgQzY0LjIwOCw0OS4zMTggNzEuODI2LDUxLjQ0OCA3MS44MjYsNTQuNCBaIi8+DTwvc3ZnPg0='
										alt='USDT'
										className='h-12'
									/>
								</div>
							</motion.div>
						</div>
					</div>

					<div className='introduce_right absolute right-0 top-[135px] w-[480px] h-[450px] max-sm:static max-sm:w-full max-sm:h-auto max-sm:pt-[5.3vw]'>
						<img
							src='https://www.weex.com/_nuxt/img/img1_black.9cd26ef.png'
							alt='WEEX Protection Fund'
							className='w-full max-w-md mx-auto'
						/>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className='fund_feature bg-[#14161a] pt-[111px] pb-[60px] max-sm:pt-[8.5vw] max-sm:pb-[16vw] max-sm:bg-transparent'>
				<div className='fund_feature_cont mx-auto w-[1200px] max-sm:w-full max-sm:px-[4.2vw]'>
					<h2 className='fund_feature_title text-[40px] font-[700] text-white max-sm:text-[6.4vw]'>
						Highlights
					</h2>

					<div className='fund_block flex justify-between mt-[85px] max-sm:mt-[10.6vw] max-sm:flex-col'>
						{/* Feature 1 - Transparent */}
						<div className='fund_block_item w-[300px] h-[250px] max-sm:w-full max-sm:h-auto max-sm:flex max-sm:mb-[8.5vw] max-sm:gap-[4.2vw]'>
							<img
								src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4zMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzYuOTM3IDUuOTk5TDMyLjM4NSAyOC45OTlDMzIuMTY2IDMwLjEwNCAzMS45MyAzMC45OTkgMjkuOTg5IDMwLjk5OUgyMC45OTlWOS45OTlIMTIuMTQ1TDEyLjkzNyA1Ljk5OUMxMy4xNTYgNC44OTUgMTQuMjI4IDMuOTk5IDE1LjMzMyAzLjk5OUgzNS4zMzNDMzYuNDM3IDMuOTk5IDM3LjE1NSA0Ljg5NSAzNi45MzcgNS45OTlaIiBmaWxsPSIjRjhDNzFCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjguOTQ3IDEwLjk5OUwyNC4zOTUgMzMuOTk5QzI0LjE3NyAzNS4xMDQgMjMuMTA0IDM1Ljk5OSAyMS45OTkgMzUuOTk5SDEuOTk4OTVDMC44OTQ5NTQgMzUuOTk5IDAuMTc2OTU0IDM1LjEwNCAwLjM5NDk1NCAzMy45OTlMNC45NDY5NSAxMC45OTlDNS4xNjU5NSA5Ljg5NCA2LjIzODk1IDguOTk5IDcuMzQyOTUgOC45OTlIMjcuMzQzQzI4LjQ0OCA4Ljk5OSAyOS4xNjYgOS44OTQgMjguOTQ3IDEwLjk5OVpNOC44NzM5NSAxMy45OTlMOC4xNzA5NSAxNi45OTlIMTUuMTcxTDE1Ljg3NCAxMy45OTlIOC44NzM5NVpNNy43MDI5NSAxOC45OTlMNi45OTg5NSAyMS45OTlIMTguOTk5TDE5LjcwMiAxOC45OTlINy43MDI5NVoiIGZpbGw9IiNGOEM3MUIiLz4KPC9zdmc+Cg=='
								alt='Transparent'
								className='fund_icon w-[38px] h-[38px]'
							/>
							<div>
								<h3 className='fund_title mt-[20px] text-[30px] font-[700] text-white max-sm:mt-0 max-sm:text-[4.2vw]'>
									Transparent
								</h3>
								<p className='fund_text mt-[19px] font-[500] text-[#777989] max-sm:mt-[4.2vw] max-sm:text-[3.7vw]'>
									Our wallet addresses are made publicly available to
									demonstrate the importance of transparency and integrity on
									WEEX.
								</p>
							</div>
						</div>

						{/* Feature 2 - Reliable */}
						<div className='fund_block_item w-[300px] h-[250px] max-sm:w-full max-sm:h-auto max-sm:flex max-sm:mb-[8.5vw] max-sm:gap-[4.2vw]'>
							<img
								src='https://www.weex.com/_nuxt/img/feature2_v1.4e85f43.svg'
								alt='Reliable'
								className='fund_icon w-[38px] h-[38px]'
							/>
							<div>
								<h3 className='fund_title mt-[20px] text-[30px] font-[700] text-white max-sm:mt-0 max-sm:text-[4.2vw]'>
									Reliable
								</h3>
								<p className='fund_text mt-[19px] font-[500] text-[#777989] max-sm:mt-[4.2vw] max-sm:text-[3.7vw]'>
									The Protection Fund contains a great amount of Bitcoin to
									reduce volatility and WEEX will continue to monitor the size
									of the fund in order to ensure the fund size remains adequate.
								</p>
							</div>
						</div>

						{/* Feature 3 - Efficient */}
						<div className='fund_block_item w-[300px] h-[250px] max-sm:w-full max-sm:h-auto max-sm:flex max-sm:mb-[8.5vw] max-sm:gap-[4.2vw]'>
							<img
								src='https://www.weex.com/_nuxt/img/feature3_v1.1a18417.svg'
								alt='Efficient'
								className='fund_icon w-[38px] h-[38px]'
							/>
							<div>
								<h3 className='fund_title mt-[20px] text-[30px] font-[700] text-white max-sm:mt-0 max-sm:text-[4.2vw]'>
									Efficient
								</h3>
								<p className='fund_text mt-[19px] font-[500] text-[#777989] max-sm:mt-[4.2vw] max-sm:text-[3.7vw]'>
									The WEEX Protection Fund is entirely self-funded. As such, we
									are able to efficiently cover any loss to our users' funds
									without external bureaucracy.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className='fund_qa bg-[#0f1115] pt-[100px] py-[110px] max-sm:pt-[17.6vw] pb-[29.3vw]'>
				<div className='fund_qa_cont w-[1200px] mx-auto max-sm:w-[100vw] max-sm:px-[4.2vw]'>
					<h2 className='fund_qa_title text-[40px] font-[800] text-white pb-[34px] border-b border-[rgba(119,121,137,.15)] max-sm:text-[6.4vw]'>
						FAQ
					</h2>

					<div className='accordions mt-[52px] flex flex-col gap-[52px] max-sm:gap-[7.4vw]'>
						{faqs.map(faq => (
							<div key={faq.id} className=' overflow-hidden'>
								<button
									onClick={() => toggleQa(faq.id)}
									className='question w-full flex justify-between items-center text-left cursor-pointer'
								>
									<h3 className='qa-title text-[18px] font-[700] text-white'>
										{faq.question}
									</h3>
									<motion.div
										animate={{ rotate: activeQa === faq.id ? 180 : 0 }}
										className='text-white'
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
									{activeQa === faq.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className='pr-[20px] font-[500] text-[#777989] mb-[30px] mt-[20px]'
										>
											{faq.answer}
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Banner */}
			<div className='goregister_banner bg-[#0f1115] pt-[40px] pb-[90px] max-sm:pt-0 max-sm:pb-[24vw]'>
				<div className='goregister_banner_cont flex justify-between w-[1200px] mx-auto max-sm:flex-col-reverse max-sm:w-full max-sm:px-[4.2vw]'>
					<div className='goregister_left max-sm:text-center'>
						<h2 className='tit mt-[55px] text-[40px] font-[700] text-white max-sm:mt-[8vw] max-sm:text-[8vw]'>
							Use WEEX to trade securely
						</h2>
						<div className='sub_tit mt-[10px] text-[18px] font-[500] text-[#777989] max-sm:mt-[2.6vw] max-sm:text-[3.7vw]'>
							Funds are secured by the WEEX Protection Fund
						</div>
						<button className='btn mt-[75px] px-[40px] inline-block h-[50px] bg-[#ffe82d] rounded-[16px] text-[18px] font-[500] text-black text-center cursor-pointer hover:bg-[#f5d01b] max-sm:w-full max-sm:mt-[10.6vw]  max-sm:h-[12.8vw] max-sm:rounded-[2.1vw] max-sm:text-[4.2vw]'>
							Sign Up Now
						</button>
					</div>
					<div className='goregister_right w-[360px]'>
						<img
							src='https://www.weex.com/_nuxt/img/img2_black.a99d951.png'
							alt='Secure Trading'
							className='max-w-md w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProtectionFund
