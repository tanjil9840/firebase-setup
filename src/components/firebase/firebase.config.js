// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1fJMWZMIzy2WCs29i3qCYhYiFam7Lcbk",
  authDomain: "auth-moha-milon-5dc88.firebaseapp.com",
  projectId: "auth-moha-milon-5dc88",
  storageBucket: "auth-moha-milon-5dc88.appspot.com",
  messagingSenderId: "143732147253",
  appId: "1:143732147253:web:ee4af5129ed48659b9dd7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;