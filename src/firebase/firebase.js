// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUFI4_bmyIyEpb77XOVyuECWzqqNkPE3w",
  authDomain: "e-commerce-app-67075.firebaseapp.com",
  projectId: "e-commerce-app-67075",
  storageBucket: "e-commerce-app-67075.appspot.com",
  messagingSenderId: "106807851236",
  appId: "1:106807851236:web:4622f604dc53e65306d4f1"
};

// Initialize Firebase
const app = getApp.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;