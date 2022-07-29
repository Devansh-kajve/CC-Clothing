import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/database';

const Config = {
    apiKey: "AIzaSyBlH3d7BDUBzEznXZM1_rXscn-0vO3GnX8",
    authDomain: "crwn-db-bba92.firebaseapp.com",
    projectId: "crwn-db-bba92",
    storageBucket: "crwn-db-bba92.appspot.com",
    messagingSenderId: "211878191785",
    appId: "1:211878191785:web:17c33b84c4257c64f0bfb8"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = app.firestore();
signInWithPopup(auth, provider)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;