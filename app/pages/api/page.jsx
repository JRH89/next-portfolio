// import fs from 'fs'
// import path from 'path'

// export default (req, res) => {
// 	const folder = 'certificates'
// 	const dirPath = path.join(process.cwd(), 'public', 'images', folder)
// 	const fileNames = fs.readdirSync(dirPath)
// 	const imagePaths = fileNames.map((fileName) => `/images/${folder}/${fileName}`)

// 	res.status(200).json({ imagePaths })
// }
