import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9cP0CYiDhosiP1lZYUuLfX2-Sib29V5M",
  authDomain: "crwn-clothing-db-303b1.firebaseapp.com",
  projectId: "crwn-clothing-db-303b1",
  storageBucket: "crwn-clothing-db-303b1.appspot.com",
  messagingSenderId: "977475592005",
  appId: "1:977475592005:web:58e55e3a037bb54b63e82c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWitheGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuto,
  additionalInformation = {}
) => {
  if (!userAuto) return;

  const userDocRef = doc(db, "users", userAuto.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data does not exists -> create/set the document with data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuto;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //if user data exists -> return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return signInWithEmailAndPassword(auth, email, password);
  };
