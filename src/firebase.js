import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBSPgJbQyLQiWADWEkRUKY-zP-R86hOYOM",
    authDomain: "clone-11cd3.firebaseapp.com",
    projectId: "clone-11cd3",
    storageBucket: "clone-11cd3.appspot.com",
    messagingSenderId: "203116672134",
    appId: "1:203116672134:web:67d1a513fb475c51210d07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider }