import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from "@firebase/firestore";
import TechniqueView from '../Views/TechniqueView';

function TechniquePresenter() {
    const [technique, setTechnique] = useState('');

    useEffect(() => {
        async function fetchTechnique() {
            // Fetch technique from Firestore
            const docRef = doc(db, "technique", "current");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data) {
                    setTechnique(data.name);
                }
            }
       }

        // Call the function once on component mount
        fetchTechnique();

        // Fetch technique every 10 seconds
        const intervalId = setInterval(fetchTechnique, 1000*10);
        console.log("Fetched technique");
        
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return <TechniqueView technique={technique} />
}

export default TechniquePresenter;
