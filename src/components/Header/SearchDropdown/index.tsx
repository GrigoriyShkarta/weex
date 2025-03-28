import { useState } from 'react'
import Trending from './Trending'
import Newest from './Newest'

enum Tab {
	Trending,
	Newest,
}

const SearchDropdown = () => {
	const [activeTab, setActiveTab] = useState<Tab>(Tab.Trending)

	return (
		<div className='absolute top-[45px] left-[-500px] py-[8px] min-w-[525px] rounded-[16px] bg-[#262626] shadow-[0_2px_14px_0_rgba(0,0,0,0.12)]'>
			<div className='ml-[16px] mr-[16px] mt-[16px] h-[40px] py-[10px] px-[12px] rounded-[24px] flex justify-between items-center bg-[hsla(0,0%,100%,.08)]'>
				<img
					alt=''
					src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjY2NjcgMTMuMzMzM0MxMC43OTYzIDEzLjMzMzMgMTMuMzMzMyAxMC43OTYzIDEzLjMzMzMgNy42NjY2N0MxMy4zMzMzIDQuNTM3MDcgMTAuNzk2MyAyIDcuNjY2NjcgMkM0LjUzNzA3IDIgMiA0LjUzNzA3IDIgNy42NjY2N0MyIDEwLjc5NjMgNC41MzcwNyAxMy4zMzMzIDcuNjY2NjcgMTMuMzMzM1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zMzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNzQwNiAxMS43NDA2TDE0LjU2OTEgMTQuNTY5MSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=='
					data-v-a6766800=''
				/>
				<input
					placeholder='Search'
					autoComplete='off'
					className='w-full ml-[8px] h-[30px] bg-transparent border-none text-[14px] font-sans font-semibold text-[#fff] outline-none'
					data-v-a6766800=''
					data-test-id='undefined-undefined'
				/>
			</div>

			<div>
				<div className='flex items-center gap-[24px] m-[16px] border-b border-[#2e2e2e]'>
					<div
						className={`flex items-center justify-center h-[48px] text-[18px] text-[#8b8b8e] cursor-pointer relative ${
							activeTab === Tab.Trending
								? 'text-[#fff] font-bold'
								: 'text-[#8b8b8e]'
						}`}
						onClick={() => setActiveTab(Tab.Trending)}
					>
						Trending Searches
					</div>

					<div
						className={`flex items-center justify-center h-[48px] text-[18px] text-[#8b8b8e] cursor-pointer relative ${
							activeTab === Tab.Newest
								? 'text-[#fff] font-bold'
								: 'text-[#8b8b8e]'
						}`}
						onClick={() => setActiveTab(Tab.Newest)}
					>
						Newest Listings
					</div>
				</div>

				<div className='pb-[14px]'>
					<div className='max-h-[calcl(100vh - 380px)] px-[8px] overflow-y: auto'>
						{activeTab === Tab.Trending ? <Trending /> : <Newest />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchDropdown
