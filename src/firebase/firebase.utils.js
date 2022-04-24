// newer version of firebase needs the /compat/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyDSlmMQimpiRPX0-UKNcIwm6A6hi3Q-dbg",
  authDomain: "crowns-db-104d8.firebaseapp.com",
  projectId: "crowns-db-104d8",
  storageBucket: "crowns-db-104d8.appspot.com",
  messagingSenderId: "498830161395",
  appId: "1:498830161395:web:dff1c98cfde2d13ab68e86",
  measurementId: "G-3TCVX8Z69G"
};


firebase.initializeApp(config)



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger google pop up when we use google auth provider with authentication and signin
provider.setCustomParameters({ prompt: 'select_account' })




export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;

