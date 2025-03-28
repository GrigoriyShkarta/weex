import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import CarouselItem from '../../../components/Card'

const InfiniteCarousel = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const carouselRef = useRef<HTMLDivElement>(null)

	// Количество карточек (можно увеличить)
	const cardCount = 15
	const cards = Array.from({ length: cardCount }, (_, i) => i)

	useEffect(() => {
		const carousel = carouselRef.current
		if (!carousel) return

		let animationId: number
		const speed = 1
		let position = 0
		let lastTime = 0

		const animate = (time: any) => {
			if (!lastTime) lastTime = time
			const delta = time - lastTime
			lastTime = time

			if (hoveredIndex === null) {
				position -= speed * (delta / 16) // Нормализуем скорость относительно времени
				if (position < -carousel.scrollWidth / 3) {
					position = 0
				}
				carousel.style.transform = `translateX(${position}px)`
			}
			animationId = requestAnimationFrame(animate)
		}

		animationId = requestAnimationFrame(animate)

		return () => {
			cancelAnimationFrame(animationId)
		}
	}, [hoveredIndex])

	return (
		<div className='relative w-full mt-[51px] pb-[64px] max-sm:hidden'>
			<motion.div
				ref={carouselRef}
				className='flex'
				style={{ width: 'max-content' }}
			>
				{cards.map((_, index) => (
					<CarouselItem
						key={index}
						index={index}
						isHovered={hoveredIndex === index}
						onHoverStart={() => setHoveredIndex(index)}
						onHoverEnd={() => setHoveredIndex(null)}
					/>
				))}
			</motion.div>
		</div>
	)
}

export default InfiniteCarousel
