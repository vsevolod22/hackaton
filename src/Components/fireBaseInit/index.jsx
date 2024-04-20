// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_pQCNBEs-8zB11kRhTQgZt12866wnKE",
  authDomain: "hacka-fbe52.firebaseapp.com",
  projectId: "hacka-fbe52",
  storageBucket: "hacka-fbe52.appspot.com",
  messagingSenderId: "930995595343",
  appId: "1:930995595343:web:30efc62baf6574d770e23a",
  measurementId: "G-RPP3ZVK4GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    // Этот блок кода будет выполнен после успешного входа
    const user = result.user;
    console.log(user);
  })
  .catch((error) => {
    // Обработка ошибок входа
    console.error(error);
  });