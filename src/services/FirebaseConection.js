import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCa0LOkoovB4qyOly6-OhcP5nXSq-ylBO4",
  authDomain: "sistema-4e984.firebaseapp.com",
  projectId: "sistema-4e984",
  storageBucket: "sistema-4e984.appspot.com",
  messagingSenderId: "736217704032",
  appId: "1:736217704032:web:bf220f3cd883ced2078505",
  measurementId: "G-75WDTTLNYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app