// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC8T0b0GJso5EaFLxcXns8jUVMss27vKm0",
	authDomain: "netflix-clone-8e29c.firebaseapp.com",
	projectId: "netflix-clone-8e29c",
	storageBucket: "netflix-clone-8e29c.appspot.com",
	messagingSenderId: "369181614694",
	appId: "1:369181614694:web:8b0ce88075f5a0965643a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore();
export const auth = getAuth();
