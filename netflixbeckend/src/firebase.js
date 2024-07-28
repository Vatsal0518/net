// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbKgws3TrBm-GTc7yHLulV1Hf9sjdZ-aA",
  authDomain: "netflix-ba919.firebaseapp.com",
  projectId: "netflix-ba919",
  storageBucket: "netflix-ba919.appspot.com",
  messagingSenderId: "287344180109",
  appId: "1:287344180109:web:f75ae37c979c1389729bc4",
  measurementId: "G-4DRDM81ZN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export const imagedb = storage;