const Arrow = () => {
	return (
		<svg
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='arrow-icon group-hover:rotate-180 transition-transform duration-200' // вращение здесь
		>
			<path
				d='M1.5 3.75L6 8.25L10.5 3.75'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='group-hover:stroke-[#d8ae15] transition-colors duration-200' // цвет здесь
			/>
		</svg>
	)
}

export default Arrow
