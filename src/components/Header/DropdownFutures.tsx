const DropdownFutures = () => {
	return (
		<div className='absolute top-[30px] left-0 mt-2 z-10 w-[280px]'>
			<section className='bg-[#222] rounded-[24px] shadow-lg p-3'>
				{/* Первый элемент с hover эффектом */}
				<div className='group cursor-pointer rounded-[16px] p-3 flex items-center hover:bg-[#333] transition-colors duration-200'>
					<div className='w-6 h-6 bg-gray-500 rounded'></div>{' '}
					{/* Замените на вашу иконку */}
					<div className='ml-3 w-[196px]'>
						<div className='flex items-center'>
							<span className='text-sm font-bold text-white'>
								USDT-M futures
							</span>
							<div className='w-1'></div>
							<img
								src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjM2NTA4IDE0Ljg5ODZDMTIuMjM1OSAxNC40NDk3IDE0IDEyLjUyMTUgMTQgOS4zMzMzNEMxNCA3LjgzMzM0IDEyLjgzMzMgNi41ODMzNCAxMS42NjY3IDUuMzMzMzRDMTAuNSA0LjA4MzM0IDkuMzMzMzMgMi44MzMzNCA5LjMzMzMzIDEuMzMzMzRDNi4zMzMzMyAxLjY2NjY4IDIuMzMzMzMgNS42NjY2OCAyLjMzMzMzIDkuNjY2NjhDMi4zMzMzMyAxMi4zNzE2IDQuMDMzOTkgMTQuNjIzIDcuMTczOTUgMTQuOTU3MkM2Ljc3NjQ0IDE0LjM3MzEgNi40OTk5OCAxMy41ODY1IDYuNDk5OTggMTIuNUM2LjQ5OTk4IDEwLjc1IDcuMzc0OTggOS41ODMzMyA4LjI0OTk4IDlDOC4yOTM5IDkuMDQzOTIgOC4zNDExMiA5LjA5MDEgOC4zOTA5IDkuMTM4NzlDOS4wMDIzNyA5LjczNjgyIDkuOTk5OTggMTAuNzEyNSA5Ljk5OTk4IDEyLjVDOS45OTk5OCAxMy41NTA2IDkuNzQxNTIgMTQuMzIwNyA5LjM2NTA4IDE0Ljg5ODZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzg0M18zMTMxMCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8zODQzXzMxMzEwIiB4MT0iOC4xNjY3IiB5MT0iMC4wOTQyMTIyIiB4Mj0iNC43NjQ1NiIgeTI9IjE1LjE3NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRDhBRTE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VDNDU0NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo='
								alt='hot'
								data-v-23812cb2=''
								data-v-2b19e9fd=''
							/>
						</div>
						<div className='mt-1.5 text-xs text-[#8b8b8e]'>
							Perpetual futures settled in USDT
						</div>
					</div>
				</div>

				{/* Второй элемент с hover эффектом */}
				<div className='mt-3 group cursor-pointer rounded-[16px] p-3 flex items-center hover:bg-[#333] transition-colors duration-200'>
					<div className='w-6 h-6 bg-gray-500 rounded'></div>{' '}
					{/* Замените на вашу иконку */}
					<div className='ml-3 w-[196px]'>
						<span className='text-sm font-bold text-white'>Demo trading</span>
						<div className='mt-1.5 text-xs text-[#8b8b8e]'>
							USDT-M futures demo
						</div>
					</div>
				</div>

				{/* Третий элемент с hover эффектом */}
				<div className='mt-3 group cursor-pointer rounded-[16px] p-3 flex items-center hover:bg-[#333] transition-colors duration-200'>
					<div className='w-6 h-6 bg-gray-500 rounded'></div>{' '}
					{/* Замените на вашу иконку */}
					<div className='ml-3 w-[196px]'>
						<span className='text-sm font-bold text-white'>About futures</span>
						<div className='mt-1.5 text-xs text-[#8b8b8e]'>
							About futures trading features
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DropdownFutures
