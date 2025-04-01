import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

interface TaskItem {
	reward: string
	title: string
	description: string
	target: string
	progress: number
	buttonText: string
	disabled: boolean
}

interface Section {
	title: string
	tasks: TaskItem[]
}

const WelcomeBonus = () => {
	const [isCollapsed, setIsCollapsed] = useState(false)

	const sections: Section[] = [
		{
			title: 'New User Rewards',
			tasks: [
				{
					reward: '5',
					title: 'Identity verification',
					description: 'Complete KYC verification to claim',
					target: '',
					progress: 0,
					buttonText: 'KYC',
					disabled: true,
				},
			],
		},
		{
			title: 'Futures trading',
			tasks: [
				{
					reward: '10',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 10,000 USDT or higher to claim',
					target: '10,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '20',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 100,000 USDT or higher to claim',
					target: '100,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '50',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 1,000,000 USDT or higher to claim',
					target: '1,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '200',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 5,000,000 USDT or higher to claim',
					target: '5,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '500',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 10,000,000 USDT or higher to claim',
					target: '10,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '2,000',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 50,000,000 USDT or higher to claim',
					target: '50,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '3,000',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 100,000,000 USDT or higher to claim',
					target: '100,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '5,000',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 200,000,000 USDT or higher to claim',
					target: '200,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '8,300',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 300,000,000 USDT or higher to claim',
					target: '300,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
				{
					reward: '10,060',
					title: 'Futures trading',
					description:
						'Achieve a futures trading volume of 400,000,000 USDT or higher to claim',
					target: '400,000,000',
					progress: 0,
					buttonText: 'Trade',
					disabled: true,
				},
			],
		},
	]

	const termsAndConditions = [
		{
			title: 'Article I: User Eligibility',
			items: [
				'1. This event is exclusively open to newly registered users on the WEEX platform, with a validity period of 30 days from the registration date.',
				'2. Each individual is limited to participating with one account only, multiple accounts will be disqualified and receive risk notifications.',
			],
		},
		{
			title: 'Article II: Task Requirements',
			items: [
				'1. Only on-chain deposits are counted toward deposit tasks. Internal transfers between WEEX accounts do not qualify for task completion.',
				'2. Futures trading volume is calculated as margin multiplied by the leverage ratio. Orders that do not generate fees will not be included in trading volume calculations.',
				'3. Upon risk warnings, users must submit valid KYC documents matching their IP region. Rewards require verification approval.',
			],
		},
		{
			title: 'Article III: Reward Distribution',
			items: [
				'1. Users must claim rewards using the "Claim" button within the validity period. Unclaimed rewards will automatically expire after the deadline.',
				'2. Rewards for new users will be distributed according to their respective regions.',
				'3. Reward distribution details can be viewed in the reward history.',
				'4. Data updates may be delayed; please wait two minutes and try again if task status has not updated.',
			],
		},
		{
			title: 'Article IV: Bonus Rules',
			items: [
				'1. Bonus funds are exclusively for futures trading, supporting all trading pairs, and cannot be transferred or withdrawn.',
				'2. Bonus funds can be used as margin for trading and can offset transaction fees, losses, and funding fees.',
				'3. Any transfer of assets out of the account before the bonus fund is consumed will result in the fund being cleared to zero.',
				'4. Bonus funds are valid for 7 days. Unused portions will be reclaimed after expiration; please be aware of potential liquidation risks.',
			],
		},
		{
			title: 'Article V: Coupon Rules',
			items: [
				'1. Coupons can only be used to offset transaction fees and cannot be used for margin, funding fees, trading losses, or other purposes.',
				'2. Coupons are valid for 7 days and will automatically expire if unused.',
				'3. Coupons cannot be transferred, withdrawn, or exchanged for other forms of rewards.',
				"4. Fund usage order: Coupons > Bonus funds > User's own assets.",
			],
		},
		{
			title: 'Article VI: Legal Provisions',
			items: [
				'1. WEEX will strictly review bulk registrations, trading volume manipulation, cheating, and fraudulent behavior, and reserves the right to recover all rewards and disqualify violators.',
				'2. WEEX reserves the right to modify these terms at any time without prior notice, including cancellation, extension, termination, or suspension of this event.',
				'3. In case of discrepancies between translated versions and the English version of these Terms and Conditions, the English version shall prevail.',
				'4. WEEX reserves the right of final interpretation for this event.',
			],
		},
	]

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed)
	}

	const renderTasks = (tasks: TaskItem[]) => {
		if (isCollapsed && tasks.length > 1) {
			return [tasks[0]] // Показываем только первую карточку
		}
		return tasks
	}

	return (
		<main className='index_main bg-[#151515] text-white items-center min-h-[100vh]'>
			{/* Header Section */}
			<div
				className='index_header text-center relative bg-cover bg-no-repeat w-full mx-auto bg-[50%]'
				style={{
					backgroundImage:
						'url(https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/13dfba1d29bd3062c2494e766e8d4149.png)',
					height: '300px',
				}}
			>
				<div className='index_headerContent w-[1200px] mx-auto flex flex-col items-start justify-center h-full'>
					<span className='index_headerTitle text-[24px]'>Welcome Bonus</span>
					<h1 className='index_headerSubTitle text-[40px] font-[700] mt-[14px] max-w-[800px] text-left'>
						Kickstart your journey with <span>30,000 USDT</span>
					</h1>
					<div className='index_headerBox'>
						<div className='index_boxRight'></div>
					</div>
				</div>
			</div>

			{/* Tasks Sections */}
			{sections.map((section, sectionIndex) => (
				<Fragment key={sectionIndex}>
					<div className='index_newbieTitle big-content w-[1200px] mx-auto text-[24px] font-[700] py-[32px]'>
						{section.title}
					</div>
					<div className='index_noviceTask big-content w-[1200px] mx-auto flex flex-col gap-[24px]'>
						{section.title === 'Futures trading'
							? renderTasks(section.tasks).map((task, taskIndex) => (
									<TaskCard key={taskIndex} task={task} />
							  ))
							: section.tasks.map((task, taskIndex) => (
									<TaskCard key={taskIndex} task={task} />
							  ))}
					</div>
				</Fragment>
			))}

			{/* Collapse Button */}
			<div className='border-b-8 border-[#333] rounded-b-lg w-[calc(100%-666px)] mx-auto' />
			<div
				className='index_btn bg-[#333] w-fit h-[24px] flex items-center mx-auto rounded-bl-lg rounded-br-lg text-[#d1d1d2] text-center text-[14px] cursor-pointer px-[12px] py-[2px] gap-[2px]'
				onClick={toggleCollapse}
			>
				<span>{isCollapsed ? 'Expand' : 'Collapse'}</span>
				<img
					alt='toggle icon'
					width={16}
					height={16}
					src='https://www.weex.com/static/images/newbieActivities/up.svg'
					className={`transition-transform duration-200 ${
						!isCollapsed ? 'rotate-0' : 'rotate-180'
					}`}
					style={{ color: 'transparent' }}
				/>
			</div>
			{/* Terms & Conditions */}
			<div className='index_newbieTitle big-content text-[24px] font-[700] py-[32px] mx-auto w-[1200px]'>
				Terms & Conditions
			</div>
			<div className='index_rules big-content ql-editor text-[#d1d1d2] text-[14px] pb-[40px] mx-auto w-[1200px] py-[12px] px-[15px] flex flex-col gap-[48px]'>
				{termsAndConditions.map((article, index) => (
					<div key={index}>
						<p>{article.title}</p>
						{article.items.map((item, i) => (
							<p key={i} className='mt-[18px]'>
								{item}
							</p>
						))}
						{index < termsAndConditions.length - 1 && (
							<p>
								<br />
							</p>
						)}
					</div>
				))}
			</div>
		</main>
	)
}

interface TaskCardProps {
	task: TaskItem
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
	const [showTooltip, setShowTooltip] = useState(false)

	const tooltip = [
		'1）Use the "KYC" button and go to the WEEX app to verify your identity.',
		'2）Complete KYC verification to get your reward.',
	]

	return (
		<div
			className='index_commonTask flex opacity-1 py-[32px] pr-[32px] bg-[#222] w-full h-[204px] rounded-[24px] relative'
			style={{ display: 'flex', opacity: 1, padding: '32px 32px 32px 0px' }}
		>
			<div
				className='index_left border-r border-dashed border-[rgba(255, 255, 255, 0.12)] px-[37px]'
				style={{
					borderRight: '1px dashed rgba(255, 255, 255, 0.12)',
					borderLeft: 'none',
				}}
			>
				<div
					className='index_rewardNum w-[150px] h-[150px] flex items-center justify-center flex-col'
					style={{
						background:
							'url(https://d2tfhb4luz96yb.cloudfront.net/otc/images/banner/122b928ec8edddadc974e089510592ba.png) center center / contain no-repeat',
					}}
				>
					<span className='index_money text-[44px] font-[700] text-[#12b670] text-nowrap'>
						{task.reward}
					</span>
					<i className='text-center text-[18px] font-[700] text-[#12b670]'>
						USDT
					</i>
				</div>
			</div>
			<div className='index_right pl-[32px] flex justify-between items-center w-full'>
				<div className='index_bottom w-full pr-[32px]'>
					<div className='index_taskTitle mb-[8px] flex items-center'>
						<b style={{ marginLeft: '0px', marginRight: '8px' }}>
							{task.title}
						</b>
						<div
							style={{ position: 'relative', display: 'inline-block' }}
							onMouseEnter={() => setShowTooltip(true)}
							onMouseLeave={() => setShowTooltip(false)}
						>
							<img
								alt=''
								width={16}
								height={16}
								src='	https://www.weex.com/static/images/newbieActivities/question_icon.svg'
								style={{ color: 'transparent' }}
							/>
							{showTooltip && (
								<div
									style={{
										position: 'absolute',
										bottom: '100%',
										left: '50%',
										transform: 'translateX(-50%)',
										backgroundColor: '#1E1E1E',
										color: '#FFFFFF',
										padding: '12px',
										borderRadius: '4px',
										width: '240px',
										boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
										zIndex: 100,
										fontSize: '12px',
										lineHeight: '18px',
										marginBottom: '8px',
									}}
								>
									{tooltip.map((text, i) => (
										<p key={i} style={{ margin: '0 0 8px 0', padding: '0' }}>
											{text}
										</p>
									))}
									<div
										style={{
											position: 'absolute',
											top: '100%',
											left: '50%',
											transform: 'translateX(-50%)',
											width: 0,
											height: 0,
											borderLeft: '6px solid transparent',
											borderRight: '6px solid transparent',
											borderTop: '6px solid #1E1E1E',
										}}
									></div>
								</div>
							)}
						</div>
					</div>
					<span className='text-[#d1d1d2] text-[14px]'>
						{task.description}{' '}
						<i className='text-white text-[18px] font-[700]'>
							{task.reward} USDT
						</i>
						{task.target && (
							<>
								<br />
								<div
									className='progress-container'
									style={{
										width: '100%',
										height: '8px',
										backgroundColor: 'rgb(46, 46, 52)',
										borderRadius: '6px',
										marginTop: '8px',
										overflow: 'hidden',
									}}
								>
									<div
										className='progress-bar'
										style={{
											width: `${task.progress}%`,
											height: '100%',
											backgroundColor: 'rgb(209, 209, 210)',
											transition: 'width 0.3s ease',
										}}
									/>
								</div>
								{/* <div
									className='progress-label'
									style={{
										fontSize: '12px',
										color: 'rgba(255, 255, 255, 0.6)',
										marginTop: '4px',
									}}
								>
									{Math.round(task.progress)}% of {task.target} USDT
								</div> */}
							</>
						)}
					</span>
				</div>
				<div className='index_btn flex flex-col items-start justify-center'>
					<button className='text-[#8b8b8e] cursor-not-allowed bg-[hsla(0,0%,100%,.05)] w-[200px] rounded-[18px] h-[48px]'>
						{task.buttonText}
					</button>
				</div>
			</div>
		</div>
	)
}

export default WelcomeBonus
