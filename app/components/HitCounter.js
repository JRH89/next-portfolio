import { useState, useEffect } from 'react';
import { collection, doc, getDoc, increment } from 'firebase/firestore';
import db from '@/utils/firebase';
function HitCounter() {
	const [hitCount, setHitCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const docRef = doc(db, 'counter', 'hitCount');
			const snapshot = await getDoc(docRef);

			if (snapshot.exists()) {
				setHitCount(snapshot.data().count);
			} else {
				setHitCount(0);
			}
		};

		fetchData();
	}, []);

	return <p>Hit Count: {hitCount}</p>;
}

export default HitCounter;
