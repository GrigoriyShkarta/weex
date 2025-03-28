const MobileTrade = () => {
	return (
		<section className='w-[1200px] my-[0] mx-auto max-sm:w-full max-sm:px-[16px] max-sm:w-full'>
			<div className='app_download_imgblock show flex justify-between'>
				<div className='app_download_link flex flex-col'>
					<h2 className='text-[48px] font-bold text-white max-sm:text-center max-sm:text-[24px] max-sm:mb-[32px]'>
						Trade anytime, anywhere
					</h2>

					<div className='hidden max-sm:block'>
						<img
							src='https://www.weex.com/_nuxt/img/app-download-en.125dff8.png'
							alt=''
							loading='lazy'
							className='w-[240px] h-[282px] mx-auto'
						/>
					</div>

					<div className='qrcode flex items-center mb-8 text-[14px] font-[500] mt-[64px] mx-0 max-sm:my-[24px] max-sm:mx-auto'>
						<div className='download-qrcode-show-content bg-white p-4 rounded-lg max-sm:w-[88px] max-sm:h-[88px]'>
							<div
								value='https://support.weex.today/register?languageType=0'
								level='L'
								background='#fff'
								foreground='#000'
							>
								<canvas
									height='294'
									width='294'
									className='w-[140px] h-[140px] '
								></canvas>
							</div>
						</div>
						<div className='w-8'></div> {/* Spacer */}
						<div>
							<div className='sub-tit text-[20px] text-[#d1d1d2]'>
								<p className='sub-tit-top text-white max-sm:text-[14px]'>
									Scan the QR code
								</p>
								<span className='sub-tit-ios-android max-sm:text-[24px]'>
									WEEX for iOS/Android
								</span>
							</div>
						</div>
					</div>

					<div className='app_download_icon flex w-full mt-[32px] flex-wrap gap-[24px] max-sm:gap-[16px]'>
						<div className='w-[120px] h-[110px] cursor-pointer bg-[#282828] rounded-[16px] flex items-center justify-center flex-col gap-[16px] hover:border border-white max-sm:w-[43.6vw] max-sm:h-[48px] max-sm:flex-row'>
							<img
								src='https://www.weex.com/_nuxt/img/app-store.c9b8ca8.svg'
								loading='lazy'
								className='icon w-6 h-6'
							/>
							<span className='text-white'>App Store</span>
						</div>

						<div className='w-[120px] h-[110px] cursor-pointer bg-[#282828] rounded-[16px] flex items-center justify-center flex-col gap-[16px] hover:border border-white max-sm:w-[43.6vw] max-sm:h-[48px] max-sm:flex-row'>
							<img
								src='https://www.weex.com/_nuxt/img/google-play.0dbe146.svg'
								loading='lazy'
								className='icon w-6 h-6'
							/>

							<span className='text-white'>Google Play</span>
						</div>

						<div className='w-[120px] h-[110px] cursor-pointer bg-[#282828] rounded-[16px] flex items-center justify-center flex-col gap-[16px] hover:border border-white max-sm:w-[43.6vw] max-sm:h-[48px] max-sm:flex-row'>
							<img
								src='https://www.weex.com/_nuxt/img/logo-pro.f9f00ee.png'
								loading='lazy'
								className='icon w-6 h-6'
							/>

							<span className='text-white'>WEEX Beta</span>
						</div>

						<div className='w-[120px] h-[110px] cursor-pointer bg-[#282828] rounded-[16px] flex items-center justify-center flex-col gap-[16px] hover:border border-white max-sm:w-[43.6vw] max-sm:h-[48px] max-sm:flex-row'>
							<img
								src='https://www.weex.com/_nuxt/img/android.25aedbf.svg'
								loading='lazy'
								className='icon w-6 h-6'
							/>

							<span className='text-white'>Android APK</span>
						</div>
					</div>
				</div>

				<div className='max-sm:hidden'>
					<img
						src='https://www.weex.com/_nuxt/img/app-download-en.125dff8.png'
						alt=''
						loading='lazy'
						className='w-[425px] h-[500px]'
					/>
				</div>
			</div>

			<div className='home-features flex flex-wrap justify-between w-[1200px] mt-[80px] mx-auto mb-[140px] max-sm:flex-col max-sm:w-full max-sm:mt-[24px] max-sm:mb-[48px] max-sm:border max-sm:border-[#2e2e2e] max-sm:rounded-[24px] max-sm:gap-[16px] max-sm:py-[20px]'>
				<div className='features_container flex-start flex-1'>
					<div className='features_box flex flex-col gap-[16px] justify-center items-center text-center'>
						<span className='text-[32px] font-bold text-white max-sm:text-[24px]'>
							1,000 BTC
						</span>
						<span className='text-gray-400 max-sm:text-[16px]'>
							Protection Fund
						</span>
					</div>
				</div>

				<div className='features_container flex-1 justify-center'>
					<div className='features_box flex flex-col gap-[16px] justify-center items-center text-center'>
						<span className='text-[32px] font-bold text-white max-sm:text-[24px]'>
							28,942,453,169
						</span>
						<span className='text-gray-400 max-sm:text-[16px]'>
							Average daily trading volume (USDT)
						</span>
					</div>
				</div>

				<div className='features_container flex-end flex-1'>
					<div className='features_box flex flex-col gap-[16px] justify-center items-center text-center'>
						<span className='text-[32px] font-bold text-white max-sm:text-[24px]'>
							1,000+
						</span>
						<span className='text-gray-400 max-sm:text-[16px]'>
							Crypto trading pairs
						</span>
					</div>
				</div>

				<div className='features_container flex-end flex-1'>
					<div className='features_box flex flex-col gap-[16px] justify-center items-center text-center'>
						<span className='text-[32px] font-bold text-white max-sm:text-[24px]'>
							5 million
						</span>
						<span className='text-gray-400 max-sm:text-[16px]'>
							Number of users
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MobileTrade
