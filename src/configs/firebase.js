import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCDrdOTAOxOWLjJcSACMX5BC1o5aZ7X3dY",
    authDomain: "imoney-c9d57.firebaseapp.com",
    projectId: "imoney-c9d57",
    storageBucket: "imoney-c9d57.appspot.com",
    messagingSenderId: "935613946058",
    appId: "1:935613946058:web:2568ae1308d10ee072fc33",
    measurementId: "G-H5LY8SKED5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectStorage, projectFirestore, timestamp }