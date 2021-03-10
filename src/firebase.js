import firebase from "firebase/app";
import "firebase/firebase-firestore";

import  { firebaseConfig } from "@/config/firebase.config"

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }