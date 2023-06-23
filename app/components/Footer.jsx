import React from 'react'
import VisitorCounter from './hitCounter'

function Footer() {
	return (
		<div className="rounded-top-xl fixed bottom-0 w-full z-50 flex justify-center">
			<footer className="w-full p-1 z-50 font-bold max-w-[800px] text-center bg-gradient-to-r rounded-t-xl from-blue-500 via-green-500 to-red-500 text-slate-900">
				<div>
					<VisitorCounter />
					<p><a className='hover:scale-90 hover:opacity-60' href='https://hooker-hill-studios.vercel.app'>Hooker Hill Studios</a></p>
				</div>
			</footer>
		</div>
	)
}

export default Footer

