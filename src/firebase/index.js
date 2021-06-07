import firebase from "firebase";
import {app} from "./config"



export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
