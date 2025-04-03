import React, { useState } from 'react'

const DownloadSection: React.FC = () => {
	const [showTooltip, setShowTooltip] = useState<string | null>(null)

	const downloadOptions = [
		{
			id: 'app-store',
			icon: 'https://www.weex.com/_nuxt/img/app-store.c9b8ca8.svg',
			text: 'APP Store',
			qrValue: 'https://apps.apple.com/us/app/id1609350789',
			tooltipText: 'Scan to Download App',
		},
		{
			id: 'weex-beta',
			icon: 'https://www.weex.com/_nuxt/img/logo-pro.f9f00ee.png',
			text: 'WEEX Beta',
			qrValue: 'https://fnqrt.cn/#/join/1kErxE',
			tooltipText: 'Scan to Download App',
		},
		{
			id: 'google-play',
			icon: 'https://www.weex.com/_nuxt/img/google-play.0dbe146.svg',
			text: 'Google Play',
			qrValue:
				'https://play.google.com/store/apps/details?id=com.wake.weexprd&hl=zh-TW&pli=1',
			tooltipText: 'Scan to Download App',
		},
		{
			id: 'android-apk',
			icon: '	https://www.weex.com/_nuxt/img/android.25aedbf.svg',
			text: 'Android APK',
			qrValue: 'https://apk.hehui43.com/weex.apk',
			tooltipText: 'Scan to Download App',
		},
	]

	const toggleTooltip = (id: string) => {
		setShowTooltip(showTooltip === id ? null : id)
	}

	return (
		<div className='download-wrap bg-[#151515] text-white'>
			<div className='app_download_imgblock w-[1200px] mx-auto flex justify-between items-center pt-[88px] pb-[210px] max-sm:w-full max-sm:flex-col max-sm:px-[4.2vw] max-sm:pt-[24px] max-sm:pb-[110px]'>
				{/* Left Content */}
				<div className='app_download_link w-[574px] h-auto max-sm:w-full'>
					<div className='title text-[40px] font-[700] max-sm:text-center max-sm:text-[32px]'>
						<strong className='text-3xl md:text-4xl font-bold leading-tight'>
							Everything a trader needs,
							<br /> all in WEEX
						</strong>
					</div>

					{/* QR Code */}
					<div className='qrcode mt-[48px] flex items-center text-[14px] font-[500] gap-[24px] max-sm:hidden'>
						<div className='download-qrcode-show-content w-[140px] h-[135px] bg-white rounded-[8px] flex justify-center items-center pt-[5px]'>
							{/* Replace with your actual QR code component */}
							<div className='w-[120px] h-[120px] bg-gray-200 flex items-center justify-center'>
								<span className='text-gray-500'>QR Code</span>
							</div>
						</div>
						<div className='sub-tit'>
							<p className='sub-tit-top text-[20px] mb-[8px] text-[#d1d1d2]'>
								Scan the QR code
							</p>
							<span className='sub-tit-ios-android text-[24px] font-medium'>
								WEEX for iOS/Android
							</span>
						</div>
					</div>

					<hr className='first-line w-full border-[#212121] my-[24px]' />

					{/* Download Options */}
					<div className='down_app flex flex-wrap gap-[24px] max-sm:hidden'>
						{downloadOptions.map(option => (
							<div key={option.id} className='download-item flex gap-[40px]'>
								<div
									className='ios_app flex justify-between items-center text-white rounded-[16px] border border-[#2e2e2e] gap-[12px] w-[267px] p-[15px] cursor-pointer hover:border-white'
									onClick={() => toggleTooltip(option.id)}
								>
									<div className='left-part flex items-center gap-[12px]'>
										<img
											src={option.icon}
											height='24'
											width='24'
											alt={`WEEX ${option.text}`}
										/>
										<p className='app-txt font-medium text-[14px]'>
											{option.text}
										</p>
									</div>
									<div className='app_tooltip'>
										<img
											src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgb3BhY2l0eT0iMC4wMSIgeD0iMC4zMzMzMzMiIHk9IjAuMzMzMzMzIiB3aWR0aD0iMjMuMzMzMyIgaGVpZ2h0PSIyMy4zMzMzIiBmaWxsPSIjRDFEMUQyIiBzdHJva2U9IiMyODI4MjgiIHN0cm9rZS13aWR0aD0iMC42NjY2NjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4xOTM1IDE1LjE5NTVIMTcuNzQ5OFYxMi42MzkySDIwLjMwNjJWMTYuNDczSDE3Ljc0OThWMTcuNzUxMUgxNS4xOTM1VjE2LjQ3M0gxMi42Mzc5VjEyLjYzOTJIMTUuMTkzNVYxNS4xOTU1Wk0zLjY5MjM4IDEyLjYzOTJIMTEuMzYxNFYyMC4zMDc1SDMuNjkyMzhWMTIuNjM5MlpNNi4yNDkyNiAxNS4xOTU3VjE3Ljc1MTNIOC44MDU1OFYxNS4xOTU3SDYuMjQ5MjZaTTMuNjkyNDcgMy42OTIyNkgxMS4zNjE0VjExLjM2MTJIMy42OTI0N1YzLjY5MjI2Wk02LjI0OTI2IDYuMjQ4NzRWOC44MDUwNkg4LjgwNTU4VjYuMjQ4NzRINi4yNDkyNlpNMTIuNjM3OSAzLjY5MjI2SDIwLjMwNjJWMTEuMzYxMkgxMi42Mzc5VjMuNjkyMjZaTTE1LjE5NDggNi4yNDg3NFY4LjgwNTA2SDE3Ljc1MTFWNi4yNDg3NEgxNS4xOTQ4Wk0xNy43NTE3IDE3Ljc1MTJIMjAuMzA4VjIwLjMwNzVIMTcuNzUxN1YxNy43NTEyWk0xMi42Mzc5IDE3Ljc1MTJIMTUuMTkzNVYyMC4zMDc1SDEyLjYzNzlWMTcuNzUxMloiIGZpbGw9IiNEMUQxRDIiLz4KPC9zdmc+Cg=='
											height='24'
											width='24'
											className='app_erweima'
										/>
									</div>
								</div>

								{/* Tooltip */}
								{showTooltip === option.id && (
									<div className='app_tooltiptext absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-4 bg-gray-800 rounded-lg shadow-lg'>
										<div className='tooltip-qrcode-show-content bg-white p-2 rounded'>
											{/* Replace with your actual QR code component */}
											<div className='w-[120px] h-[120px] bg-gray-200 flex items-center justify-center'>
												<span className='text-gray-500'>QR Code</span>
											</div>
										</div>
										<p className='text-center mt-2'>{option.tooltipText}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Right Image - Desktop */}
				<div className='app_downlaod_img md:block max-sm:mt-[40px] max-sm:w-full max-sm:w-full'>
					<img
						src='https://www.weex.com/_nuxt/img/download_black_latest_pro_en.390e76d.png'
						alt='WEEX App'
						loading='lazy'
						className='max-w-md max-sm:w-full'
					/>
				</div>
			</div>

			{/* Mobile Bottom Buttons */}
			<div className='hidden fixed max-sm:flex justify-center w-full bg-[#151515] max-sm:gap-[16px] bottom-0 top-auto px-[12px] pb-[12px]'>
				<div className='mobile-bottom-btn flex justify-center items-center text-black gap-[16px] h-[48px] bg-white rounded-[12px] text-[14px] font-medium flex-1'>
					<img
						src='https://www.weex.com/_nuxt/img/icon_GooglePlay.943d033.svg'
						height='24'
						width='24'
						alt='Google Play'
					/>
					<p>Google Play</p>
				</div>
				<div className='mobile-bottom-btn flex justify-center items-center text-black gap-[16px] h-[48px] bg-white rounded-[12px] text-[14px] font-medium flex-1'>
					<img
						src='data:image/webp;base64,UklGRs4CAABXRUJQVlA4TMECAAAvP8APEIfkIJIkScne4wf/0lCAh59pG24jSZKU7F3pDlT8NwCn8OJn2nEjSYoU1bsHZuz//HeM+cp1JNmqwrvytHB3SIOgCJUiAr7c4QlPjgVqLed+P9nn79hoMv/PX3Uiy0JGjld3AA00BIgAtybBZHSbvJM8f/XVH9k6IjBM1MUADWXQEEYECCKVyhGTWAAKYUisxVEXDQFoRAmB+otEgJmR6MAqvymjYYBC9bZBE8Ze5buJZOSfP8T5u3baBR693Hy8IGAIBAgCgVGCIGAIFfyIQoEKgFRJUbBZFAX1ocyQxgQloqiH37SskgSMmCadxTrqAFshAjTQSBAqVASLW40TFJHROFPUwaxu+G+rKtJL8m3ibQlMdru/82H3/6ntuTvOb7q/2/Z7UN2uV3M+HuSxGUi7bdvYmxPbtm2njLNj26wV1rH9n5/z5r531/0U0f8JkD/UG3dcUUWO35lFH1LJYb3RzbN2rovvpyav8oU8+FtgUPLbnZGt7dG5TH8peSP0ix9x37GBNrbz5zBdvuBK2oL5fCBTVQfQv3avja/AWABPeQfw2UsKOlx9aZNF4H0ri383gAmR2z5XsyJZAD5ckSzAWVM4B9edWblDAPCAIx8WOxsppm1gnsGz10p3C0EC7FYQnFfabSb48Sum7aaLyHVe2aWbAh2PYHdHRF4Cg2FuCF/qxadEilIAmDW7HQWATj8Cj3UHfI1ioR4QREBNMfLWHhP4a6n/HYVqTwhCtGOjtg6lkuBuTykykhlHXxSBTDk2Y8xiJoGuHGHw7gdwIm70iM9uEgo5O6l7KhYZbP/6jiztEvh12XlNIMU9NjaCGCT64erqsLK36nynza2uZIYJ7QtlU5z7WoNQ//1ZVbaUMs2Hq1ZZU/I1L64GJU1p3XZMCHkGgJ1ARco7gb44Nmksy78Rl97VB2fy1xIA'
						height='24'
						width='24'
						alt='Android APK'
					/>
					<p>Android APK</p>
				</div>
			</div>
		</div>
	)
}

export default DownloadSection
