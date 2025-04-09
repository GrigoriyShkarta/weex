const ROI = () => {
	const roiData = [
		{ timeFrame: '1 hour', value: '0.58%', isPositive: true },
		{ timeFrame: '24 hours', value: '7.92%', isPositive: true },
		{ timeFrame: '7 days', value: '-3.22%', isPositive: false },
	]

	return (
		<div className='mt-[80px] max-sm:mt-[14.9vw]' id='WEEXToken'>
			<h2 className='text-[32px] font-[500] max-sm:text-[6.4vw]'>
				Ethereum ROI & Earning Potential This Week
			</h2>
			<p className='mt-[16px]'>
				See how Ethereum has performed recently. The table below shows the
				hourly, daily, and 7-day ROI for Ethereum.
			</p>

			<div className='overflow-x-auto mt-[16px]'>
				<table className='w-full border-collapse border border-gray-600'>
					<thead className='bg-[#222]'>
						<tr className='border border-gray-600'>
							<th className='px-6 py-3 text-left border border-gray-600'></th>
							<th className='px-6 py-3 text-left border border-gray-600'>
								1 hour
							</th>
							<th className='px-6 py-3 text-left border border-gray-600'>
								24 hours
							</th>
							<th className='px-6 py-3 text-left border border-gray-600'>
								7 days
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border border-gray-600'>
							<td className='px-6 py-4 border border-gray-600'>ROI</td>
							{roiData.map((data, index) => (
								<td
									key={index}
									className={`px-6 py-4 border border-gray-600 ${
										data.isPositive ? 'bg-green-500' : 'bg-red-500'
									}`}
								>
									{data.value}
								</td>
							))}
						</tr>
					</tbody>
				</table>
			</div>

			<p className='mt-[16px] text-[14px]'>
				This data reflects the ROI of Ethereum over different timeframes. While
				not a true Compound Annual Growth Rate (CAGR), these percentages
				illustrate the recent growth or decline in value. A positive percentage
				indicates growth, while a negative percentage indicates decline.
			</p>
			<p className='mt-[16px] text-[14px] text-[#8b8b8e]'>
				The cryptocurrency market is highly volatile. Invest with caution.
				Consider these short-term price fluctuations when making investment
				decisions.
			</p>
		</div>
	)
}

export default ROI
