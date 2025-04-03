import React, { useState } from 'react'

interface CountryCode {
	code: string
	name: string
	flag?: string
}

interface Props {
	setActivePage: React.Dispatch<React.SetStateAction<string>>
}

const RegisterPage: React.FC<Props> = ({ setActivePage }) => {
	const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email')
	const [email, setEmail] = useState('')
	const [referralCode, setReferralCode] = useState('')
	const [showReferralCode, setShowReferralCode] = useState(false)
	const [agreedToTerms, setAgreedToTerms] = useState(false)
	const [showEmailSuggestions, setShowEmailSuggestions] = useState(false)
	const [showCountryList, setShowCountryList] = useState(false)
	const [selectedCountry, setSelectedCountry] = useState<CountryCode>({
		code: '+380',
		name: 'Ukraine',
	})
	const [phoneNumber, setPhoneNumber] = useState('')

	// Sample country codes - you would expand this with all needed countries
	const countryCodes: CountryCode[] = [
		{ code: '+1', name: 'United States' },
		{ code: '+44', name: 'United Kingdom' },
		{ code: '+380', name: 'Ukraine' },
		{ code: '+86', name: 'China' },
		{ code: '+91', name: 'India' },
	]

	const toggleCountryList = () => {
		setShowCountryList(!showCountryList)
	}

	const selectCountry = (country: CountryCode) => {
		setSelectedCountry(country)
		setShowCountryList(false)
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(e.target.value)
	}

	const emailDomains = [
		'@gmail.com',
		'@qq.com',
		'@hotmail.com',
		'@outlook.com',
		'@icloud.com',
	]

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault()
		// Registration logic here
		console.log('Registering with:', { email, referralCode, agreedToTerms })
	}

	const handleGoogleRegister = () => {
		// Google registration logic
		console.log('Google registration')
	}

	const selectEmailDomain = (domain: string) => {
		const baseEmail = email.split('@')[0]
		setEmail(baseEmail + domain)
		setShowEmailSuggestions(false)
	}

	return (
		<div className='register-step__1 max-w-md mx-auto w-full'>
			{/* Title */}
			<h1 className='register-step-title text-[40px] font-[700] text-white'>
				Welcome to <span className='text-yellow-400'>WEEX</span>
			</h1>

			{/* Tab Selection */}
			<div className='type-tab flex justify-start items-center mt-[32px] mb-[16px] relative gap-[16px]'>
				<span
					className={`tab cursor-pointer ${
						activeTab === 'email' ? 'text-white' : 'text-[#8b8b8e]'
					}`}
					onClick={() => setActiveTab('email')}
				>
					Email
				</span>
				<span
					className={`tab cursor-pointer ${
						activeTab === 'phone' ? 'text-white' : 'text-[#8b8b8e]'
					}`}
					onClick={() => setActiveTab('phone')}
				>
					Phone
				</span>

				{/* Promo Banner */}
			</div>

			{/* Registration Form */}
			<form onSubmit={handleRegister}>
				{/* Email Input */}
				{activeTab === 'email' && (
					<div className='register-account-row'>
						<div className='rejister-wrap'>
							<div className='register-input__wrapper'>
								<input
									name='Email'
									type='text'
									placeholder='Enter your email address'
									className='w-full pl-[16px] h-[56px] text-[14px] border-none outline-none rounded-[16px] bg-[hsla(0,0%,100%,.12)] mb-[12px]'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
						</div>

						{/* Email Suggestions */}
						{showEmailSuggestions && (
							<div className='common-email-postfix absolute z-10 w-full bg-gray-800 rounded-lg mt-1'>
								{emailDomains.map((domain, index) => (
									<div
										key={index}
										className='item p-2 hover:bg-gray-700 cursor-pointer'
										onClick={() => selectEmailDomain(domain)}
									>
										{email.split('@')[0]}
										{domain}
									</div>
								))}
							</div>
						)}
					</div>
				)}

				{/* Phone Input (Placeholder) */}
				{activeTab === 'phone' && (
					<div className='register-account-row relative flex'>
						{/* Country Code Selector */}
						<div className='area-code flex items-center mb-2 relative'>
							<div
								className='w-[97px] h-[56px] flex items-center justify-start bg-[hsla(0,0%,100%,.12)] rounded-tl-[16px] rounded-bl-[16px] static cursor-pointer'
								onClick={toggleCountryList}
							>
								<span className='pl-[16px]'>{selectedCountry.code}</span>
								<img
									src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuODAwNzggNi4zMzIwM0w4LjAwMDc4IDEwLjMzMkwxMS4yMDA4IDYuMzMyMDNINC44MDA3OFoiIGZpbGw9IiNEMUQxRDIiIHN0cm9rZT0iI0QxRDFEMiIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
									alt='Dropdown'
									className={`icon_down w-4 h-4 transition-transform ${
										showCountryList ? 'rotate-180' : ''
									}`}
								/>
							</div>

							{/* Country Code Dropdown */}
							{showCountryList && (
								<div className='area-code-list absolute top-full left-0 z-10 bg-[#262626] p-[16px] rounded-[12px]'>
									{countryCodes.map(country => (
										<div
											key={country.code}
											className={`px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center ${
												selectedCountry.code === country.code
													? 'bg-gray-700'
													: ''
											}`}
											onClick={() => selectCountry(country)}
										>
											{country.flag && (
												<span className='mr-2'>{country.flag}</span>
											)}
											<span className='font-medium'>{country.code}</span>
											<span className='ml-2 text-gray-400'>{country.name}</span>
										</div>
									))}
								</div>
							)}

							<div className='code_line h-[56px] w-px bg-gray-600'></div>
						</div>

						{/* Phone Number Input */}
						<div className='rejister-wrap phoneInput black w-full'>
							<div className='register-input__wrapper'>
								<div className='relative'>
									<input
										type='tel'
										value={phoneNumber}
										onChange={handlePhoneChange}
										className='w-full pl-[16px] h-[56px] text-[14px] border-none outline-none rounded-tr-[16px] rounded-br-[16px] bg-[hsla(0,0%,100%,.12)]'
										placeholder='Enter your phone number'
									/>
									{phoneNumber && (
										<button
											type='button'
											className='absolute right-3 top-1/2 transform -translate-y-1/2'
											onClick={() => setPhoneNumber('')}
										>
											<img
												src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQzNV8zMTUxKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy45OTg2MyAxNC45MDc0QzExLjUzMzMgMTQuOTA3NCAxNC4zOTg2IDEyLjA0MiAxNC4zOTg2IDguNTA3NDJDMTQuMzk4NiA0Ljk3MjggMTEuNTMzMyAyLjEwNzQyIDcuOTk4NjMgMi4xMDc0MkM0LjQ2NDAxIDIuMTA3NDIgMS41OTg2MyA0Ljk3MjggMS41OTg2MyA4LjUwNzQyQzEuNTk4NjMgMTIuMDQyIDQuNDY0MDEgMTQuOTA3NCA3Ljk5ODYzIDE0LjkwNzRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuODA5ODQgNi42OTcyN0w2LjE4OTQ1IDEwLjMxNzYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4yOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02LjE4OTQ1IDYuNjk3MjdMOS44MDk4NCAxMC4zMTc2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQzNV8zMTUxIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjUpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=='
												alt='Clear input'
												className='clear w-4 h-4'
											/>
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Referral Code */}
				<div className='vipCodeTitle flex items-center mt-[8px]'>
					<span className='text-sm'>Referral Code (Optional)</span>
					<img
						src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDZMOCAxMEw0IDYiIHN0cm9rZT0iIzhCOEI4RSIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=='
						alt='Dropdown'
						onClick={() => setShowReferralCode(!showReferralCode)}
						className='w-4 h-4 ml-1 cursor-pointer'
					/>
				</div>
				{showReferralCode && (
					<div className='vip-code mb-6'>
						<div className='rejister-wrap'>
							<div className='register-input__wrapper'>
								<input
									type='text'
									value={referralCode}
									onChange={e => setReferralCode(e.target.value)}
									className='w-full pl-[16px] h-[56px] text-[14px] border-none outline-none rounded-[16px] bg-[hsla(0,0%,100%,.12)] mt-[16px]'
									placeholder='Enter the referral code (optional)'
								/>
							</div>
						</div>
					</div>
				)}

				{/* Terms Agreement */}
				<div className='reg-protocol flex items-start mt-[40px] text-[#8b8b8e] text-[14px]'>
					<div className='check-protocol mr-2 mt-1'>
						<input
							type='checkbox'
							id='termsCheckbox'
							checked={agreedToTerms}
							onChange={e => setAgreedToTerms(e.target.checked)}
							className='hidden'
						/>
						<label htmlFor='termsCheckbox' className='cursor-pointer'>
							<img
								src={
									agreedToTerms
										? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iNCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjY2NTA0IDguNjIzNzhDNC4zODg5IDguMzQ3NjQgNC4zODg5IDcuODk5OTIgNC42NjUwNCA3LjYyMzc4QzQuOTQxMTggNy4zNDc2NCA1LjM4ODkgNy4zNDc2NCA1LjY2NTA0IDcuNjIzNzhMNy4xNjUwNCA5LjEyMzc4TDEwLjY2NSA1LjYyMzc4QzEwLjk0MTIgNS4zNDc2NCAxMS4zODg5IDUuMzQ3NjQgMTEuNjY1IDUuNjIzNzhDMTEuOTQxMiA1Ljg5OTkyIDExLjk0MTIgNi4zNDc2NCAxMS42NjUgNi42MjM3OEw3Ljg0NDEzIDEwLjQ0NDdDNy40NjkwOCAxMC44MTk3IDYuODYxIDEwLjgxOTcgNi40ODU5NSAxMC40NDQ3TDQuNjY1MDQgOC42MjM3OFoiIGZpbGw9IiMxNTE1MTUiLz4KPC9zdmc+Cg=='
										: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=='
								}
								alt='Checkbox'
								className='readMeCheckImg w-4 h-4'
							/>
						</label>
					</div>
					<div className='text-sm'>
						I have read and agreed to the{' '}
						<a
							href='https://weexsupport.zendesk.com/hc/en-us/articles/4417379529241'
							target='_blank'
							rel='noopener noreferrer'
							className='text-yellow-400 hover:underline'
						>
							Terms of Service
						</a>
					</div>
				</div>

				{/* Register Button */}
				<div className='register_btn_wrap mt-[24px]'>
					<button
						type='submit'
						disabled={!agreedToTerms || (activeTab === 'email' && !email)}
						className={`w-full py-3 font-medium h-[56px] rounded-[16px] cursor-pointer ${
							agreedToTerms && (activeTab === 'phone' || email)
								? 'bg-yellow-400 text-black hover:bg-yellow-500'
								: 'bg-gray-600 text-gray-400 cursor-not-allowed'
						}`}
					>
						Sign up and receive a new user gift
					</button>
				</div>
			</form>

			{/* Third Party Registration */}

			<div className='go-reg mt-[16px] text-[14px] text-[#8b8b8e] flex gap-[4px]'>
				<span className='text-[#8b8b8e]'>Already have an account?</span>{' '}
				<p
					onClick={() => setActivePage('login')}
					className='text-[#e6c325] cursor-pointer'
				>
					Log in
				</p>
			</div>

			{/* Third Party Login */}
			<div className='thirdParty-register pt-[24px]'>
				<div className='title flex items-center justify-between'>
					<div className='line w-[124px] h-[1px] bg-[#474747]'></div>
					<div className='sub-tit text-center text-[12px] text-[#d1d1d2]'>
						Or log in with
					</div>
					<div className='line w-[124px] h-[1px] bg-[#474747]'></div>
				</div>

				{/* Google Login */}
				<div id='google-btn' className='h-[56px] mt-[24px]'>
					<button
						onClick={handleGoogleRegister}
						className='w-full h-[56px] flex justify-center items-center border border-[#2e2e2e] rounded-[16px] cursor-pointer hover:border-white'
					>
						<img
							src='https://www.weex.com/_nuxt/img/icon_google.687d221.svg'
							alt='Google'
							className='w-6 h-6 mr-[16px]'
						/>
						<span>Continue with Google</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default RegisterPage
