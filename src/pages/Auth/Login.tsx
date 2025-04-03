import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	setActivePage: React.Dispatch<React.SetStateAction<string>>
}

const Login = ({ setActivePage }: Props) => {
	const [activeTab, setActiveTab] = useState<'email' | 'qr'>('email')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		// Login logic here
		console.log('Logging in with:', { email, password })
	}

	const handleGoogleLogin = () => {
		// Google login logic
		console.log('Google login')
	}

	return (
		<div className='login_step max-w-md mx-auto w-full'>
			<h1 className='login-title text-[40px] font-[700] mb-[32px]'>Log In</h1>

			{/* Login Tabs */}
			<div className='login-tab flex mt-[32px] mb-[16px] gap-[24px]'>
				<div
					className={`tab cursor-pointer ${
						activeTab === 'email' ? 'text-white font-medium' : 'text-[#8b8b8e]'
					}`}
					onClick={() => setActiveTab('email')}
				>
					Email/Mobile Number
				</div>
				<div
					className={`tab cursor-pointer ${
						activeTab === 'qr' ? 'text-white font-medium' : 'text-[#8b8b8e]'
					}`}
					onClick={() => setActiveTab('qr')}
				>
					QR code
				</div>
			</div>

			{/* Email Login Form */}
			{activeTab === 'email' && (
				<form className='login-form' onSubmit={handleLogin}>
					<div className='login-form-group mb-[32px]'>
						<div className='login-form-input relative'>
							<input
								name='dnEmail'
								type='text'
								placeholder='Enter your email/mobile number'
								className='w-full pl-[16px] h-[56px] text-[14px] border-none outline-none rounded-[16px] bg-[hsla(0,0%,100%,.12)]'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>

					<div className='login-form-group '>
						<label className='block text-sm font-medium mb-1'>Password</label>
						<div className='login-form-input relative'>
							<input
								name='dnPsw'
								type={showPassword ? 'text' : 'password'}
								placeholder='Enter password'
								className='w-full pl-[16px] h-[56px] text-[14px] border-none outline-none rounded-[16px] bg-[hsla(0,0%,100%,.12)]'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<button
								type='button'
								className='absolute right-3 top-[20px] cursor-pointer'
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<img
										src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjAxIiBmaWxsPSIjZmZmIiBkPSJNMCAwaDE2djE2SDB6Ii8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxMi44YzMuOTc2IDAgNy4yLTQuNCA3LjItNC40UzExLjk3NyA0IDggNEM0LjAyNCA0IC44IDguNC44IDguNHMzLjIyNCA0LjQgNy4yIDQuNHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjE0MyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTAuMjMzYy45OTQgMCAxLjgtLjgyIDEuOC0xLjgzM1M4Ljk5NCA2LjU2NyA4IDYuNTY3cy0xLjguODItMS44IDEuODMzYzAgMS4wMTIuODA2IDEuODMzIDEuOCAxLjgzM3oiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjE0MyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=='
										alt='eye'
									/>
								) : (
									<img
										src='https://www.weex.com/_nuxt/img/icon_eye_close.2f42fb9.svg'
										alt='eye'
									/>
								)}
							</button>
						</div>
						<div className='forget text-right mt-[40px]'>
							<Link to='/forget' className='text-[#d8ae15] text-sm'>
								Forgot Password
							</Link>
						</div>
					</div>

					<div className='form-btn-box'>
						<button
							type='submit'
							className='w-full h-[56px] mt-[40px] text-[16px] font-medium text-black bg-[#e6c325] rounded-[16px] cursor-pointer hover:bg-[#d8ae15]'
						>
							Log In
						</button>
					</div>
				</form>
			)}

			{/* QR Code Login (Placeholder) */}
			{activeTab === 'qr' && (
				<div className='text-center py-8'>
					<p className='mb-4'>Scan QR code with WEEX mobile app</p>
					<div className='bg-gray-200 w-48 h-48 mx-auto flex items-center justify-center'>
						<span className='text-gray-500'>QR Code Placeholder</span>
					</div>
				</div>
			)}

			{/* Registration Link */}
			<div className='go-reg mt-[16px] text-[14px] text-[#8b8b8e] flex gap-[4px]'>
				<span className='text-gray-600'>Don't have an account?</span>{' '}
				<p
					onClick={() => setActivePage('register')}
					className='text-[#e6c325] cursor-pointer'
				>
					Sign Up
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
						onClick={handleGoogleLogin}
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

export default Login
