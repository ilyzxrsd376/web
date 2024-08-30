// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBjzTy6oa0rS9MLbXULHvyDkStGWm_LmeM",
  authDomain: "tjkt-1.firebaseapp.com",
  projectId: "tjkt-1",
  storageBucket: "tjkt-1.appspot.com",
  messagingSenderId: "951724032500",
  appId: "1:951724032500:web:70b041a7e5ae86a90479a1",
  measurementId: "G-QES170YEML"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();