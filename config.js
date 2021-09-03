import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDr9pd_9W6S58ozQLy0r8myZ6iBXrE05lo",
    authDomain: "votingapp-c6879.firebaseapp.com",
    databaseURL: "https://votingapp-c6879-default-rtdb.firebaseio.com",
    projectId: "votingapp-c6879",
    storageBucket: "votingapp-c6879.appspot.com",
    messagingSenderId: "259496633133",
    appId: "1:259496633133:web:36e54bb16301702d0829a4",
    measurementId: "G-9EN150H827"
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();