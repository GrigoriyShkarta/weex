interface VideoModalProps {
	videoSrc: string
	posterSrc: string
	onClose: () => void
}

const VideoModal: React.FC<VideoModalProps> = ({
	videoSrc,
	posterSrc,
	onClose,
}) => {
	return (
		<div
			className='video-modal fixed inset-0  bg-opacity-75 flex items-center justify-center z-50'
			role='dialog'
			aria-modal='true'
		>
			<div className='modal-content relative max-w-4xl w-full mx-4'>
				<button
					className='close-btn absolute -top-10 right-0 z-10 p-2 text-white hover:opacity-80 transition-opacity'
					onClick={onClose}
					aria-label='Close video modal'
				>
					<img
						src='https://www.weex.com/_nuxt/img/close_button.17259e6.png'
						alt='Close'
						width={24}
						height={24}
						loading='lazy'
					/>
				</button>

				<div className='aspect-w-16 aspect-h-9 bg-black'>
					<video
						className='w-full h-560px object-contain'
						src={videoSrc}
						controls
						preload='auto'
						playsInline
						poster={posterSrc}
						controlsList='nodownload'
						aria-label='Affiliate program video'
					>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>
	)
}

export default VideoModal
