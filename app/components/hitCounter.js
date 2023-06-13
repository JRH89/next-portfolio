import { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { increment } from 'firebase/firestore';
import db from '../../firebase';

const VisitorCounter = () => {
	const [visitorCount, setVisitorCount] = useState(0);

	useEffect(() => {
		const incrementVisitorCount = async () => {
			const visitorsRef = doc(db, 'visitors', 'counter');
			await updateDoc(visitorsRef, {
				count: increment(1),
			});
			fetchVisitorCount();
		};

		const fetchVisitorCount = async () => {
			const visitorsRef = doc(db, 'visitors', 'counter');
			const snapshot = await getDoc(visitorsRef);
			if (snapshot.exists()) {
				setVisitorCount(snapshot.data().count);
			}
		};

		incrementVisitorCount();
	}, []);

	return (
		<div>
			<p>Visitors: {visitorCount}</p>
		</div>
	);
};

export default VisitorCounter;
