import { useState, useEffect } from 'react'
import Image from 'next/image'

const MyImageGallery = () => {
	const [imagePaths, setImagePaths] = useState([])
	const [clickedImage, setClickedImage] = useState(null)

	useEffect(() => {
		async function fetchImagePaths() {
			const res = await fetch('/api/images') // Updated API endpoint
			const { imagePaths } = await res.json()
			setImagePaths(imagePaths)
		}

		fetchImagePaths()
	}, [])

	const handleClick = (imagePath) => {
		setClickedImage(imagePath)
	}

	const handleClose = () => {
		setClickedImage(null);
	}

	return (
		<div className="grid md:grid-cols-2 sm:grid-cols-2 gap-3 p-10">
			{imagePaths.map((imagePath) => (
				<Image
					key={imagePath}
					src={imagePath}
					width={500}
					height={500}
					alt="Image"
					lazy={true}
					className="w-full h-full object-cover cursor-pointer border-2 rounded-md"
					onClick={() => handleClick(imagePath)}
				/>
			))}
			{clickedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center"
					onClick={handleClose}
				>
					<img src={clickedImage} alt="Clicked Image" className="max-w-full max-h-full" />
				</div>
			)}
		</div>
	)
}

export default MyImageGallery
