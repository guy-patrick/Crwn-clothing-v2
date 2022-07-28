// Import functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO4ZDb0eyGl6F1mTR4m4ELSLOkn6rNmAs",
  authDomain: "crwn-clothing-db-77cc9.firebaseapp.com",
  projectId: "crwn-clothing-db-77cc9",
  storageBucket: "crwn-clothing-db-77cc9.appspot.com",
  messagingSenderId: "628717750366",
  appId: "1:628717750366:web:8127408ce539e108d40ccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};
