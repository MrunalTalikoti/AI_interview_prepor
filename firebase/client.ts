import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA-0fZgvB_ipxIeWHwm13U-qWWR1yXCxfU",
    authDomain: "interprep-9f23c.firebaseapp.com",
    projectId: "interprep-9f23c",
    storageBucket: "interprep-9f23c.firebasestorage.app",
    messagingSenderId: "247733403121",
    appId: "1:247733403121:web:1722d53af1a0cd3fd09850",
    measurementId: "G-ZPFFBGZ36F"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);