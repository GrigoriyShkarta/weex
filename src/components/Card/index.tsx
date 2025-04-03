import { motion } from 'framer-motion'

const CarouselItem = ({
	isHovered,
	onHoverStart,
	onHoverEnd,
	index,
	withoutBg,
	fatCard,
}: any) => {
	// Генерация разных данных для каждой карточки
	const roiValues = ['+145.05%', '+98.32%', '+210.75%', '+76.43%', '+185.90%']
	const pnlValues = [
		'$3,710.12',
		'$5,421.35',
		'$2,890.47',
		'$6,745.28',
		'$4,321.09',
	]
	const winRates = ['81.25%', '72.60%', '85.40%', '68.75%', '79.30%']
	const names = [
		'Contracts change lives',
		'Market wizard',
		'Crypto king',
		'Forex master',
		'Day trading pro',
	]
	const levels = [5, 4, 7, 3, 6]
	const followers = ['53/800', '128/500', '75/1000', '42/300', '210/1500']

	const dataIndex = index % 5 // Циклически выбираем данные

	return (
		<motion.div
			className='swiper-slide px-2'
			whileHover={{ scale: 1.05 }}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			animate={{ scale: isHovered ? 1.05 : 1 }}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 15,
				when: 'afterChildren',
			}}
		>
			<div
				className={`mb-[32px] p-[24px] ${
					withoutBg ? 'bg-transparent border border-[#282828]' : 'bg-[#222]'
				} ${
					!fatCard ? 'w-[383px]' : 'w-[312px]'
				} rounded-[16px] cursor-pointer`}
			>
				<div className=' flex items-start '>
					<div className='w-[50px] h-[50px]'>
						<img
							src={`https://images.unsplash.com/photo-15${dataIndex}8745123697-1254295e7b21?w=100&auto=format`}
							alt='Trader avatar'
							className='w-10 h-10 rounded-full object-cover'
						/>
					</div>
					<div className='inline-block w-[10px]'></div>
					<div className='flex-grow-1'>
						<div className='flex items-center mb-[6px] font-bold'>
							<span className='max-w-[112px] w-auto pl-[10px] text-[20px] text-[#fff] overflow-hidden text-ellipsis whitespace-nowrap'>
								{names[dataIndex]}
							</span>
							<div className='ml-[4px] py-[3px] px-[4px] rounded-[4px] bg-[#ffe82d] text-[12px] leading-[12px] text-[#161616] cursor-pointer'>
								Lv {levels[dataIndex]}
							</div>
						</div>
						<span className='pl-[10px] block w-[160px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-[#8b8b8e]'>
							Professional trader with {levels[dataIndex] * 2} years experience
						</span>
					</div>
					<div className='follow-num ml-auto flex items-center text-gray-400 text-sm'>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM5NTkgOS45Nzg5NUw5LjExNTg4IDkuMDkwNzlDOS4xMTU4OCA5LjA5MDc5IDguNjgwNDggOC45MjE5NSA4LjUxMjIgOC43NTY3NUM4LjQwMzg0IDguNjQ5MjMgOC40MTE0IDguMzk4NjMgOC41MDc0NCA4LjA3NjYzQzguNjAzNDggNy43NTQ5MSA5Ljc3MTkyIDYuNDQ3ODcgOS43NzE5MiA1LjI2MDM5QzkuNzcxOTIgMy40MjcyMyA4LjU2NTY4IDEuOTQwNDMgNy4wNzkxNiAxLjk0MDQzQzUuNTkyMzYgMS45NDA0MyA0LjM4NzUyIDMuNDI3MjMgNC4zODc1MiA1LjI2MDM5QzQuMzg3NTIgNi4zOTgwMyA1LjQyOTEyIDcuNzUzNzkgNS41NTczNiA3Ljk5OTM1QzUuNjg1ODggOC4yNDYzMSA1LjY1NDggOC42MjIwNyA1LjU1MzcyIDguNzM1MTlDNS40MDE0IDguOTA2MjcgNC44NDM5MiA5LjA3NzA3IDQuODQzOTIgOS4wNzcwN0wyLjc4ODQ0IDkuOTkyNjdDMi4zMDgyNCAxMC4xNjQ2IDEuOTMxNjQgMTAuNjE3MyAxLjkzMTY0IDExLjEyOTJWMTEuMzcxMkMxLjkzMTY0IDExLjkyODYgMi4zODQ0IDEyLjI3MDIgMi45NDA3NiAx2LjI3MDJIMTEuMjQxNEMxMS43OTc3IDEyLjI3MDIgMTIuMjUxMyAxMS45Mjg2IDEyLjI1MTMgMTEuMzcxMlYxMS4xMjkyQzEyLjI1MjcgMTAuNjE3MSAxMS44NzYxIDEwLjE1MDYgMTEuMzk1OSA5Ljk3ODk1WiIgZmlsbD0iI0QxRDFEMiIvPgo8L3N2Zz4K'
							height='14'
							width='14'
							className='mr-1'
						/>
						<span>{followers[dataIndex]}</span>
					</div>
				</div>

				<div className='mt-[32px]'>
					<div dir='ltr' className='text-green-500 text-[24px] font-bold'>
						{roiValues[dataIndex]}
					</div>
					<div className='mt-[4px] flex justify-between text-[12px]'>
						<span className='text-[#fff]'>ROI</span>
						<span className='text-[#8b8b8e]'>30 D</span>
					</div>
					<div className='chart h-[54px] w-full mt-[12px]'>
						<div className='bg-gradient-to-r from-green-100 to-green-50 rounded h-full'></div>
					</div>
				</div>

				<div className='pt-[16px] px-[0] pb-[4px] border-b border-[#282828]'>
					<div className='flex justify-between text-[14px] mb-[8px]'>
						<span className='text-gray-500'>Total PnL (3W)</span>
						<span dir='ltr' className='text-[#fff]'>
							{pnlValues[dataIndex]}
						</span>
					</div>
					<div className='flex justify-between text-[14px] mb-[8px]'>
						<span className='text-gray-500'>Win rate (3W)</span>
						<span dir='ltr' className='text-[#fff]'>
							{winRates[dataIndex]}
						</span>
					</div>
				</div>

				<div className='trader-coin-box flex items-center mt-4'>
					<div className='coin-list flex'>
						<img
							src='https://cryptologos.cc/logos/bitcoin-btc-logo.png'
							height='20'
							width='20'
							className='mr-1'
						/>
						<img
							src='https://cryptologos.cc/logos/ethereum-eth-logo.png'
							height='20'
							width='20'
						/>
					</div>
					<div className='coin-val ml-auto flex items-center text-sm'>
						<img
							data-v-2c6507f1=''
							data-savepage-currentsrc='https://www.weex.com/_nuxt/img/coin_val_ico.8c5c772.svg'
							data-savepage-src='/_nuxt/img/coin_val_ico.8c5c772.svg'
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDMuMTk5MjJWNi4zOTkwNlY2Ljc5OTAzQzExLjgxOCA2Ljc5OTAzIDEwLjc1NTcgNy4zMTE3MyAxMC4wMjM0IDguMTI2ODlDOS4zODcxMiA4LjgzNTE3IDkgOS43NzE4IDkgMTAuNzk4OEM5IDExLjAzMDQgOS4wMTk2OCAxMS4yNTczIDkuMDU3NDQgMTEuNDc4MUM5LjI2MzE2IDEyLjY4MDYgMTAuMDA1NyAxMy42OTk4IDExLjAyOTYgMTQuMjgwNUM5Ljk2NDY0IDE0LjYwMjUgOC41NTEwNCAxNC43OTg2IDcgMTQuNzk4NkMzLjY4NjI4IDE0Ljc5ODYgMSAxMy45MDMyIDEgMTIuNzk4N1Y5LjU5ODg5VjYuMzk5MDZWMy4xOTkyMiIgc3Ryb2tlPSIjRDFEMUQyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyAzLjE5OTEyQzEzIDQuMzAzNjIgMTAuMzEzNyA1LjE5OTAxIDcgNS4xOTkwMUMzLjY4NjI4IDUuMTk5MDEgMSA0LjMwMzYyIDEgMy4xOTkxMkMxIDIuMDk0NjEgMy42ODYyOCAxLjE5OTIyIDcgMS4xOTkyMkMxMC4zMTM3IDEuMTk5MjIgMTMgMi4wOTQ2MSAxMyAzLjE5OTEyWiIgc3Ryb2tlPSIjRDFEMUQyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xIDkuNTk3NjZDMSAxMC43MDIyIDMuNjg2MjggMTEuNTk3NiA3IDExLjU5NzZDNy43MjI4IDExLjU5NzYgOC40MTU3MiAxMS41NTUgOS4wNTc0NCAxMS40NzY5IiBzdHJva2U9IiNEMUQxRDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEgNi4zOTg0NEMxIDcuNTAyOTQgMy42ODYyOCA4LjM5ODM0IDcgOC4zOTgzNEM4LjEwMjUyIDguMzk4MzQgOS4xMzU2IDguMjk5MjIgMTAuMDIzNCA4LjEyNjI3IiBzdHJva2U9IiNEMUQxRDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDEwLjc5ODZDMTcgMTMuMDA3NiAxNS4yMDkxIDE0Ljc5ODQgMTMgMTQuNzk4NEMxMi4yODM2IDE0Ljc5ODQgMTEuNjExMiAxNC42MTAxIDExLjAyOTYgMTQuMjgwM0MxMC4wMDU3IDEzLjY5OTYgOS4yNjMxNiAxMi42ODA0IDkuMDU3NDQgMTEuNDc3OUM5LjAxOTY4IDExLjI1NzEgOSAxMS4wMzAyIDkgMTAuNzk4NkM5IDkuNzcxNiA5LjM4NzEyIDguODM0OTYgMTAuMDIzNCA4LjEyNjY4QzEwLjc1NTcgNy4zMTE1MiAxMS44MTggNi43OTg4MyAxMyA2Ljc5ODgzQzE1LjIwOTEgNi43OTg4MyAxNyA4LjU4OTYyIDE3IDEwLjc5ODZaIiBzdHJva2U9IiNEMUQxRDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=='
							height='14'
							width='16'
						></img>
						<span className='text-white pl-[4px]'>{20 + dataIndex * 5}%</span>
					</div>
				</div>

				<motion.button
					className='trader-btn-edit w-full h-[44px] mt-[24px] py-[0] px-[4px] rounded-[12px]'
					animate={{
						backgroundColor: isHovered ? '#ffe82d' : 'rgba(119,121,137,.08)',
						color: isHovered ? '#161616' : '#fff',
					}}
					transition={{ duration: 0.2 }}
				>
					Copy
				</motion.button>
			</div>
		</motion.div>
	)
}

export default CarouselItem
