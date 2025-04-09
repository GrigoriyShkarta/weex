const BuyWith = () => {
	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]'>
			<div className='text-[#8b8b8e] text-[14px]'>
				Can't Find WEEX Token (WXT) in the "Buy Crypto" Section?
			</div>
			<h2 className='mt-[16px] text-[32px] font-[500] max-sm:mt-[4.2vw] max-sm:text-[6.4vw]'>
				Buy WEEX Token with USDT!
			</h2>
			<p className='text-[14px] mt-[16px]'>
				If you don't see WEEX Token (WXT) listed in the "Buy Crypto" section,
				don't worry! You can still easily buy it on WEEX using USDT (Tether) or
				another stablecoin. Here's how:
			</p>

			<div className='mt-[24px]'>
				<h3 className='text-[20px] mb-[16px] font-[500]'>
					Step 1: Buy USDT (or Another Stablecoin)
				</h3>
				<p className='text-[14px] text-[#8b8b8e]'>
					Go through the regular "Quick Purchase" process (Steps 1 – 4 above)
					but choose USDT or your preferred stablecoin instead of WXT.
				</p>
			</div>

			<div className='mt-[24px]'>
				<h3 className='text-[20px] mb-[16px] font-[500]'>
					Step 2: Use the Spot Trading Feature
				</h3>
				<p className='text-[14px] text-[#8b8b8e]'>
					After buying USDT, go to the "Spot" trading section of the WEEX
					platform.
				</p>
				<p className='text-[14px] text-[#8b8b8e]'>
					Look for the WXT/USDT trading pair (or WXT paired with the stablecoin
					you bought).
				</p>
				<p className='text-[14px] text-[#8b8b8e]'>
					Enter the amount of WXT you want to buy or the amount of USDT you want
					to spend.
				</p>
				<p className='text-[14px] text-[#8b8b8e]'>
					Review the details and confirm your trade.
				</p>
			</div>

			<p className='mt-[24px] text-[14px]'>
				You're a WXT holder now! You can view your WXT balance by going to
				"Assets" {'>'} "Spot."
			</p>

			<div className='mt-[24px] p-[16px] rounded-[12px] border border-[#474747]'>
				<strong className='text-[20px] font-[500]'>
					Why Use USDT (or Another Stablecoin)?
				</strong>
				<p className='mt-[8px] text-[14px] text-[#8b8b8e]'>
					Stablecoins like USDT are designed to maintain a value pegged to a
					stable asset, like the US dollar. This makes them useful for:
				</p>
				<ul className='mt-[16px]'>
					<li className='text-[14px]'>
						Avoiding volatility: Your USDT value won't fluctuate as much as
						other cryptocurrencies while you're waiting to buy WXT.
					</li>
					<li className='text-[14px]'>
						Easier trading: Many cryptocurrencies have trading pairs with
						stablecoins, making it easy to swap between them.
					</li>
				</ul>
				<strong className='text-[20px] font-[500] mt-[16px] block'>
					Important Note:
				</strong>
				<ul className='mt-[16px]'>
					<li className='text-[14px]'>
						Trading fees may apply when buying and selling cryptocurrencies.
					</li>
					<li className='text-[14px]'>
						Always double-check trading pairs and details before confirming any
						transactions.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default BuyWith
