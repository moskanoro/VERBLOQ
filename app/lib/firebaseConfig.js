// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBINGYhz6bDvHORbuo-IZ6RG0tztg1xGio",
  authDomain: "verbloq-ce3dd.firebaseapp.com",
  projectId: "verbloq-ce3dd",
  storageBucket: "verbloq-ce3dd.appspot.com",
  messagingSenderId: "790482343978",
  appId: "1:790482343978:web:1909da9c1ddf06e5910b53",
  measurementId: "G-LVVVGN595W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);