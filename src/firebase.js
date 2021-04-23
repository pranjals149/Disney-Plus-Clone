import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB_WpNnGZ_41dNG38O-FyDvj6_xI3qxXGQ",
    authDomain: "disney-plus-297a1.firebaseapp.com",
    projectId: "disney-plus-297a1",
    storageBucket: "disney-plus-297a1.appspot.com",
    messagingSenderId: "373460037369",
    appId: "1:373460037369:web:b73941a0f792f3233dfc28",
    measurementId: "G-VR1G8F91J0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;