import firebase from '../../utils/firebase';

const db = firebase.firestore();
const counterRef = db.collection('counter').doc('hitCount');

export default async (req, res) => {
	if (req.method === 'GET') {
		// Retrieve the hit count from Firestore
		const doc = await counterRef.get();

		if (doc.exists) {
			res.status(200).json({ count: doc.data().count });
		} else {
			res.status(200).json({ count: 0 });
		}
	} else if (req.method === 'POST') {
		// Update the hit count in Firestore
		await counterRef.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true });

		res.status(200).end();
	} else {
		res.status(405).end();
	}
};
