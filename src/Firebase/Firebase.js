import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyA8kA2fWSb2aeEF6s__DRgoHFDaXIldh0k",
  authDomain: "learners-app-6399b.firebaseapp.com",
  projectId: "learners-app-6399b",
  storageBucket: "learners-app-6399b.appspot.com",
  messagingSenderId: "1038544310430",
  appId: "1:1038544310430:web:503ed9c7b0285a1181ab8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const db = firebase.firestore;