import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEcnzKxe5dPZ3TD85LAf_PKNeLHHNWypI",
    authDomain: "discord-clone-b3e47.firebaseapp.com",
    projectId: "discord-clone-b3e47",
    storageBucket: "discord-clone-b3e47.appspot.com",
    messagingSenderId: "1062560844135",
    appId: "1:1062560844135:web:d5fc3cc5bd30db58b3c7c2",
    measurementId: "G-D0VNS8XM6S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;


