import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, getRedirectResult, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-xnsLzuRvwYSDHPbgvDyQ_FQSqYFy03s",
    authDomain: "konjam.firebaseapp.com",
    projectId: "konjam",
    storageBucket: "konjam.firebasestorage.app",
    messagingSenderId: "122231426542",
    appId: "1:122231426542:web:e8be1544609e271d6592ff",
    measurementId: "G-B7GL8CQ7BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Set Auth Persistence to LOCAL (default, but explicit helps with some storage partitioning issues)
setPersistence(auth, browserLocalPersistence).catch(e => console.error("Persistence failed:", e));

export { auth, db, provider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, getRedirectResult, doc, setDoc, getDoc, onSnapshot };
