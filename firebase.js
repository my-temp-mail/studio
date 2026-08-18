// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBDXnSHJmBqnZd97NCDuLAI6lcjLrdV3m4",
    authDomain: "social-monetization-os.firebaseapp.com",
    projectId: "social-monetization-os",
    storageBucket: "social-monetization-os.firebasestorage.app",
    messagingSenderId: "1041491811329",
    appId: "1:1041491811329:web:e60ef0d23c7d06bc403400"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// Firebase objects ko baqi files ke liye available karna
export {
    app,
    auth,
    db,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp
};