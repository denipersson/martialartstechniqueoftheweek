import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCigU2D6QZtX5WaHa2kx5vYDyDS73L7Bq8",
    authDomain: "martialartsnerdswebapp.firebaseapp.com",
    projectId: "martialartsnerdswebapp",
    storageBucket: "martialartsnerdswebapp.appspot.com",
    messagingSenderId: "1019694043042",
    appId: "1:1019694043042:web:a71bf17afc5d9085d66cfb",
    measurementId: "G-63QPG2EKXT"
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
