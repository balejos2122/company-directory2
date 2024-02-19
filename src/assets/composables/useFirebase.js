// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5b2Gak4adq2l_q_e8K_-F40IgKF9K1ag",
  authDomain: "company-directory-b7b7f.firebaseapp.com",
  projectId: "company-directory-b7b7f",
  storageBucket: "company-directory-b7b7f.appspot.com",
  messagingSenderId: "910630473848",
  appId: "1:910630473848:web:e59f70a40ea04136841d8d",
  measurementId: "G-121BX1CP2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);