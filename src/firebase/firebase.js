import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYxD6XYfT1Z0rrHq4hEO7idPLuin8H-FE",
    authDomain: "fir-react-starter-4d09b.firebaseapp.com",
    databaseURL: "https://fir-react-starter-4d09b.firebaseio.com",
    projectId: "fir-react-starter-4d09b",
    storageBucket: "fir-react-starter-4d09b.appspot.com",
    messagingSenderId: "1077045315556",
    appId: "1:1077045315556:web:5f595ef35e704bd65da9f1",
    measurementId: "G-KX0G7M4G2Q"
};
if (!firebase.apps.length) {
    //initializing with the config object
    firebase.initializeApp(firebaseConfig);
}
  
//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };