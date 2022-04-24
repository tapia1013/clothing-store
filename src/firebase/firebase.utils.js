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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if it doesnt exists return dont do anything
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  // console.log('snapShot: ', snapShot);

  // create using userRef
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    // if there isnt any data create a new user using the data from our user auth
    try {
      // .set is the create method
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
}


firebase.initializeApp(config)



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger google pop up when we use google auth provider with authentication and signin
provider.setCustomParameters({ prompt: 'select_account' })




export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;

