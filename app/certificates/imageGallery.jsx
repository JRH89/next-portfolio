"use client"
import { useState } from 'react'
import Image from 'next/image'

const MyImageGallery = () => {

	const imagePaths = [
		'/images/cert10.jp'
		'/images/certificates/cert8.jpg',
		'/images/certificates/react_certificate.jpg',
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
			<div className="text-center justify-center items-center flex rounded-md flex-col gap-3 p-3">
				{imagePaths.map((imagePath) => (
					<Image
						key={imagePath}
						src={imagePath}
						width={500}
						cover="true"
						height={500}
						alt="Image"
						className="object-cover cursor-pointer border-2 bg-sky-950 p-4 border-yellow-300  rounded-xl"
						onClick={() => handleClick(imagePath)}
					/>
				))}
				{clickedImage && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center rounded-xl"
						onClick={handleClose}
					>
						<Image
							width={1920}
							height={1080}
							src={clickedImage}
							alt="Clicked Image"
							className="max-w-full rounded-xl max-h-full" />
					</div>
				)}
			</div></>
	)
}

export default MyImageGallery
