// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaRLr2OcqGqE9XLsD-wtn3A841rZ5o2WE",
  authDomain: "auth-development-73947.firebaseapp.com",
  projectId: "auth-development-73947",
  storageBucket: "auth-development-73947.appspot.com",
  messagingSenderId: "1032908206504",
  appId: "1:1032908206504:web:b2ef757d6a14543593ed9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider  = new GoogleAuthProvider();

export const SignInWithGoogle = async ()=>{

    try {
    const res = await signInWithPopup(auth, provider)
        console.log(res);
    }catch(err) {
        alert('Error in Signin With Google!');
        console.log(err);
    }

}

export const SignOut = async ()=>{
    const res = await signOut(auth);
    console.log(res);
}
