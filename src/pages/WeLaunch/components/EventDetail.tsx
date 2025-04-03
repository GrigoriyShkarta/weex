import { useState } from 'react'
import Ongoing from './EventsComponents/Ongoing'
import Upcoming from './EventsComponents/Upcoming'
import Setting from './EventsComponents/Setting'
import Previous from './EventsComponents/Previous'

const EventDetail = () => {
	const [activeTab, setActiveTab] = useState('ongoing')

	return (
		<div className='flex justify-center bg-[#151515] '>
			<div className='w-[1200px] pt-[80px] pb-[44px] max-sm:pt-[10.6vw] max-sm:px-[4.2vw] max-sm:pb-[5.8vw] max-sm:w-full'>
				<h2 className='text-[40px] font-[700] text-white max-sm:text-[6.4vw]'>
					Event details
				</h2>

				<div className='py-[34px] px-[40px] rounded-[24px] mt-[60px] bg-[#222] flex justify-between items-center mb-[40px] gap-[40px] max-sm:py-[6.4vw] max-sm:px-[4.2vw] max-sm:rounded-[6.4vw] max-sm:mt-[6.4vw] max-sm:flex-col max-sm:mb-0 max-sm:items-start max-sm:gap-[6.4vw]'>
					<div className='flex flex-1 items-center gap-[40px] max-sm:flex-col max-sm:items-start max-sm:gap-[4.2vw]'>
						<h3 className='text-white text-[20px] font-[700]'>
							Available projects:
						</h3>
						<p className='text-[#8b8b8e]'>
							There are no available projects right now.
						</p>
					</div>
					<button
						disabled
						className='cursor-not-allowed bg-[hsla(0,0%,100%,.08)] text-[hsla(0,0%,100%,.12)] border-none w-[188px] h-[48px] flex items-center justify-center rounded-[16px] text-[14px] text-center font-[500] max-sm:w-full max-sm:text-[3.7vw]'
					>
						Quick Commit
					</button>
				</div>

				{/* Tabs */}
				<div className='flex border-b border-[#1F1F1F] mb-8 justify-between items-center'>
					<div className='flex items-center font-medium overflow-x-auto scrollbar-hide whitespace-nowrap py-2 max-sm:h-[12.8vw]'>
						<button
							className={`pb-4 cursor-pointer px-6 mr-2 ${
								activeTab === 'ongoing'
									? 'text-white border-b-2 border-white'
									: 'text-[#6B6B6B]'
							} max-sm:mr-[6.4vw] max-sm:p-0 max-sm:text-nowrap`}
							onClick={() => setActiveTab('ongoing')}
						>
							<h3 className='font-medium'>Ongoing (2)</h3>
						</button>
						<button
							className={`pb-4 cursor-pointer px-6 mr-2 ${
								activeTab === 'upcoming'
									? 'text-white border-b-2 border-white'
									: 'text-[#6B6B6B]'
							} max-sm:mr-[6.4vw] max-sm:p-0 max-sm:text-nowrap`}
							onClick={() => setActiveTab('upcoming')}
						>
							<h3 className='font-medium'>Upcoming (0)</h3>
						</button>
						<button
							className={`pb-4 cursor-pointer px-6 mr-2 ${
								activeTab === 'settling'
									? 'text-white border-b-2 border-white'
									: 'text-[#6B6B6B]'
							} max-sm:mr-[6.4vw] max-sm:p-0 max-sm:text-nowrap`}
							onClick={() => setActiveTab('settling')}
						>
							<h3 className='font-medium'>Settling (0)</h3>
						</button>
						<button
							className={`pb-4 cursor-pointer px-6 ${
								activeTab === 'previous'
									? 'text-white border-b-2 border-white'
									: 'text-[#6B6B6B]'
							} max-sm:mr-[6.4vw] max-sm:p-0 max-sm:text-nowrap`}
							onClick={() => setActiveTab('previous')}
						>
							<h3 className='font-medium'>Previous projects (96)</h3>
						</button>
					</div>

					<div className='flex items-center text-[20px] text-[#8b8b8e] cursor-not-allowed h-[48px] max-sm:hidden'>
						<img
							src='https://www.weex.com/_nuxt/img/history.0b77265.svg'
							alt='c'
							className='w-[24px] h-[24px]'
						/>
						<span>Reward history</span>
					</div>
				</div>

				{activeTab === 'ongoing' && <Ongoing />}
				{activeTab === 'upcoming' && <Upcoming />}
				{activeTab === 'settling' && <Setting />}
				{activeTab === 'previous' && <Previous />}
			</div>
		</div>
	)
}

export default EventDetail
