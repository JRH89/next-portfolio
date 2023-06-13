import React from 'react'
import VisitorCounter from './hitCounter'

function Footer() {
	return (
		<div className="rounded-top-xl p-1 fixed bottom-0 w-full z-50 flex justify-center">
			<footer className="w-full z-50 font-bold max-w-[800px] text-center bg-gradient-to-r rounded-t-xl from-blue-500 via-green-500 to-red-500 text-slate-900">
				<div>
					<VisitorCounter />
					<p>Hooker Hill Studios ⓒ 2023</p>
				</div>
			</footer>
		</div>
	)
}

export default Footer

