import { useRef, useState } from 'react'

const ChooseWEEX = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const handlePlayClick = () => {
		if (videoRef.current) {
			videoRef.current.play()
			setIsPlaying(true)
		}
	}

	return (
		<section className='bg-black text-white'>
			<div className='w-[1200px] my-0 mx-auto pt-[120px] pb-[56px] max-sm:pt-[64px] max-sm:pb-0 max-sm:w-full max-sm:px-[16px]'>
				<h2 className='text-[48px] font-bold mb-[24px] max-sm:text-[32px] max-sm:text-center'>
					Why choose WEEX?
				</h2>
				<p className='text-gray-400 text-lg max-sm:text-[20px]'>
					Save time and effort by copying top traders
				</p>

				<div className='flex justify-between max-sm:flex-col max-sm:items-start max-sm:mt-[16px] max-sm:gap-[16px]'>
					{/* Protection Fund */}
					<div className='flex items-center p-6 cursor-pointer max-sm:p-0 '>
						<img
							data-v-dfed8a28=''
							alt=''
							data-savepage-currentsrc='https://www.weex.com/_nuxt/img/coin.be69967.svg'
							data-savepage-src='/_nuxt/img/coin.be69967.svg'
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMC41IiByPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI1LjU0OTEgMTcuMzE5NUMyNS42NzUgMTguNzY5NiAyNS4xMjczIDE5LjYzMTkgMjQuMjEzNCAyMC4xMTk5QzI1LjY5NiAyMC41MjUgMjYuNjAzNSAyMS40ODEyIDI2LjQzMTggMjMuNjA2NEMyNi4yMjM5IDI2LjI2ODYgMjQuNDIxOCAyNi45NjIyIDIxLjg0MDQgMjcuMTExN0wyMS44NjE4IDI5Ljg2MDdMMjAuMzQxMSAyOS44NjUxTDIwLjMxODQgMjcuMTE2NEMxOS45MDIxIDI3LjEwOTQgMTkuNDg1NCAyNy4xMzM1IDE5LjA2ODcgMjcuMTE5NkwxOS4wOTE0IDI5Ljg2ODJMMTcuNTczNiAyOS44NzMyTDE3LjU1MDcgMjcuMTIzM0wxNC41MDgyIDI3LjA2MTlMMTQuNzQ5NyAyNS4wNTI3QzE0Ljc0OTcgMjUuMDUyNyAxNS44OTk4IDI1LjA3OTEgMTUuODc5NCAyNS4wNjQ1QzE2LjMwMTUgMjUuMDYxNiAxNi40MjQ1IDI0LjcyOTIgMTYuNDU0NSAyNC41MTMzTDE2LjQxNjQgMjAuMTA3OEwxNi40MDggMTYuOTcxM0MxNi4zNTg1IDE2LjY0NDcgMTYuMTUzMiAxNi4yNTIgMTUuNTMxNCAxNi4yNDA4QzE1LjU2NDkgMTYuMjA4NCAxNC40MTk0IDE2LjI0NDMgMTQuNDE5NCAxNi4yNDQzTDE0LjQwMTQgMTQuNDAyMkwxNy41MTk0IDE0LjM5MzhMMTcuNDk3MSAxMS43MDE0TDE5LjA2NzggMTEuNjk3TDE5LjA5MDEgMTQuMzg5NEMxOS40OTE5IDE0LjM3NzYgMTkuODg3MiAxNC4zODQzIDIwLjI5NCAxNC4zODY2TDIwLjI3MDQgMTEuNjk0NUwyMS43OTkzIDExLjY4OTVMMjEuODIxMyAxNC40NTI0QzIzLjgwNTEgMTQuNjY2OSAyNS4zNjMzIDE1LjMzMTQgMjUuNTQ5MSAxNy4zMTk1Wk0xOS4wMTQ3IDE5LjUyNkMxOS45Mzk3IDE5LjU3IDIyLjY4MTkgMTkuNjk3OCAyMi42NzM0IDE3Ljg2NkMyMi42NTc0IDE2LjEyNDggMjAuMzI0NSAxNi4xODQ2IDE5LjI0MDggMTYuMjExOEMxOS4xMTI2IDE2LjIxNjIgMTkuMDAyIDE2LjIxODkgMTguOTE1MyAxNi4yMTdMMTguOTM3NCAxOS41MjMxTDE5LjAxNDcgMTkuNTI2Wk0xOC45NzA5IDI0LjkxMzZMMTkuMTA0OCAyNC45MjA1QzIwLjI0MzkgMjQuOTY5MyAyMy40NzM3IDI1LjExMTIgMjMuNDQ3NyAyMy4yOThDMjMuNDQ4IDIxLjU0NDIgMjAuNTg3OCAyMS41ODcyIDE5LjMwNTggMjEuNjA1NkMxOS4xNjYgMjEuNjA4NyAxOS4wNDQgMjEuNjEwMSAxOC45NDc4IDIxLjYwOTJMMTguOTcwOSAyNC45MTM2WiIgZmlsbD0iI0QxRDFEMiIvPgo8L3N2Zz4K'
							className='w-[56px] h-[56px] mr-4 max-sm:w-[32px] max-sm:h-[32px]'
						/>
						<div className='text-[24px] font-bold max-sm:text-[16px]'>
							<span className='text-[#d8ae15] '>1,000 BTC</span>
							<br />
							Protection Fund
						</div>
					</div>

					{/* Top-Level Liquidity */}
					<div className='flex items-center p-6 cursor-pointer max-sm:p-0'>
						<img
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMS41IiByPSIxMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjMuNSIgY3k9IjMuNSIgcj0iMy41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxNi41IDEyKSIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4LjUiIGN5PSIyNi41IiByPSIzLjUiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMzEuNSIgY3k9IjI2LjUiIHI9IjMuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
							alt='Liquidity icon'
							className='w-[56px] h-[56px] mr-4 max-sm:w-[32px] max-sm:h-[32px]'
						/>
						<div className='text-[24px] font-bold max-sm:text-[16px]'>
							Top-Level
							<br />
							Liquidity
						</div>
					</div>

					{/* Global Brand Ambassador */}
					<div className='flex items-center p-6 cursor-pointer max-sm:p-0'>
						<img
							data-v-dfed8a28=''
							alt=''
							data-savepage-currentsrc='https://www.weex.com/_nuxt/img/global.8bc5e96.svg'
							data-savepage-src='/_nuxt/img/global.8bc5e96.svg'
							src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9InBhdGgtMS1pbnNpZGUtMV8yOTEwXzUwOTIiIGZpbGw9IndoaXRlIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOC4wNjU5IDEzLjQ4MDZDMjguMDY1OSAxNy44ODE2IDI0LjUzNjIgMjEuNDYxMyAyMC4xOTg5IDIxLjQ2MTNDMTUuODYxNyAyMS40NjEzIDEyLjMzMzEgMTcuODgwMyAxMi4zMzMxIDEzLjQ4MDZDMTIuMzMzMSA5LjA4MDM1IDE1Ljg2MTcgNS41IDIwLjE5ODkgNS41QzI0LjUzNjggNS41IDI4LjA2NTkgOS4wNzk3MyAyOC4wNjU5IDEzLjQ4MDZaTTE4Ljc0NDUgMjIuMjI5M0gyMi4yNDNDMjcuNzIwMyAyMi4yMjkzIDMzLjM3NDMgMjUuNTEwNCAzMy4zNzQzIDMxLjA2MjdWMzIuNTkzMVYzMi44OTY4QzMzLjM3NDMgMzUuOCAyOC43NzExIDM1LjggMjMuNDQxMiAzNS44SDE3LjU0NjlDMTEuOTk4MyAzNS44IDcuNjE0MzMgMzUuOCA3LjYxNDMzIDMyLjg5NzRWMzEuMDYzM0M3LjYxNDMzIDI1LjUwOTEgMTMuMjY4NCAyMi4yMjkzIDE4Ljc0NDUgMjIuMjI5M1oiLz4KPC9tYXNrPgo8cGF0aCBkPSJNMjAuMTk4OSAyMy4yMjk1QzI1LjUzNjQgMjMuMjI5NSAyOS44MzQxIDE4LjgzNDMgMjkuODM0MSAxMy40ODA2SDI2LjI5NzdDMjYuMjk3NyAxNi45Mjg5IDIzLjUzNiAxOS42OTMxIDIwLjE5ODkgMTkuNjkzMVYyMy4yMjk1Wk0xMC41NjQ5IDEzLjQ4MDZDMTAuNTY0OSAxOC44MzI1IDE0Ljg2MDkgMjMuMjI5NSAyMC4xOTg5IDIzLjIyOTVWMTkuNjkzMUMxNi44NjI0IDE5LjY5MzEgMTQuMTAxMyAxNi45MjgyIDE0LjEwMTMgMTMuNDgwNkgxMC41NjQ5Wk0yMC4xOTg5IDMuNzMxODFDMTQuODYxIDMuNzMxODEgMTAuNTY0OSA4LjEyODEgMTAuNTY0OSAxMy40ODA2SDE0LjEwMTNDMTQuMTAxMyAxMC4wMzI2IDE2Ljg2MjMgNy4yNjgxOSAyMC4xOTg5IDcuMjY4MTlWMy43MzE4MVpNMjkuODM0MSAxMy40ODA2QzI5LjgzNDEgOC4xMjcxMyAyNS41MzcxIDMuNzMxODEgMjAuMTk4OSAzLjczMTgxVjcuMjY4MTlDMjMuNTM2NSA3LjI2ODE5IDI2LjI5NzcgMTAuMDMyMyAyNi4yOTc3IDEzLjQ4MDZIMjkuODM0MVpNMjIuMjQzIDIwLjQ2MTFIMTguNzQ0NVYyMy45OTc1SDIyLjI0M1YyMC40NjExWk0zNS4xNDI1IDMxLjA2MjdDMzUuMTQyNSAyNy42MTIgMzMuMzYyNCAyNC45MDkxIDMwLjg5NzUgMjMuMTMwMUMyOC40NjI3IDIxLjM3MjkgMjUuMzA3IDIwLjQ2MTEgMjIuMjQzIDIwLjQ2MTFWMjMuOTk3NUMyNC42NTYzIDIzLjk5NzUgMjcuMDY2MyAyNC43MjYzIDI4LjgyNzkgMjUuOTk3NkMzMC41NTkzIDI3LjI0NzIgMzEuNjA2MSAyOC45NjEgMzEuNjA2MSAzMS4wNjI3SDM1LjE0MjVaTTM1LjE0MjUgMzIuNTkzMVYzMS4wNjI3SDMxLjYwNjFWMzIuNTkzMUgzNS4xNDI1Wk0zNS4xNDI1IDMyLjg5NjhWMzIuNTkzMUgzMS42MDYxVjMyLjg5NjhIMzUuMTQyNVpNMjMuNDQxMiAzNy41NjgyQzI2LjAzNjYgMzcuNTY4MiAyOC43MjQ1IDM3LjU3NjEgMzAuNzUyOCAzNy4xNzFDMzEuNzcwMyAzNi45Njc4IDMyLjgzMzYgMzYuNjI0MyAzMy42NzA1IDM1Ljk2MDZDMzQuNTk2MiAzNS4yMjY1IDM1LjE0MjUgMzQuMTc3NiAzNS4xNDI1IDMyLjg5NjhIMzEuNjA2MUMzMS42MDYxIDMzLjA2NzYgMzEuNTc3MSAzMy4xMDczIDMxLjQ3MzEgMzMuMTg5N0MzMS4yODAzIDMzLjM0MjYgMzAuODU5NyAzMy41NDM0IDMwLjA2MDIgMzMuNzAzMUMyOC40NTQzIDM0LjAyMzkgMjYuMTc1NyAzNC4wMzE4IDIzLjQ0MTIgMzQuMDMxOFYzNy41NjgyWk0xNy41NDY5IDM3LjU2ODJIMjMuNDQxMlYzNC4wMzE4SDE3LjU0NjlWMzcuNTY4MlpNNS44NDYxNSAzMi44OTc0QzUuODQ2MTUgMzQuMTQ3IDYuMzUzMjMgMzUuMTk1MSA3LjI2NDc0IDM1Ljk0MjZDOC4wODg3MyAzNi42MTg0IDkuMTQwMTggMzYuOTY1NiAxMC4xNDg2IDM3LjE3MDFDMTIuMTUzMiAzNy41NzY1IDE0Ljg0NjcgMzcuNTY4MiAxNy41NDY5IDM3LjU2ODJWMzQuMDMxOEMxNC42OTg2IDM0LjAzMTggMTIuNDI1OCAzNC4wMjM1IDEwLjg1MTIgMzMuNzA0MkMxMC4wNzAxIDMzLjU0NTggOS42Nzg3MiAzMy4zNDg4IDkuNTA3MzIgMzMuMjA4M0M5LjQyMzQzIDMzLjEzOTUgOS4zODI1MiAzMy4wOTkgOS4zODI1MiAzMi44OTc0SDUuODQ2MTVaTTUuODQ2MTUgMzEuMDYzM1YzMi44OTc0SDkuMzgyNTJWMzEuMDYzM0g1Ljg0NjE1Wk0xOC43NDQ1IDIwLjQ2MTFDMTUuNjgxMSAyMC40NjExIDEyLjUyNTcgMjEuMzcyNSAxMC4wOTExIDIzLjEyOTdDNy42MjYxIDI0LjkwODggNS44NDYxNSAyNy42MTE5IDUuODQ2MTUgMzEuMDYzM0g5LjM4MjUyQzkuMzgyNTIgMjguOTYwNSAxMC40Mjk2IDI3LjI0NjYgMTIuMTYwNyAyNS45OTcyQzEzLjkyMiAyNC43MjYgMTYuMzMxNyAyMy45OTc1IDE4Ljc0NDUgMjMuOTk3NVYyMC40NjExWiIgZmlsbD0id2hpdGUiIG1hc2s9InVybCgjcGF0aC0xLWluc2lkZS0xXzI5MTBfNTA5MikiLz4KPHBhdGggZD0iTTE5LjQ4MDYgMjMuNTI5N0wxNy43MzA4IDI5LjMzMDRDMTcuNjUzIDI5LjU5MDYgMTcuNzI0OCAyOS44NzE5IDE3LjkyMDUgMzAuMDY0NEwxOS42Njc5IDMxLjc4MzdDMTkuOTYxNyAzMi4wNzIxIDIwLjQzOCAzMi4wNzIxIDIwLjczMTkgMzEuNzgzN0wyMi40NzkyIDMwLjA2NDRDMjIuNjc0OSAyOS44NzI1IDIyLjc0NzMgMjkuNTkwNiAyMi42Njg5IDI5LjMzMDRMMjAuOTIxNiAyMy41Mjk3QzIwLjcwOTEgMjIuODIzNCAxOS42OTI0IDIyLjgyMzQgMTkuNDc5NCAyMy41Mjk3SDE5LjQ4MDZaTTIwLjIwMDUgMjYuMzQyN0wyMS4xMDA1IDI5LjMyODZMMjAuMjAwNSAzMC4yMTUxTDE5LjI5OTkgMjkuMzI4NkwyMC4yMDIzIDI2LjM0MjdIMjAuMjAwNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='
							className='w-[56px] h-[56px] mr-4 max-sm:w-[32px] max-sm:h-[32px]'
						/>
						<div className='text-[24px] font-bold whitespace-nowrap max-sm:text-[16px]'>
							Michael Owen, Global Brand Ambassador
						</div>
					</div>
				</div>

				{/* Video Section */}
				<div className='relative mt-[32px]'>
					<video
						ref={videoRef}
						controls={isPlaying}
						preload='auto'
						playsInline
						poster='/assets/images/new_index/cover.jpg'
						controlsList='nodownload'
						className='w-full rounded-lg'
						onClick={() => setIsPlaying(true)}
					>
						<source
							src='https://media.weex.com/spokesperson/owen/official-video.webm'
							type='video/webm'
						/>
						<source
							src='https://media.weex.com/spokesperson/owen/official-video.mp4'
							type='video/mp4'
						/>
					</video>

					{!isPlaying && (
						<button
							onClick={handlePlayClick}
							className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] focus:outline-none max-sm:hidden'
							aria-label='Play video'
						>
							<img
								src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2lfMjU3OF84NDIyKSI+CjxjaXJjbGUgY3g9IjYyIiBjeT0iNjIiIHI9IjYwIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjc1Ii8+CjwvZz4KPGNpcmNsZSBjeD0iNjIiIGN5PSI2MiIgcj0iNjAuNjI1IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8yNTc4Xzg0MjIpIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04My44NzAxIDY1LjI0MjhDODYuMzcxOSA2My43OTk4IDg2LjM3MTkgNjAuMTg5MSA4My44NzAxIDU4Ljc0Nkw1MS4zNzM3IDQwLjAwMjJDNDguODczNyAzOC41NjAyIDQ1Ljc1IDQwLjM2NDUgNDUuNzUgNDMuMjUwNkw0NS43NSA4MC43MzgzQzQ1Ljc1IDgzLjYyNDMgNDguODczNiA4NS40Mjg2IDUxLjM3MzcgODMuOTg2Nkw4My44NzAxIDY1LjI0MjhaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9pXzI1NzhfODQyMiIgeD0iMC43NSIgeT0iMC43NSIgd2lkdGg9IjEyMi41IiBoZWlnaHQ9IjEyMi41IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iMS44MjU1NyIgb3BlcmF0b3I9ImRpbGF0ZSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3dfMjU3OF84NDIyIi8+CjxmZU9mZnNldCBkeD0iLTAuOTEyNzg0IiBkeT0iMC45MTI3ODQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC40NTYzOTIiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4zNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzI1NzhfODQyMiIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI1NzhfODQyMiIgeDE9IjEwNy45NjgiIHkxPSIxMC4yMjU4IiB4Mj0iNjIiIHkyPSIxMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
								alt='Play button'
								className='w-full h-full'
							/>
						</button>
					)}
				</div>
			</div>
		</section>
	)
}

export default ChooseWEEX
