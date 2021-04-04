import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBHTUfoDNRhUJPdEubyq2ADvsWvydlDhw",
  authDomain: "twitter-clone-db776.firebaseapp.com",
  databaseURL: "https://twitter-clone-db776-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-db776",
  storageBucket: "twitter-clone-db776.appspot.com",
  messagingSenderId: "274249951720",
  appId: "1:274249951720:web:66dec27b0ac3610e441c5d",
  measurementId: "G-GPZPBNNPBF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
