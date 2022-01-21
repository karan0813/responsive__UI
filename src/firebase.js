import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAIu0uVpDUj3gDD7TN61THN4zziuOQMYVQ",
    authDomain: "ran0813-e84cf.firebaseapp.com",
    projectId: "ran0813-e84cf",
    storageBucket: "ran0813-e84cf.appspot.com",
    messagingSenderId: "1071778469921",
    appId: "1:1071778469921:web:b621d6855cd92ada8feb60",
    measurementId: "G-3XHFV16GSV"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth}
  