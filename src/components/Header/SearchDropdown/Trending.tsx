const Trending = () => {
	return (
		<div className='cursor-pointer flex items-center justify-between p-[12px_8px] rounded-[12px] text-white gap-3 hover:bg-[#333]'>
			<div className='flex items-center gap-[8px]'>
				<span className='text-[#fff] font-[500] inline-block w-[22px]'>1</span>
				<img
					data-v-c1b5d374=''
					src='https://d2tfhb4luz96yb.cloudfront.net/otc/images/contract_coin_img/d99bca657face47f8c24e2f5c7ef983e.png'
					className='w-[16px] h-[16px]'
				/>
				<div className='text-left'>
					<div className='flex items-center gap-[4px]'>
						<div className='max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-medium'>
							BTCUSDT
						</div>
						<span className='rounded-[4px] h-4 leading-4 text-xs font-medium font-sans px-[5px] bg-[hsla(0,0%,100%,.05)] text-white'>
							400 x
						</span>
						<img
							data-v-c1b5d374=''
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAgCAYAAABQISshAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMkSURBVHgB3Zg/TBNRHMd/7921BVqjJbTGyYqbBGVQw9hGTAgxgQGN0QkTF1jAyc2SOJiYqCwdHNRdhiMRw6Cxm0YdGg1uCkyEkgiGloq93vP3e/WOa63hDrmG45Nc7r17D/q+7/fv5TGoY7l/OMmYGFKBDwomErCfEJDDNeUqRmXy2Jy2aB9iZmMhOXQk0qrewS/j4AcEPFJL+mQ0q61TVwohEeFW9Q1j0AN+Ai2EYlIkhlOfLOE7EQSuWScvouZy/9WEyvUF8DG6ASnOmZ4Gn6NgckIhcAb8DoNBFV87xobaeRxYOCzb+rdFEMXNv+YEuk9Z7fLnL9BMGLCE6mRi+OYIBE53yfaP22lc6HzNuHI0BofvTcp2ZSUPazfGYDfweMxqG/lVcIMjIc2i/WlGvnezGRwOCE2xCMVP6EJKuiDx690H2Hr73nKfYO85fM5b83kkDJHxMenCW6+zjn7DcyGHJkYh1Jeq+Ubx1jI4ABt378vkoXYmoOVi0hqnxGL2PRMS7D2LO9tR883MaPW0XbtsiTBWVqE0MysXHepL4v+IY4JIw/eRUbTQR2mdyEQ1LkSxCMXHzzBWnAe8ayGtQ5cczw392VVaGGW7Sj4v+xTMbdevVHceRZVmXqJlFiwhRqEIP19lwQ2ug93AxTR66lFw55V4XLbLn+YtEYTdXQLdXbAXuLbIxoNMwzoSfZKp+cbDbVbbKNQWULvLsEhjt3SLZ+nXaFD9Tf4VU/+Dd0Jsux44magZoyOPif51bw7engmhADddkOKFMpj8QXTDyK3tqk0Za/tvqlakOmI/rjjB08peeJixih5lqY7Z59COsWQmAUrH9nijzEWQ69FxhdKzUzwVQmm20SGTdp7qBD127MLdwlYHhgU0AdplKoJUIxqlaztq5wk5j9yTHic07fRLCzJdZyeczrNzYE6/JGQJ/E+OCxAa+BwGIseZwXwvRMErVB6bm86ioinwKUKIqSjeA8tgV4KVNL5y4D9ygZJcezVrRTVtXQ3qKT9ZhiyhblbvfanP6ies4RVqmW4fuehhgu23y7slFKAxhWmxF9NZ+8BvyFJJzy93o7MAAAAASUVORK5CYII='
							className='h-[16px]'
						></img>
					</div>
					<div className='mt-[4px] text-[12px] text-[#8b8b8e]'>6.52B USDT</div>
				</div>
			</div>

			<div className='flex items-center font-sans font-medium gap-3'>
				<div className='flex-1'>87,175.8</div>
				<div className='text-[#f14b3f] text-right w-[80px]'>-0.49%</div>
			</div>
		</div>
	)
}

export default Trending
