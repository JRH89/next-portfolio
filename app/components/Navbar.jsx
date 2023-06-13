import { Link } from "react-scroll";

import React, { useState } from 'react';

function Nav({ handleMenuClick, setShowCerts, setActiveGroup, setActiveProject }) {
	const [showMenu, setShowMenu] = useState(false);

	function openMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<nav className="w-full max-w-[800px] top-0 rounded-b-xl fixed text-lg z-50 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-slate-900 font-bold">
			<ul className="flex py-2 justify-evenly mx-5">
				<li className="hover:scale-90 hover:opacity-50 cursor-pointer duration-300">
					<Link
						to="hero"
						activeClass="active"
						spy={true}
						smooth={true}
						duration={500}
						onClick={() => {
							setActiveGroup(null)
							setShowCerts(false)
							setActiveProject(null)
						}}
					>
						Home
					</Link>

				</li>
				<li className="relative">
					<button
						className="hover:scale-90 hover:opacity-50 duration-300"
						onClick={openMenu}
					>
						Sections
					</button>
					{showMenu && (
						<div className="absolute left-1/2 transform -translate-x-1/2 duration-300 text-center flex flex-col text-xl mt-2 space-y-2 shadow-md shadow-white/50 bg-gray-100 rounded-xl p-6">
							<button
								onClick={() => {
									setShowCerts(false)
									handleMenuClick("software")
									openMenu()
								}}
								className="hover:text-red-400 hover:scale-90 duration-300"
							>
								Software
							</button>
							<button
								onClick={() => {
									setShowCerts(false)
									handleMenuClick("games")
									openMenu()
								}}
								className="hover:text-blue-400 duration-300 hover:scale-90"
							>
								Games
							</button>
							<button
								onClick={() => {
									setShowCerts(false)
									handleMenuClick("android")
									openMenu()
								}}
								className="hover:text-green-400 duration-300 hover:scale-90"
							>
								Android
							</button>
							<Link
								to="hero"
								spy={true}
								smooth={true}
								duration={500}
								onClick={() => {
									setActiveGroup(null)
									setActiveProject(null)
									setShowCerts(true)
									openMenu()
								}}
								className="hover:text-green-400 duration-300 hover:scale-90"
							>
								Certificates
							</Link>
							<Link
								to="message"
								spy={true}
								smooth={true}
								duration={600}
								onClick={() => {
									setActiveGroup(null)
									setActiveProject(null)
									setShowCerts(false)
									openMenu()
								}}
								className="hover:text-green-400 duration-300 hover:scale-90"
							>
								Message
							</Link>
						</div>
					)}
				</li>
				<li className="hover:scale-90 hover:opacity-50 duration-300">
					<a download href="/Jared-Hooker-Resume.pdf">
						Resume
					</a>
				</li>
				<li className="hover:scale-90 hover:opacity-50 duration-300 ">
					<a href="https://have-mycard.vercel.app/api/3dhrOh3i">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
