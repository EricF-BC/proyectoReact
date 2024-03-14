import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJnzd85BVB4lF8Fku55Hz8MyCxFlx8svg",
  authDomain: "reactproject-9f304.firebaseapp.com",
  projectId: "reactproject-9f304",
  storageBucket: "reactproject-9f304.appspot.com",
  messagingSenderId: "105617642014",
  appId: "1:105617642014:web:e9150b63430f4d3d24940f"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)