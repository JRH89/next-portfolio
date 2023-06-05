"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MyImageGallery = () => {

	const imagePaths = [
		'/images/certificates/cert1.png',
		'/images/certificates/cert2.png',
		'/images/certificates/cert3.png',
		'/images/certificates/cert5.png',
		'/images/certificates/cert6.png',
		'/images/certificates/cert7.png',
		'/images/certificates/cert4.png',
	]

	const [clickedImage, setClickedImage] = useState(null)

	const handleClick = (imagePath) => {
		setClickedImage(imagePath)
	}

	const handleClose = () => {
		setClickedImage(null)
	}

	return (
		<>
			<div className='flex bg-black pt-5 w-auto justify-center'>
				<Link className='hover:scale-90 place-items-center items-center align-middle flex rounded-lg border-2 border-blue-400 shadow-lg shadow-blue-400/50 text-blue-400 font-bold p-2 bg-black justify-center max-w-[800px] duration-300 hover:opacity-60' href={('/')}>Back to Portfolio</Link>
			</div>
			<div className="text-center justify-center items-center flex flex-col bg-black  gap-3 p-5">

				{imagePaths.map((imagePath) => (
					<Image
						key={imagePath}
						src={imagePath}
						width={500}
						cover
						height={500}
						alt="Image"
						lazy={true}
						className=" object-cover cursor-pointer border-2 bg-slate-900 p-4 border-yellow-400 rounded-md"
						onClick={() => handleClick(imagePath)}
					/>
				))}
				{clickedImage && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center"
						onClick={handleClose}
					>
						<Image width={1920} height={1080} src={clickedImage} alt="Clicked Image" className="max-w-full max-h-full" />
					</div>
				)}
			</div></>
	)
}

export default MyImageGallery
