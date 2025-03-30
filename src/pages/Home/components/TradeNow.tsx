import { useEffect, useRef } from 'react'

// Типы для частиц снега
type SnowParticle = {
	x: number
	y: number
	z: number
	size: number
	speed: number
	opacity: number
}

// Типы для абстрактных линий
type AbstractLine = {
	y: number
	width: number
	speed: number
	opacity: number
	direction: number
}

const TradeNow = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		let animationFrameId: number
		let particles: SnowParticle[] = []
		const particleCount: number = 200
		let lines: AbstractLine[] = []
		const lineCount: number = 8
		let frameCount: number = 0

		// Set canvas size
		const resizeCanvas = (): void => {
			if (!canvas) return
			canvas.width = canvas.offsetWidth
			canvas.height = canvas.offsetHeight
			initParticles()
			initLines()
		}

		// Initialize snow particles
		const initParticles = (): void => {
			if (!canvas) return
			particles = []
			for (let i = 0; i < particleCount; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					z: Math.random() * 0.5 + 0.5,
					size: Math.random() * 5 + 2,
					speed: Math.random() * 3 + 1,
					opacity: Math.random() * 0.7 + 0.3,
				})
			}
		}

		// Initialize abstract lines
		const initLines = (): void => {
			if (!canvas) return
			lines = []
			for (let i = 0; i < lineCount; i++) {
				lines.push({
					y: i % 2 === 0 ? 0 : canvas.height,
					width: Math.random() * 100 + 50,
					speed: Math.random() * 2 + 1,
					opacity: Math.random() * 0.3 + 0.1,
					direction: i % 2 === 0 ? 1 : -1,
				})
			}
		}

		// 3D snowfall animation (coming at viewer)
		const draw = (): void => {
			if (!canvas || !ctx) return

			frameCount++

			// Clear with semi-transparent for motion trail
			ctx.fillStyle = 'rgba(5, 5, 15, 0.2)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			// Draw abstract lines
			ctx.strokeStyle = 'rgba(100, 150, 255, 0.3)'
			ctx.lineWidth = 1

			lines.forEach((line: AbstractLine) => {
				const progress: number = (frameCount * line.speed) % canvas.width
				ctx.beginPath()
				ctx.moveTo(0, line.y)
				ctx.bezierCurveTo(
					canvas.width * 0.3,
					line.y + line.direction * 20,
					canvas.width * 0.6,
					line.y + line.direction * 20,
					canvas.width,
					line.y
				)
				ctx.stroke()

				ctx.beginPath()
				ctx.moveTo(-progress, line.y)
				ctx.bezierCurveTo(
					canvas.width * 0.3 - progress,
					line.y + line.direction * 20,
					canvas.width * 0.6 - progress,
					line.y + line.direction * 20,
					canvas.width - progress,
					line.y
				)
				ctx.stroke()
			})

			// Draw particles coming at viewer
			particles.forEach((p: SnowParticle) => {
				// Calculate size based on z-depth
				const renderSize: number = p.size * (1 / p.z)
				const x: number =
					canvas.width / 2 + (p.x - canvas.width / 2) * (1 / p.z)
				const y: number =
					canvas.height / 2 + (p.y - canvas.height / 2) * (1 / p.z)

				// Only draw if visible
				if (
					renderSize > 0.5 &&
					x > -renderSize &&
					x < canvas.width + renderSize &&
					y > -renderSize &&
					y < canvas.height + renderSize
				) {
					ctx.fillStyle = `rgba(220, 240, 255, ${p.opacity})`
					ctx.beginPath()
					ctx.arc(x, y, renderSize, 0, Math.PI * 2)
					ctx.fill()
				}

				// Move particle closer (z decreases)
				p.z -= p.speed * 0.005

				// Reset particles that passed the viewer
				if (p.z <= 0.1) {
					p.x = Math.random() * canvas.width
					p.y = Math.random() * canvas.height
					p.z = Math.random() * 0.5 + 0.5
				}
			})

			animationFrameId = requestAnimationFrame(draw)
		}

		resizeCanvas()
		window.addEventListener('resize', resizeCanvas)
		draw()

		return () => {
			cancelAnimationFrame(animationFrameId)
			window.removeEventListener('resize', resizeCanvas)
		}
	}, [])

	return (
		<section className='relative bg-gray-950 py-16 px-4 max-sm:hidden overflow-hidden'>
			{/* 3D Snowfall Background Canvas */}
			<canvas
				ref={canvasRef}
				className='absolute inset-0 w-full h-full pointer-events-none'
			/>

			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/80 to-gray-950' />

			{/* Content */}
			<div className='relative max-w-6xl mx-auto z-10'>
				<div className='text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
						Trade Now
					</h2>
					<p className='text-gray-300 mb-8 text-lg'>
						Sign up in 10 seconds to explore endless trading possibilities
					</p>
					<a
						href='register.html'
						className='inline-flex items-center justify-between text-[20px] bg-white hover:bg-[#e6e6e6] text-gray-900 font-medium py-3 px-6 rounded-[24px] transition-colors duration-200 h-[64px] min-w-[172px]'
					>
						<span>Sign Up</span>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='ml-2'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11.8936 1.83334L22.453 12.3928L20.1903 14.6555L20.1902 14.6555L11.8933 22.9524L9.63053 20.6897L16.624 13.6962H3.23079L3.23079 10.4962L16.0309 10.4962L9.63081 4.09609L11.8936 1.83334Z'
								fill='#0F1115'
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	)
}

export default TradeNow
