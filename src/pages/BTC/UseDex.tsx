import React from 'react'

const UseDex: React.FC = () => {
	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]' id='BuyWEEX'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				Buy Bitcoin (BTC) Using Decentralized Exchanges
			</h2>

			<div className='mt-[16px] text-[14px]'>
				Decentralized exchanges (DEXs) are peer-to-peer marketplaces where
				cryptocurrency traders can buy and sell directly, cutting out the
				middleman of traditional exchanges. These transactions run on smart
				contracts—self-executing code that ensures transparency and automation.
				Popular DEXs include Uniswap (the largest by volume), PancakeSwap (on
				the Binance Smart Chain), SushiSwap (Ethereum-based with yield farming
				and staking), Curve Finance (focused on stablecoins), and 1inch Exchange
				(which aggregates prices from multiple DEXs).
			</div>

			<div className='flex mt-[16px] gap-[24px] max-sm:flex-col'>
				{/* Pros */}
				<div className='flex-1 p-[24px] rounded-[24px] bg-[#222]'>
					<div className="w-[40px] h-[40px] bg-cover bg-[url('https://www.weex.com/_pages/img/smile.08b3076.png')]" />
					<div className='mt-[16px]'>
						<h3 className='text-[18px] font-[700]'>
							Pros of Buying Bitcoin on DEXs
						</h3>
						<ul className='flex flex-col'>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>Decentralization:</span>{' '}
								You control your funds, held securely in your own wallet.
							</li>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>Privacy:</span> Minimal
								or no KYC requirements for more private transactions.
							</li>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>
									Censorship resistance:
								</span>{' '}
								Accessible even in regions with trading restrictions.
							</li>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>Token variety:</span>{' '}
								They often list a wider selection of cryptocurrencies than some
								centralized exchanges.
							</li>
						</ul>
					</div>
				</div>

				{/* Cons */}
				<div className='flex-1 p-[24px] rounded-[24px] bg-[#222]'>
					<div className="h-[40px] w-[40px] bg-cover bg-[url('https://www.weex.com/_pages/img/upset.52f499d.png')]" />
					<div className='mt-[16px]'>
						<h3 className='text-[18px] font-[700]'>
							Cons of Buying Bitcoin on DEXs
						</h3>
						<ul className='flex flex-col'>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>Complexity:</span>{' '}
								Requires technical understanding of wallets and smart contracts.
							</li>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>
									Price volatility &amp; slippage:
								</span>{' '}
								Rapid price swings and potential for less favorable prices on
								large orders.
							</li>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>Limited features:</span>{' '}
								Fewer trading tools and features compared to centralized
								exchanges.
							</li>
							<li className='mt-[8px] text-[14px] text-[#8b8b8e]'>
								<span className='font-[700] text-white'>Scalability:</span> Can
								be slow and expensive during times of high network traffic.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UseDex
