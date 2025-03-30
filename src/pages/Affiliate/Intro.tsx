import { useState } from 'react'
import VideoModal from '../../components/VideoModal/inde'

const Intro = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<div className='bg-[#151515]'>
			<div className='introduce_cont relative flex items-center w-[1200px] min-h-[336px] py-[56px] mx-auto max-sm:w-full max-sm:flex-wrap-reverse max-sm:p-0 max-sm:min-h-auto max-sm:h-auto'>
				<div className='introduce_left w-[570px] max-sm:w-full max-sm:p-[4.2vw]'>
					<h2 className='our_task text-[40px] font-[700] text-white max-sm:mt-[4.2vw] max-sm:text-[6.4vw] max-sm:text-center'>
						Boost Your Income! WEEX Offers the Highest Commissions
					</h2>
					<div className='task_detail mt-[16px] font-[700] text-[20px] text-[#8b8b8e] max-sm:mt-[2.1vw] max-sm:text-[3.7vw] max-sm:text-center'>
						Leverage Your Impact—Become Part of a Close-knit WEEX Community
					</div>
					<button className='btn mt-[48px] w-[200px] h-[56px] bg-[#e6c325] rounded-[16px] text-[18px] font-[500] text-black text-center cursor-pointer max-sm:mt-[4.2vw] max-sm:w-[91.4vw] max-sm:h-[11.7vw] max-sm:rounded=[3.2vw] max-sm:text-[4.2vw]'>
						Apply Now
					</button>
				</div>
				<div
					className="introduce_right right-0 absolute top-1/2 -translate-y-1/2 w-[600px] h-[336px] flex justify-center items-center bg-[url('https://www.weex.com/_nuxt/img/video_mask.1b17029.png')] bg-cover bg-center bg-no-repeat cursor-pointer max-sm:relative max-sm:mt-0 max-sm:w-full max-sm:h-[56vw] max-sm:top-[28vw]"
					onClick={() => setShowModal(true)}
				>
					<img
						src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC45IiBkPSJNMzkuOTk5OSAzLjMzMzMxQzE5Ljc0OTQgMy4zMzMzMSAzLjMzMzI1IDE5Ljc0OTUgMy4zMzMyNSA0MEMzLjMzMzI1IDYwLjI1MDUgMTkuNzQ5NCA3Ni42NjY2IDM5Ljk5OTkgNzYuNjY2NkM2MC4yNTA0IDc2LjY2NjYgNzYuNjY2NiA2MC4yNTA1IDc2LjY2NjYgNDBDNzYuNjY2NiAxOS43NDk1IDYwLjI1MDQgMy4zMzMzMSAzOS45OTk5IDMuMzMzMzFaIiBmaWxsPSIjMTUxNTE1Ii8+CjxwYXRoIGQ9Ik01NS4zNTUyIDQyLjQzNDNMMzQuNTIxOSA1Ni4xODQzQzM0LjA4MjIgNTYuNDc0MSAzMy41NzI0IDU2LjYzOTUgMzMuMDQ2MyA1Ni42NjI5QzMyLjUyMDMgNTYuNjg2MyAzMS45OTc3IDU2LjU2NjkgMzEuNTM0MSA1Ni4zMTczQzMxLjA3MDQgNTYuMDY3NyAzMC42ODMgNTUuNjk3MiAzMC40MTI5IDU1LjI0NTJDMzAuMTQyOCA1NC43OTMyIDMwLjAwMDIgNTQuMjc2NSAzMCA1My43NVYyNi4yNTI2QzMwIDI1LjcyNTkgMzAuMTQyNyAyNS4yMDkgMzAuNDEyOCAyNC43NTY4QzMwLjY4MyAyNC4zMDQ2IDMxLjA3MDUgMjMuOTM0MSAzMS41MzQzIDIzLjY4NDRDMzEuOTk4MSAyMy40MzQ4IDMyLjUyMDkgMjMuMzE1NCAzMy4wNDcxIDIzLjMzOUMzMy41NzMzIDIzLjM2MjUgMzQuMDgzMyAyMy41MjgxIDM0LjUyMjkgMjMuODE4Mkw1NS4zNTYyIDM3LjU2ODJDNTUuNzU4OSAzNy44MzM5IDU2LjA4OTQgMzguMTk1NCA1Ni4zMTgxIDM4LjYyMDNDNTYuNTQ2OCAzOS4wNDUyIDU2LjY2NjQgMzkuNTIwMSA1Ni42NjY0IDQwLjAwMjZDNTYuNjY2NCA0MC40ODUxIDU2LjU0NjggNDAuOTYgNTYuMzE4MSA0MS4zODQ5QzU2LjA4OTQgNDEuODA5NyA1NS43NTg5IDQyLjE3MTIgNTUuMzU2MiA0Mi40MzdMNTUuMzU1MiA0Mi40MzQzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='
						className='video_play_button'
						alt='Play video'
					/>
				</div>
			</div>

			{showModal && (
				<VideoModal
					onClose={() => setShowModal(false)}
					videoSrc='https://wxfzx4.info/affiliate.mp4'
					posterSrc='https://www.weex.com/_nuxt/img/video_mask.1b17029.png'
				/>
			)}
		</div>
	)
}

export default Intro
