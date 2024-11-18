// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtRDj8J6Lv5aU5etQLRkBGBSXk61E6kw",
  authDomain: "firealert-5b1ce.firebaseapp.com",
  projectId: "firealert-5b1ce",
  storageBucket: "firealert-5b1ce.appspot.com",
  messagingSenderId: "106711406673",
  appId: "1:106711406673:web:ba89ea3658621ce73d0070"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);