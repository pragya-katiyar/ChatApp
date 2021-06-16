import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyChOZkUhicJhqcSNVTds477_R0hMAbLxus",
    authDomain: "chat-app-9ea0e.firebaseapp.com",
    projectId: "chat-app-9ea0e",
    storageBucket: "chat-app-9ea0e.appspot.com",
    messagingSenderId: "1007868277010",
    appId: "1:1007868277010:web:631a1fed0f45b2c66503cb"
  }).auth()