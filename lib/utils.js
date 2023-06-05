import fs from 'fs'

export function getCertificateImagePaths(dirPath) {
	const fileNames = fs.readdirSync(dirPath)
	const imagePaths = fileNames.map((fileName) => `/certificates/${fileName}`)
	return imagePaths
}
