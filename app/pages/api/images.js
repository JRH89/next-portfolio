import path from 'path'
import { getCertificateImagePaths } from '@/lib/utils'
export default (req, res) => {
	const folder = 'certificates'
	const dirPath = path.join(process.cwd(), 'public', 'images', folder)
	const imagePaths = getCertificateImagePaths(dirPath)

	res.status(200).json({ imagePaths })
}
