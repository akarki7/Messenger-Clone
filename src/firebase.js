import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC60WQRIoaPufTdjKtD220bToyHnZsz1tQ",
    authDomain: "messenger-clone-446ce.firebaseapp.com",
    projectId: "messenger-clone-446ce",
    storageBucket: "messenger-clone-446ce.appspot.com",
    messagingSenderId: "210490593006",
    appId: "1:210490593006:web:65c406dc4f2bc6c844adff",
    measurementId: "G-WE3H50JT75"
});

const db=firebaseApp.firestore();

export default db;