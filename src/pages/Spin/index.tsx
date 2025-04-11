import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import spin from '../../assets/spin.png' // Ensure the file extension matches the actual file
import CountdownTimer from './Timer'
import TaskComponent from './Task'
import Rules from './Rules'
import FAQ from './FAQ'
import useMobileDetection from '../../utils/useMobileDetection'

const winners = [
	{
		id: 1,
		text: 'Congrats to 49******88 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 2,
		text: 'Congrats to 29******39 for winning 3,000 WXT!',
		color: 'text-yellow-500',
	},
	{
		id: 3,
		text: 'Congrats to 49******92 for winning 1 USDT!',
		color: 'text-green-500',
	},
	{
		id: 4,
		text: 'Congrats to 19******04 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 5,
		text: 'Congrats to 31******83 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 6,
		text: 'Congrats to 49******88 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 7,
		text: 'Congrats to 29******39 for winning 3,000 WXT!',
		color: 'text-yellow-500',
	},
	{
		id: 8,
		text: 'Congrats to 49******92 for winning 1 USDT!',
		color: 'text-green-500',
	},
	{
		id: 9,
		text: 'Congrats to 19******04 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 10,
		text: 'Congrats to 31******83 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 11,
		text: 'Congrats to 49******88 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 12,
		text: 'Congrats to 29******39 for winning 3,000 WXT!',
		color: 'text-yellow-500',
	},
	{
		id: 13,
		text: 'Congrats to 49******92 for winning 1 USDT!',
		color: 'text-green-500',
	},
	{
		id: 14,
		text: 'Congrats to 19******04 for winning 5 USDT!',
		color: 'text-green-500',
	},
	{
		id: 15,
		text: 'Congrats to 31******83 for winning 5 USDT!',
		color: 'text-green-500',
	},
]

const Spin = () => {
	const [index, setIndex] = useState(0)
	const isMobile = useMobileDetection()

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % winners.length)
		}, 2500)
		return () => clearInterval(interval)
	}, [])

	const prizes = [
		{
			name: '2,025 XRP',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/247f46ab0e80914a15332caa544a9885.png',
		},
		{
			name: '1 ADA',
			img: '	https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/99cf2a4a85c0a856cad98a7b01597ed9.png',
		},
		{
			name: '30 WXT',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/a24857763fecd8e2f734e32eda7d0e91.png',
		},
		{
			name: '1 USDT',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/8a3a56cba7012205b9dd4801dcf6c2bb.png',
		},
		{
			name: '0.01 BTC',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/a905b9f312db6f91daef483b689091d8.png',
		},
		{
			name: '5 USDT',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/8a3a56cba7012205b9dd4801dcf6c2bb.png',
		},
		{
			name: '3,000 WXT',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/01ee5d30c8dda7f7b5e4679b539008f5.png',
		},
		{
			name: '10 USDT',
			img: 'https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/8a3a56cba7012205b9dd4801dcf6c2bb.png',
		},
	]

	const targetDate = new Date()
	targetDate.setDate(targetDate.getDate() + 9) // 9 days + current partial day = ~9 days 12 hours left
	targetDate.setHours(targetDate.getHours() + 12)
	targetDate.setMinutes(targetDate.getMinutes() + 44)
	targetDate.setSeconds(targetDate.getSeconds() + 31)

	return (
		<div className='relative items-center bg-[#151515] pb-[48px]'>
			<div className='h-[100vh] max-sm:h-[503px]'>
				<div className='absolute top-[326px] left-0 z-99 max-sm:top-0'>
					<div className='h-[250px] overflow-hidden'>
						<motion.div
							key={index}
							animate={
								isMobile ? { x: ['0%', '-100%'] } : { y: ['0%', '-100%'] }
							}
							transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
							className={`flex ${
								isMobile ? 'flex-row w-max' : 'flex-col'
							} gap-2`}
						>
							{[...winners, ...winners].map((item, index) => (
								<div
									key={index}
									className={`p-3 rounded-lg ${item.color} h-[42px] w-fit text-sm text-[#8b8b8e]
						rounded-tr-[30px] rounded-br-[30px] bg-[#333]
						px-4 py-3 mt-2 border-none opacity-45 max-sm:h-[20px] max-sm:px-1 max-sm:py-1 max-sm:mt-0`}
								>
									{item.text}
								</div>
							))}
						</motion.div>
					</div>
				</div>

				<div
					className="absolute
	bg-[url('https://www.weex.com/static/images/lottery/title_bg_darts.png')] bg-cover bg-no-repeat bg-center px-[35px] py-[10px] text-white text-[14px] whitespace-nowrap top-[1%] left-[9%] hidden max-sm:block"
				>
					11.03, 18:00:00 - 10.04, 06:59:59 (UTC+3)
				</div>
				<img
					src='https://www.weex.com/static/images/lottery/darts-bg.webphttps://www.weex.com/static/images/lottery/dart-title.png'
					alt='img'
					className='text-transparent absolute right-[120px] bottom-[-30px] w-[90px] h-[90px] hidden  '
				/>
				<img
					src={spin}
					alt='spin'
					className='hidden max-sm:block absolute top-[3%]'
				/>
				<div className='hidden min-w-[251px] justify-center gap-[20px] absolute top-[502px] left-[20%] max-sm:flex'>
					<button className='w-full cursor-pointer h-[40px] rounded-[100px] font-[700] text-[24px] bg-[#e2bd22]'>
						Sign Up
					</button>
				</div>

				<div className='banner h-[110vh] relative w-full max-sm:hidden'>
					<div className='bg-[url("https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/e4953adfd418020d0ace31f22d81c2c3.png")] absolute top-0 left-0 w-full h-full z-0 bg-no-repeat bg-center bg-contain'>
						{/* <div className='bg-[url("https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/c41dde07cb741211d759ff1401a92303.png")] absolute top-0 left-0 w-full h-full z-0 bg-no-repeat bg-center bg-contain'> */}
						<div className='relative z-9 mx-auto max-w-[1200px] w-full text-center'>
							<div className='h-[170px] w-[700px] mx-auto relative'>
								<div className='text-[50px] top-[40px] font-[700] text-white absolute left-1/2 transform -translate-x-1/2 text-nowrap z-99'>
									Daily Spin: Round 14
								</div>

								<div
									className="absolute top-[110px] left-1/2 transform -translate-x-1/2 
	bg-[url('https://www.weex.com/static/images/lottery/title_bg_darts.png')] bg-cover bg-no-repeat bg-center px-[35px] py-[10px] text-white text-[14px] whitespace-nowrap"
								>
									11.03, 18:00:00 - 10.04, 06:59:59 (UTC+3)
								</div>
								<img
									src='https://www.weex.com/static/images/lottery/dart-title.png'
									alt='img'
									className='text-transparent absolute right-[120px] bottom-[-30px] w-[90px] h-[90px]'
								/>
							</div>
						</div>
						<div className='flex flex-row justify-center'>
							<div className='relative flex flex-col items-center'>
								<div className='mb-[120px] w-[614px] h-[514px] relative flex justify-center items-center'>
									<img
										src='https://www.weex.com/static/images/lottery/darts-bg.webp'
										className='absolute left-0 top-0 z-2'
									/>
									<div className='relative w-[610px] h-[610px] mt-[96px] rounded-[50%] z-3'>
										{prizes.map((prize, index) => (
											<div
												key={index}
												className='absolute w-[610px] h-[610px] pl-[23%] pt-[10%] flex flex-col items-center box-border'
												style={{ transform: `rotate(${22.5 + index * 45}deg)` }}
											>
												<p
													className='text-white w-[136px] text-center text-wrap text-[20px] ml-[18px] mt-[40px] '
													style={{
														transform: `rotate(${18.5 + index}deg)`,
														color: `${index % 2 !== 0 ? 'black' : 'white'}`,
													}}
												>
													{prize.name}
												</p>
												<img
													src={`${prize.img}`}
													alt=''
													className='w-20 h-20 object-contain ml-[-23px]'
													style={{
														transform: `rotate(${15.5 + index}deg)`,
													}}
												/>
											</div>
										))}
									</div>
								</div>
								<div className='min-w-[251px] flex justify-center gap-[20px] absolute bottom-[-60px]'>
									<button className='w-full cursor-pointer h-[56px] rounded-[100px] font-[700] text-[24px] bg-[#e2bd22]'>
										Sign Up
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-[96px] mx-auto w-[1200px] rounded-[32px] px-[24px] py-[40px]  border border-[#2e2e2e] max-sm:w-full max-sm:border-none'>
				<CountdownTimer targetDate={targetDate} />
			</div>
			<TaskComponent />
			<div className='mt-[96px] mx-auto w-[1200px] max-sm:w-full max-sm:border-none max-sm:px-[4.2vw] max-sm:mt-0'>
				<Rules />
				<FAQ />
			</div>
		</div>
	)
}

export default Spin
