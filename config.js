import firebase from "firebase";
require("@firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD626LRIykcTQ8GENQVKdbRn7aj5i0eG7k",
  authDomain: "wily-69612.firebaseapp.com",
  projectId: "wily-69612",
  storageBucket: "wily-69612.appspot.com",
  messagingSenderId: "367883673794",
  appId: "1:367883673794:web:69b3bd1d789c8c85851b5b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
