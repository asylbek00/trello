import { initializeApp } from "firebase/app";

console.log(process.env);

const firebaseConfig = {
  apiKey: 'AIzaSyCm796HYLsz44A-jGVZjNQjYB1Q58LRpn4',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_API_ID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
