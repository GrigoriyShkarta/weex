const Feature = () => {
	return (
		<div className='feature bg-[#151515] max-sm:mt-[8.5vw] max-sm:px-[4.2vw]'>
			<div className='mod1 w-[1200px] rounded-[24px] px-[48px] py-[40px] justify-between items-center mx-auto mb-[56px] flex bg-[#222] max-sm:w-full max-sm:py-[8.5vw] max-sm:px-[4.2vw] max-sm:block'>
				<div className='data data1 flex items-center w-[31.3%] max-sm:w-full max-sm:h-auto max-sm:mb-[4.2vw] max-sm:items-center'>
					<div className='icon w-[80px] h-[80px] max-sm:w-[10.6vw] max-sm:h-[10.6vw]'>
						<img
							src='https://www.weex.com/_nuxt/img/img_data1.21856a4.svg'
							alt='WEEX affiliate'
						/>
					</div>
					<div className='des py-[12px] pl-[16px] max-sm:pl-[4.2vw]'>
						<div className='title text-[30px] font-[700] text-white max-sm:text-[5.3vw]'>
							<span dir='ltr'>20,000+</span>
						</div>
						<div className='sub-tit text-[16px] text-[#8b8b8e] mt-[8px] max-sm:text-[3.7vw] max-sm:mt-[2.1vw]'>
							WEEX affiliate
						</div>
					</div>
				</div>
				<div className='data data2 flex items-center w-[31.3%] max-sm:w-full max-sm:h-auto max-sm:mb-[4.2vw] max-sm:items-center'>
					<div className='icon w-[80px] h-[80px] max-sm:w-[10.6vw] max-sm:h-[10.6vw]'>
						<img
							src='https://www.weex.com/_nuxt/img/img_data2.31de99a.svg'
							alt='Commissions distributed (USDT)'
						/>
					</div>
					<div className='des py-[12px] pl-[16px] max-sm:pl-[4.2vw]'>
						<div className='title text-[30px] font-[700] text-white max-sm:text-[5.3vw]'>
							<span dir='ltr'>$300,000,000+</span>
						</div>
						<div className='sub-tit text-[16px] text-[#8b8b8e] mt-[8px] max-sm:text-[3.7vw] max-sm:mt-[2.1vw]'>
							Commissions distributed (USDT)
						</div>
					</div>
				</div>
				<div className='data data3 flex items-center w-[31.3%] max-sm:w-full max-sm:h-auto max-sm:mb-[4.2vw]'>
					<div className='icon flex-shrink-0 w-[80px] h-[80px] max-sm:w-[10.6vw] max-sm:h-[10.6vw]'>
						<img
							src='https://www.weex.com/_nuxt/img/img_data3.7240e7a.svg'
							alt='KOLs with monthly earnings of more than 50,000 USDT'
							className='w-full h-full object-contain'
						/>
					</div>
					<div className='des flex-1 py-[12px] pl-[16px] max-sm:pl-[4.2vw] overflow-hidden'>
						<div className='title text-[30px] font-[700] text-white max-sm:text-[5.3vw] whitespace-nowrap'>
							<span dir='ltr'>500+</span>
						</div>
						<div className='sub-tit text-[16px] text-[#8b8b8e] mt-[8px] max-sm:text-[3.7vw] max-sm:mt-[2.1vw]'>
							KOLs with monthly earnings of more than 50,000 USDT
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Feature
