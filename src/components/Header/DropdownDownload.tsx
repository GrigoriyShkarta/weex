const DropdownDownload = () => {
	return (
		<div className='absolute top-[43px] left-[-110px] bg-[#222] py-[16px] px-[13px] min-h-[252px] rounded-[9px]'>
			<div className='text-[#fff] font-[500] text-center'>
				Scan to Download App
			</div>
			<div className='text-[12px] text-[#777989] text-[center] mt-[4px]'>
				iOS & Android
			</div>

			<div className='w-[112px] h-[112px] my-[16px] mx-[auto]'>
				<div className='w-[112px] h-[112px] bg-[#fff] rounded-[10px]'>
					<div
						value='https://support.weex.today/register?languageType=0'
						level='H'
						className='bg-[#fff]'
					>
						<canvas
							height='210'
							width='210'
							className='w-[100px] h-[100px]'
						></canvas>
					</div>
				</div>
			</div>

			<a
				href='/'
				className='block min-w-[84px] py-[8px] px-[12px] bg-[rgba(248,199,27,.1)] text-[#f8c71b] rounded-[8px] text-center cursor-pointer'
			>
				More Options
			</a>
		</div>
	)
}

export default DropdownDownload
