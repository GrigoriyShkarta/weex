const Ongoing = () => {
	const projects = [
		{
			id: 1,
			name: 'AB (AB)',
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/launchpad/3ddd960291b156edf37e524ce8bb06b4.jpg',
			status: 'ongoing',
			isHot: true,
			prizePool: '10,000 USDT',
			timeLeft: { days: '01', hours: '00', minutes: '00', seconds: '35' },
		},
		{
			id: 2,
			name: "Simon's Cat (CAT)",
			image:
				'https://d2tfhb4luz96yb.cloudfront.net/otc/images/launchpad/9ea30d4cff74bc65ec6a3cbb13c58855.jpg',
			status: 'ongoing',
			isHot: true,
			prizePool: '1,200,000,000 CAT',
			timeLeft: { days: '01', hours: '22', minutes: '00', seconds: '35' },
		},
	]

	return (
		<>
			<div className='mb-[60px] max-sm:mb-[9.6vw]'>
				<div className='flex flex-wrap gap-2'>
					<span className='bg-[#1F1F1F] text-white px-4 py-2 rounded-lg text-sm flex items-center'>
						Available(0)
						<span className='ml-2 text-[#6B6B6B]'>×</span>
					</span>
					<span className='bg-[#1F1F1F] text-white px-4 py-2 rounded-lg text-sm flex items-center'>
						Committed (0)
						<span className='ml-2 text-[#6B6B6B]'>×</span>
					</span>
					<span className='bg-[#1F1F1F] text-white px-4 py-2 rounded-lg text-sm flex items-center'>
						Ineligible (2)
						<span className='ml-2 text-[#6B6B6B]'>×</span>
					</span>
				</div>
			</div>

			{/* Project List */}
			<div className='flex flex-wrap justify-between gap-[36px] min-h-[380px]'>
				{projects.map(project => (
					<div
						key={project.id}
						className='flex bg-[#222] flex-col justify-between p-[24px] rounded-[24px] w-[calc(33.33% - 72px)] max-sm:w-full'
					>
						<div className='flex flex-col justify-between h-full'>
							<div className='flex-1'>
								<div className='flex items-start gap-[15px]'>
									<img
										src={project.image}
										alt={project.name}
										className='w-[56px] h-[56px] rounded-full'
									/>
									<div className='flex-1'>
										<h3 className='text-[20px] font-[700] text-white'>
											{project.name}
										</h3>
										<div className='flex mt-[4px]'>
											<span className='bg-[rgba(161,241,109,.08)] text-[#28c452] text-xs px-3 py-1 rounded-full mr-3'>
												Ongoing
											</span>
											{project.isHot && (
												<span className='bg-[#2E2E2E] text-[#EC4551] text-xs px-3 py-1 rounded-full flex items-center'>
													<img
														src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjcwMDkgMEM1LjUwOTEzIDAuOTU4NjU4IDcuMDYxOCAyLjcyODQzIDcuMjMzNjIgNC43NTIzOEM3Ljc1ODM2IDQuMzYzNzQgOC4yMTgxOSAzLjgxODI3IDguMjE4MTkgMy4xODg1M0M5Ljc3NjA1IDQuNTg2MjkgOS44MzAwNSA2LjMyODIzIDkuODQxNSA2LjgzMzM0TDkuODQyODcgNi45MjM4OEM5Ljg0Mjg3IDcuMjA4NjIgOS44MjEzMiA3LjQ5NzcyIDkuNzc2MDUgNy43ODg3MkM5LjQ4MDEzIDkuNjE2ODUgOC4yMjgyOCAxMS4xMTIzIDYuNTY2MjUgMTEuNzE0NEw2LjU0NjA2IDExLjcyMTVDNi4yNzkzMyAxMS44MDk5IDUuOTg5NjkgMTEuODgxNiA1LjY3NDY4IDExLjkzMTNDNS40MDgzNSAxMS45NzM4IDUuMTM5MjYgMTEuOTk2OCA0Ljg2OTU3IDEyQzIuNjg3MTYgMTEuOTcxNCAwLjQzNzM3OSAxMC41NDE0IDAuMDkwMTg5NCA4LjQ0NDY1Qy0wLjE5MDcyNiA2LjUzOTMzIDAuMDkwMTg5NiA0LjM2Mzc0IDIuMzAwNjkgMi4yNDY1MUwyLjM1MTk3IDIuNTcyNDJDMi40NDYwNiAzLjE1OTM0IDIuNTU5NzkgMy43Njk0NSAyLjczMDI1IDQuMTI0ODJMMi44OTcxNiAzLjgxNjYzTDIuOTc5MjYgMy42NjExN0wzLjA2MjE3IDMuNTAwMjZDMy41Mzk0NSAyLjU1NjYgMy45MDYgMS41MTk0IDMuNjcwMDkgMFoiIGZpbGw9IiNFQzQ1NTEiLz4KPC9zdmc+Cg=='
														alt='Hot'
														className='w-3 h-3 mr-1'
													/>
													Hot
												</span>
											)}
										</div>
									</div>
								</div>

								<div className='mt-[32px] relative'>
									<p className='text-[#8b8b8e] text-[14px] cursor-pointer border-b border-dashed border-[#8b8b8e] w-fit'>
										Total prize pool
									</p>
									<p className='text-[20px] font-[500] mt-[10px] flex items-center flex-wrap text-white'>
										{project.prizePool}
									</p>
								</div>

								<div className='mt-[32px] mb-[12px]'>
									<p className='text-[#8b8b8e] text-[14px]'>
										Commitment stage ends in
									</p>
									<div className='flex gap-[12px] mt-[12px]'>
										<div className='flex items-center gap-[12px]'>
											<div className='text-white text-center bg-[hsla(0,0%,100%,.08)] p-[8px] font-[700] text-[20px] rounded-[8px]'>
												{project.timeLeft.days}
											</div>
											<div className='text-xs text-[#6B6B6B]'>D</div>
										</div>
										<div className='flex items-center gap-[12px]'>
											<div className='text-white text-center bg-[hsla(0,0%,100%,.08)] p-[8px] font-[700] text-[20px] rounded-[8px]'>
												{project.timeLeft.hours}
											</div>
											<div className='text-xs text-[#6B6B6B]'>H</div>
										</div>
										<div className='flex items-center gap-[12px]'>
											<div className='text-white text-center bg-[hsla(0,0%,100%,.08)] p-[8px] font-[700] text-[20px] rounded-[8px]'>
												{project.timeLeft.minutes}
											</div>
											<div className='text-xs text-[#6B6B6B]'>M</div>
										</div>
										<div className='flex items-center gap-[12px]'>
											<div className='text-white text-center bg-[hsla(0,0%,100%,.08)] p-[8px] font-[700] text-[20px] rounded-[8px]'>
												{project.timeLeft.seconds}
											</div>
											<div className='text-xs text-[#6B6B6B]'>S</div>
										</div>
									</div>
								</div>
							</div>

							<div className=''>
								<button className='w-full h-full items-center overflow-hidden text-ellipsis whitespace-nowrap bg-[hsla(0,0%,100%,.08)] rounded-[16px] text-[16px] text-white text-center cursor-pointer border-none font-[500] py-[12px] px-[20px]'>
									Commit WXT
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Ongoing
