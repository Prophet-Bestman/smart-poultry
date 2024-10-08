import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBq-SBVP0a60D9sM7XFaGN-oNNNFmw8-K8",
  authDomain: "smartpoultry-4324d.firebaseapp.com",
  projectId: "smartpoultry-4324d",
  storageBucket: "smartpoultry-4324d.appspot.com",
  messagingSenderId: "1024667182750",
  appId: "1:1024667182750:web:5a2f47258f7ee50dcb3d8f",
  measurementId: "G-5CQJ1ECQJ0",
  databaseURL: "https://smartpoultry-4324d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);
const realTimeDb = getDatabase(app);

export { app, db, realTimeDb };
