// firebase.config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLEW7s8h3I-vLyqgl5n1oVIU7FBHrkOkQ",
  authDomain: "twitter-clone-6e894.firebaseapp.com",
  projectId: "twitter-clone-6e894",
  storageBucket: "twitter-clone-6e894.appspot.com",
  messagingSenderId: "983068835749",
  appId: "1:983068835749:web:df6a465b245255ea5bf24c",
  measurementId: "G-W0RHVP8Q18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
getAnalytics(app);

export { app, db };
