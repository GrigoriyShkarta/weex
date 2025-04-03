import { useState } from 'react'

const RoadMap = () => {
	const [year, setYear] = useState('2018')

	const timelineData = [
		{ year: '2018', info: ['WEEX was established'], lineWidth: '5%' },
		{ year: '2021', info: ['WEEX obtained the license'], lineWidth: '25%' },
		{
			year: '2022',

			info: [
				'Achieved $5 billion in daily trading volume',
				'Earned the trust of 500,000 users',
			],
			lineWidth: '45%',
		},
		{
			year: '2023',
			info: [
				'Completed a funding round led by Korean digital marketing giant FSN at a valuation of $100 million',
				'Reached >2 million users',
			],
			lineWidth: '65%',
		},
		{
			year: '2024',
			info: [
				'Major expansion into North America',
				'Team of 300+ experts and professionals',
			],
			lineWidth: '85%',
		},
	]

	const activeBlock = timelineData.find(block => block.year === year)

	return (
		<div className='mt-[180px] max-sm:mt-[18.6vw]'>
			<h2 className='mb-[80px] text-[40px] font-[500]'>Roadmap</h2>

			<div className='relative pb-[86px] bg-[url("https://www.weex.com/_nuxt/img/img_ditu.8dd25d1.png")] bg-[size:100%_auto] bg-bottom bg-no-repeat'>
				<div className='w-[520px] h-[440px] max-sm:w-full max-sm:h-[76.8vw]'>
					<div className='mb-[32px] text-[32px] font-[700]'>
						{activeBlock?.year}
					</div>
					<div className=' text-[24px] text-[#777989]'>
						{activeBlock?.info.map(text => (
							<p key={text} className='mt-[16px]'>
								{text}
							</p>
						))}
					</div>
				</div>
				<div>
					{timelineData.map((item, index) => (
						<div
							key={index}
							style={{ position: 'absolute', left: item.lineWidth }}
							className={`text-center z-10 cursor-pointer`}
							onClick={() => setYear(item.year)}
						>
							<div
								className={`w-6 h-6 mx-auto mb-2 ${
									year === item.year ? 'bg-[#F8C71B]' : 'bg-gray-600'
								} rounded-full`}
							></div>
							<span
								className={`font-medium ${
									year === item.year ? 'text-[#F8C71B]' : 'text-gray-400'
								}`}
							>
								{item.year}
							</span>
						</div>
					))}
				</div>

				<div className='relative top-3 left-0 right-0 h-1 bg-gray-700'>
					<div
						className='h-1 bg-[#F8C71B]'
						style={{ width: `${activeBlock?.lineWidth}` }}
					></div>
				</div>
			</div>
		</div>
	)
}

export default RoadMap
