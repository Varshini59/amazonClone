import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfbHk5gCoIU-dTUih_38kHIaIGoZ_vm0g",
  authDomain: "clone-1a125.firebaseapp.com",
  projectId: "clone-1a125",
  storageBucket: "clone-1a125.appspot.com",
  messagingSenderId: "932527754606",
  appId: "1:932527754606:web:6cac771144355882ca457f",
  measurementId: "G-64HHYQ8CCC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
