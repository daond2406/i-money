import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZgYbOQmpYWqteOpqPD56c2STVbcvIiVw",
  authDomain: "imoney-aed52.firebaseapp.com",
  projectId: "imoney-aed52",
  storageBucket: "imoney-aed52.appspot.com",
  messagingSenderId: "933862187653",
  appId: "1:933862187653:web:832aa67cbf6e4d6d99bfec",
  measurementId: "G-ENRLNEWR88",
};

const app = initializeApp(firebaseConfig);
const projectFireStore = getFirestore(app);
const projectAuth = getAuth(app);
const timestamp = getFirestore(app).Timestamp;

export { projectFireStore, projectAuth, timestamp };
