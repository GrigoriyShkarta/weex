// useMobileDetection.ts
import { useState, useEffect } from 'react'

const useMobileDetection = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= breakpoint)
		}

		// Проверяем сразу при загрузке
		checkIfMobile()

		// Добавляем слушатель изменения размера
		window.addEventListener('resize', checkIfMobile)

		// Убираем слушатель при размонтировании
		return () => window.removeEventListener('resize', checkIfMobile)
	}, [breakpoint]) // Добавляем breakpoint в зависимости, если он может меняться

	return isMobile
}

export default useMobileDetection
