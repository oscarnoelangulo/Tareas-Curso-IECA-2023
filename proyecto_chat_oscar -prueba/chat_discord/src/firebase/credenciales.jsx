// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE_eFsu4F_v5gTrZBcjGWXNr1B0ys1hjg",
  authDomain: "chatgpt-eb624.firebaseapp.com",
  projectId: "chatgpt-eb624",
  storageBucket: "chatgpt-eb624.appspot.com",
  messagingSenderId: "262829322124",
  appId: "1:262829322124:web:17c8eb4dcd0a48195fb0a9",
  measurementId: "G-71RT3CXDQR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;