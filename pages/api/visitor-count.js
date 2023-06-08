import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';

export default async (req, res) => {
	try {
		const visitorsRef = doc(db, 'visitors', 'counter');
		const snapshot = await getDoc(visitorsRef);
		if (snapshot.exists()) {
			const visitorCount = snapshot.data().count;
			res.status(200).json({ count: visitorCount });
		} else {
			res.status(404).json({ error: 'Visitor count not found' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Something went wrong' });
	}
};
