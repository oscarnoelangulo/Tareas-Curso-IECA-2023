// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Nqf-19V8cDBMrRmUIQoquh_J4RdmN0I",
  authDomain: "fakestore-talentotech.firebaseapp.com",
  projectId: "fakestore-talentotech",
  storageBucket: "fakestore-talentotech.appspot.com",
  messagingSenderId: "916796456061",
  appId: "1:916796456061:web:5c7ba6dc7642804359c514",
  measurementId: "G-WVT4Y7ZE9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
