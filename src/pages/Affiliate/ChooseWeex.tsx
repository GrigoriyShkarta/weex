import { useEffect, useState } from 'react'

interface GraphPoint {
	id: number
	referrals: number
	commission: string
	pointStyle: React.CSSProperties
	lineStyle: React.CSSProperties
	commissionStyle: React.CSSProperties
	triangleStyle: React.CSSProperties
}

const ChooseWeex = () => {
	const [activePoint, setActivePoint] = useState<number>(1)

	const [isMobile, setIsMobile] = useState(false)

	// Проверяем мобильное устройство при монтировании и изменении размера
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768) // 768px - типичный брейкпойнт для мобильных устройств
		}

		// Проверяем сразу при загрузке
		checkIfMobile()

		// Добавляем слушатель изменения размера
		window.addEventListener('resize', checkIfMobile)

		// Убираем слушатель при размонтировании
		return () => window.removeEventListener('resize', checkIfMobile)
	}, [])

	const graphPoints: GraphPoint[] = [
		{
			id: 1,
			referrals: 30,
			commission: '≈ 566',
			pointStyle: !isMobile
				? { left: '44px', top: '-77px' }
				: { top: '-55px', left: '15px' },
			lineStyle: { left: '55px', height: '53px', top: '-91px' },
			commissionStyle: { left: '-83px', top: '-275px' },
			triangleStyle: { left: '44px', top: '-282px' },
		},
		{
			id: 2,
			referrals: 60,
			commission: '≈ 1,546',
			pointStyle: !isMobile
				? { left: '144px', top: '-104px' }
				: { left: '77px', top: '-70px' },
			lineStyle: { left: '55px', height: '53px', top: '-91px' },
			commissionStyle: { left: '2px', top: '-300px' },
			triangleStyle: { left: '143px', top: '-308px' },
		},
		{
			id: 3,
			referrals: 90,
			commission: '≈ 2,941',
			pointStyle: !isMobile
				? { left: '216px', top: '-129px' }
				: { left: '142px', top: '-91px' },
			lineStyle: {},
			commissionStyle: { left: '76px', top: '-276px' },
			triangleStyle: { left: '215px', top: '-284px' },
		},
		{
			id: 4,
			referrals: 120,
			commission: '≈ 4,750',
			pointStyle: !isMobile
				? { left: '292px', top: '-166px' }
				: { left: '205px', top: '-120px' },
			lineStyle: {},
			commissionStyle: { left: '146px', top: '-310px' },
			triangleStyle: { left: '291px', top: '-317px' },
		},
		{
			id: 5,
			referrals: 150,
			commission: '≈ 6,971',
			pointStyle: !isMobile
				? { left: '378px', top: '-219px' }
				: { top: '-166px', left: '274px' },
			lineStyle: {},
			commissionStyle: { left: '229px', top: '-364px' },
			triangleStyle: { left: '377px', top: '-371px' },
		},
		{
			id: 6,
			referrals: 180,
			commission: '≈ 9,606',
			pointStyle: !isMobile
				? { left: '457px', top: '-288px' }
				: { top: '-224px', left: '335px' },
			lineStyle: {},
			commissionStyle: { left: '308px', top: '-432px' },
			triangleStyle: { left: '455px', top: '-439px' },
		},
	]

	const handlePointHover = (id: number) => {
		setActivePoint(id)
	}

	return (
		<div className='mod4 w-[1200px] my-[80px] mx-auto flex justify-between max-sm:w-full max-sm:flex-col-reverse max-sm:mt-[18.6vw] max-sm:px-[4.2vw] max-sm:mb-0'>
			<div className='des w-[590px] h-[450px] max-sm:w-full max-sm:h-auto max-sm:mt-[10.6vw] max-sm:mb-[13.3vw]'>
				<h2 className='title mt-[94px] text-[40px] font-[700] text-white mb-[60px] max-sm:hidden'>
					Why Choose WEEX?
				</h2>

				<div className='key flex mb-[30px] items-center'>
					<div className='key_icon'>
						<img
							src='https://www.weex.com/_nuxt/img/icon_choose.c194626.svg'
							alt=''
						/>
					</div>
					<div className='key_title ml-[10px] text-[20px] font-[500] text-white max-sm:text-[4.8vw]'>
						Hold multiple international licenses
					</div>
				</div>
				<div className='key flex mb-[30px] items-center'>
					<div className='key_icon'>
						<img
							src='https://www.weex.com/_nuxt/img/icon_choose.c194626.svg'
							alt=''
						/>
					</div>
					<div className='key_title ml-[10px] text-[20px] font-[500] text-white max-sm:text-[4.8vw]'>
						Top 5 by futures trading volume (CMC)
					</div>
				</div>
			</div>
			<div className='data w-[500px] h-[450px] max-sm:w-full max-sm:h-auto'>
				<h2 className='hidden max-sm:block text-[6.4vw] font-[700] text-white mb-[10.6vw] text-center'>
					Why Choose WEEX?
				</h2>

				<div className='mobile hidden max-sm:block absolute text-white'>
					<div className='text-[3.2vw]'>referrals</div>
					<div className='text-[6.4vw]'>
						{graphPoints.find(p => p.id === activePoint)?.referrals}
					</div>
					<div className='mt-[2.4vw] text-[3.2vw]'>Monthly commissions</div>
					<div>
						<span className='num text-[20px] font-[700]'>
							{graphPoints.find(p => p.id === activePoint)?.commission}
						</span>{' '}
						USDT
					</div>
				</div>

				<div className='img_commission ml-[-23px] w-[540px] h-[366px] max-sm:w-full max-sm:mx-auto max-sm:h-[275px]'>
					<img
						src='https://www.weex.com/_nuxt/img/img_commission.97df92b.png'
						className='fa-mirror'
						alt='Commission chart'
					/>
					{graphPoints.map(point => (
						<div key={point.id}>
							{/* Точка на графике */}
							<div
								className={`point point${point.id} block w-[20px] h-[20px] rounded-[20px] bg-[#0f1115] border-[3px] border-[#d8ae15] relative`}
								style={{
									...point.pointStyle,
									display: activePoint === point.id ? 'block' : 'none',
								}}
							></div>

							{/* Линия на графике */}
							<div
								className={`line line${point.id} block relative`}
								style={{
									...point.lineStyle,
									display: activePoint === point.id ? 'block' : 'none',
								}}
							></div>

							{/* Блок с комиссией */}
							{!isMobile && (
								<div
									className={`commission commission${point.id} w-[193px] py-[16px] px-[24px] text-black bg-[#d8ae15] rounded-[10px] relative`}
									style={{
										...point.commissionStyle,
										display: activePoint === point.id ? 'block' : 'none',
									}}
								>
									<div>Monthly commissions</div>
									<div>
										<span className='num text-[20px] font-[700]'>
											{point.commission}
										</span>{' '}
										USDT
									</div>
								</div>
							)}

							{!isMobile && (
								<div
									className={`triangle triangle${point.id} relative w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-[#d8ae15] max-sm:hidden`}
									style={{
										...point.triangleStyle,
										display: activePoint === point.id ? 'block' : 'none',
									}}
								></div>
							)}
						</div>
					))}
				</div>

				{/* Блоки с цифрами */}
				<div className='invite_num w-[500px] flex justify-between mt-[4px] max-sm:w-full'>
					{graphPoints.map(point => (
						<div key={point.id}>
							<div
								className={`num num${
									point.id
								} rounded-[8px] border text-center cursor-pointer overflow-hidden h-[30px] text-ellipsis leading-[30px] hover:w-[110px] hover:bg-[#d8ae15] hover:text-black hover:border-[#d8ae15] hover:px-[16px] group flex gap-[4px] justify-center whitespace-nowrap ${
									activePoint === point.id
										? 'active bg-[#d8ae15] text-black border-[#d8ae15] w-[110px] px-[16px] max-sm:w-[14.3vw]'
										: 'w-[62px] border-white text-white max-sm:w-[11.2vw]'
								}`}
								onMouseEnter={() => handlePointHover(point.id)}
							>
								{point.referrals}
								{activePoint === point.id && !isMobile && (
									<span>referrals</span>
								)}
							</div>
						</div>
					))}
				</div>

				<style>{`
        .point {
          display: none;
        }
        .line {
          display: none;
        }
        .commission {
          display: none;
        }
        .triangle {
          display: none;
        }
        .point${activePoint} {
          display: block !important;
        }
        .line${activePoint} {
          display: block !important;
        }
        .commission${activePoint} {
          display: block !important;
        }
        .triangle${activePoint} {
          display: block !important;
        }
      `}</style>
				<div className='commission_tips mt-[24px] text-[#777989] text-right max-sm:mt-[4.2vw] max-sm:text-center'>
					*Based on affiliates' average earnings
				</div>
			</div>
		</div>
	)
}

export default ChooseWeex
