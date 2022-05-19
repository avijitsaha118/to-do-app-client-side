// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbrZq8fp58J2v6Y4SJECkKTTUP9f4EIIA",
    authDomain: "to-do-app-340b4.firebaseapp.com",
    projectId: "to-do-app-340b4",
    storageBucket: "to-do-app-340b4.appspot.com",
    messagingSenderId: "862634341618",
    appId: "1:862634341618:web:2873ca97d6b69355428c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;