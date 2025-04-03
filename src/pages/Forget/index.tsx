import { useState } from 'react'

const Forget = () => {
	const [email, setEmail] = useState('')

	return (
		<div className='bg-[#151515] mx-auto py-[1px] px-[16px] min-h-[80vh]'>
			<div className='max-w-[1200px] w-[500px] h-auto p-[32px] bg-[#222] rounded-[24px] box-border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:left-auto max-sm:w-auto max-sm:min-w-[260px] max-sm:bg-transparent max-sm:mt-[10.6vw] max-sm:p-0 max-sm:top-auto max-sm:transform-auto max-sm:relative max-sm:translate-y-0 max-sm:translate-x-0'>
				<h1 className='text-white text-[40px] mb-[40px] font-[700]'>
					Forgot Password
				</h1>

				<form>
					<label
						htmlFor=''
						className='text-white text-[16px] font-[500] mt-[24px] mb-[16px]'
					>
						Email/Mobile Number
					</label>
					<div className='login-form-input relative'>
						<input
							name='dnEmail'
							type='text'
							placeholder='Enter your email/mobile number'
							className='w-full pl-[16px] h-[56px] text-[14px] border-none outline-none rounded-[16px] bg-[hsla(0,0%,100%,.12)] mt-[16px]'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<button
						type='submit'
						className='w-full h-[56px] mt-[40px] text-[16px] font-medium text-black bg-[#e6c325] rounded-[16px] cursor-pointer hover:bg-[#d8ae15]'
					>
						Next
					</button>
				</form>
			</div>
		</div>
	)
}

export default Forget
