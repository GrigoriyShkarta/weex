import { useState } from 'react'
import Top from './Top'
import All from './All'

const TradersComponents = () => {
	const [activeTab, setActiveTab] = useState('top')

	return (
		<div className='w-[1200px] mx-auto max-sm:w-full max-sm:px-[4.2vw]'>
			<div className=' mt-[78px] text-[24px] font-medium flex justify-between items-center text-[#8b8b8e] max-sm:flex-col max-sm:mt-[40px]'>
				<div className='flex gap-[40px]'>
					<div
						className='flex gap-[8px] items-center cursor-pointer'
						onClick={() => setActiveTab('top')}
					>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjUyMjIgMTIuOTk5NEMyMy41MjIyIDE5LjM2MTcgMTguMzY0NiAyNC41MTkzIDEyLjAwMjMgMjQuNTE5M0M1LjY0MDA2IDI0LjUxOTMgMC40ODI0MjIgMTkuMzYxNyAwLjQ4MjQyMiAxMi45OTk0QzAuNDgyNDIyIDExLjc0OTQgMC44NDI0MTkgOS40MTE2OCAxLjUyMjQxIDguMjExN0MxLjA4MjQyIDEwLjc3MTcgMi45NTM3NCAxMy44MDc2IDQuOTYyMzggMTIuNTcxN0M1Ljg1NzM0IDEyLjAyMSA1Ljg3NzkgMTAuOTAwMyA0Ljk2MjM4IDEwLjAxMTdDMy42MDIzOSA4LjY5MTcgMi42ODI0MSA1LjYzMjAzIDQuOTYyMzggMy4wMTE3NUM0Ljk2MjM4IDUuMjkxNzMgNy4xMDAxOSA3Ljc3MTgzIDguODQyMzUgNi44MTE4NkMxMS42MDUxIDUuMjg5NTIgOS4yODIzNSAxLjc3MTkgNy40NDIzNiAwLjY5MTkxNUMxMC4zMjIzIDAuMzMxOTgyIDE0LjUzMTggMS44OTc1MiAxNS4yODIzIDUuNTcxODRDMTUuNjEwNiA3LjE3OTI3IDE2LjU0NyA4LjEwNDk2IDE4LjAwMjMgNy43NzE4MkMxOS40NTc1IDcuNDM4NjcgMTkuMjgyMyA0Ljc1MTczIDE4LjY0MjMgMy4zNTE3NUMyMS4yMDIyIDUuMDcxNzMgMjMuNTIyMiA4LjYxMTcgMjMuNTIyMiAxMi45OTk0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzgxNjRfODA5OCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl84MTY0XzgwOTgiIHgxPSIxMi4wMDIzIiB5MT0iMC44MTE5MTIiIHgyPSIxMi4wMDIzIiB5Mj0iMjQuNTE5NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZBMjVGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGMjQxNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo='
							alt='fire'
						/>
						<p
							className={`${
								activeTab === 'top' ? 'text-white' : 'text-[#8b8b8e]'
							} cursor-pointer max-sm:text-[18px]`}
						>
							Top Elite Traders
						</p>
					</div>
					<p
						className={`${
							activeTab === 'all' ? 'text-white' : 'text-[#8b8b8e]'
						} cursor-pointer max-sm:text-[18px]`}
						onClick={() => setActiveTab('all')}
					>
						All Elite Traders
					</p>
				</div>

				<div className='flex items-center w-[240px] h-[40px] px-[12px] rounded-[20px] bg-[hsla(0,0%,100%,.08)] text-[14px] relative max-sm:w-full max-sm:mt-[6.4vw] max-sm:h-[10.6vw] max-sm:rounded-[5.3vw]'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<svg
							className='h-5 w-5 text-gray-400'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<input
						type='text'
						placeholder='Search'
						className='bg-none pl-[8px] h-[40px] text-white w-full outline-none ml-[20px]'
					/>
				</div>
			</div>

			{activeTab === 'top' && <Top />}
			{activeTab === 'all' && <All />}
		</div>
	)
}

export default TradersComponents
