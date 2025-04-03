import { useEffect, useState } from 'react'
import Card from '../../components/Card'

const All = () => {
	const [activeTab, setActiveTab] = useState('pnl3w')
	const [isMobile, setIsMobile] = useState(false)

	const tabs = [
		{ id: 'pnl3w', label: 'Total PnL (3W)' },
		{ id: 'yield3w', label: 'Yield 3W' },
		{ id: 'winrate3w', label: 'Win rate (3W)' },
		{ id: 'copytrading', label: 'Copy trading PnL' },
		{ id: 'totalreturns', label: 'Total returns' },
		{ id: 'totalyields', label: 'Total yields' },
		{ id: 'totaltrades', label: 'Total trades' },
		{ id: 'followers', label: 'Followers' },
	]

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

	return (
		<div className='flex flex-col justify-between items-center mt-[70px] w-full'>
			<div
				className='flex items-center gap-5 overflow-x-auto w-full pb-3 px-4 md:px-0 scrollbar-hide'
				style={{
					WebkitOverflowScrolling: 'touch', // Для плавного скролла на iOS
					scrollbarWidth: 'none', // Скрываем scrollbar для Firefox
				}}
			>
				{tabs.map(tab => (
					<div
						key={tab.id}
						className='flex-shrink-0' // Важно: предотвращаем сжатие элементов
					>
						<button
							className={`whitespace-nowrap text-[14px] transition-colors px-2 py-1 ${
								activeTab === tab.id
									? 'text-[rgb(248,199,27)] font-medium'
									: 'text-white hover:text-gray-300'
							}`}
							onClick={() => setActiveTab(tab.id)}
						>
							{tab.label}
						</button>
					</div>
				))}
			</div>

			<div className='flex flex-wrap pt-[20px]'>
				{[...Array(20)].map((_, index) => (
					<div key={index} className='relative'>
						<Card
							withoutBg
							className='hover:scale-105 transition-transform duration-300 absolute'
						/>
					</div>
				))}
			</div>

			{/* Pagination */}
			<div className='flex justify-center items-center pt-[64px] pb-[100px]'>
				<nav className='flex items-center space-x-1'>
					<button
						disabled
						className='px-3 py-1 rounded bg-[hsla(0,0%,100%,.08)] text-gray-500 cursor-not-allowed'
					>
						&lt;
					</button>
					{(isMobile ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9]).map(page => (
						<a
							key={page}
							href={`/how-to-buy${page === 1 ? '' : `?page=${page}`}`}
							className={`px-3 py-1 rounded ${
								page === 1
									? 'bg-[#e6c325] text-black'
									: 'bg-[hsla(0,0%,100%,.08)] text-gray-300'
							}`}
						>
							{page}
						</a>
					))}
					<span className='px-3 py-1 text-gray-500'>...</span>
					<a
						href='/how-to-buy?page=669'
						className='px-3 py-1 rounded bg-[hsla(0,0%,100%,.08)] text-gray-300'
					>
						669
					</a>
					<button className='px-3 py-1 rounded bg-[hsla(0,0%,100%,.08)] text-gray-300'>
						&gt;
					</button>
				</nav>
			</div>
		</div>
	)
}

export default All
