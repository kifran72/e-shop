import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW0eu4lMSDqAjhdWTbPiuD8ISC23p5FG8",
  authDomain: "test-7b8b7.firebaseapp.com",
  databaseURL:
    "https://test-7b8b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-7b8b7",
  storageBucket: "test-7b8b7.appspot.com",
  messagingSenderId: "1007666781121",
  appId: "1:1007666781121:web:5574b5b43e0d15599b6d40",
  measurementId: "G-21T5FWKKN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
