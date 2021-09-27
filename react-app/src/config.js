import firebase from "firebase/compat/app";
 import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAABUYHBEeEcjdMCqL5Zt6JzgEqBmorWh0",
    authDomain: "react-3357e.firebaseapp.com",
    projectId: "react-3357e",
    storageBucket: "react-3357e.appspot.com",
    messagingSenderId: "1017625807192",
    appId: "1:1017625807192:web:5407033cfbbc4e1bed3d2d",
    measurementId: "G-JV3E18B15T"
  });
export const auth = firebaseConfig.auth()
export default firebaseConfig;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAABUYHBEeEcjdMCqL5Zt6JzgEqBmorWh0",
//   authDomain: "react-3357e.firebaseapp.com",
//   projectId: "react-3357e",
//   storageBucket: "react-3357e.appspot.com",
//   messagingSenderId: "1017625807192",
//   appId: "1:1017625807192:web:5407033cfbbc4e1bed3d2d",
//   measurementId: "G-JV3E18B15T"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default analytics;