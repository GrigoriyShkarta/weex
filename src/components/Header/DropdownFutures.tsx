const DropdownFutures = () => {
	return (
		<div className='absolute top-[30px] left-0 mt-2 z-10 w-[280px]'>
			<section className='bg-[#222] rounded-[24px] shadow-lg p-3'>
				{/* Первый элемент с hover эффектом */}
				<div className='group cursor-pointer rounded-[16px] p-3 flex items-center hover:bg-[#333] transition-colors duration-200'>
					<div className='w-6 h-6'>
						<img
							src='https://www.weex.com/_nuxt/img/black-icon1.7af7f5c.svg'
							alt='hot'
							data-v-23812cb2=''
							data-v-2b19e9fd=''
						/>
					</div>{' '}
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
					<div className='w-6 h-6'>
						<img
							src='https://www.weex.com/_nuxt/img/black-icon2.5b0aacc.svg'
							alt='hot'
							data-v-23812cb2=''
							data-v-2b19e9fd=''
						/>
					</div>{' '}
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
					<div className='w-6 h-6'>
						<img
							src='
								data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzU4NDhfMjI2MjIpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA0QzEwLjM0MzEgNCA5IDUuMzQzMTUgOSA3VjEzLjAzMjZIN1Y3QzcgNC4yMzg1OCA5LjIzODU4IDIgMTIgMkgxOEMyMC43NjE0IDIgMjMgNC4yMzg1OCAyMyA3VjE3QzIzIDE5Ljc2MTQgMjAuNzYxNCAyMiAxOCAyMkg1VjIwSDE4QzE5LjY1NjkgMjAgMjEgMTguNjU2OSAyMSAxN1Y3QzIxIDUuMzQzMTUgMTkuNjU2OSA0IDE4IDRIMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMTJDMy40NDc3MiAxMiAzIDEyLjQ0NzcgMyAxM1YxOEMzIDE5LjEwNDYgMy44OTU0MyAyMCA1IDIwQzYuMTA0NTcgMjAgNyAxOS4xMDQ2IDcgMThWMTNDNyAxMi40NDc3IDYuNTUyMjggMTIgNiAxMkg0Wk0xIDEzQzEgMTEuMzQzMSAyLjM0MzE1IDEwIDQgMTBINkM3LjY1Njg1IDEwIDkgMTEuMzQzMSA5IDEzVjE4QzkgMjAuMjA5MSA3LjIwOTE0IDIyIDUgMjJDMi43OTA4NiAyMiAxIDIwLjIwOTEgMSAxOFYxM1oiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE1IiB5PSI4LjUiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIGZpbGw9IiNFNkMzMjUiLz4KPHJlY3QgeD0iMTIiIHk9IjExLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IiNFNkMzMjUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF81ODQ4XzIyNjIyIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo='
							alt='hot'
							data-v-23812cb2=''
							data-v-2b19e9fd=''
						/>
					</div>{' '}
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
