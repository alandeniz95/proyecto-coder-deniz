import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./config";

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
