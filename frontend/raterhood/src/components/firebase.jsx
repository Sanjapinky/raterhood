import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBjjPnlWqDJxV9wEC59zrB6JRU8a5fl02Q",

    authDomain: "raterhood-547b8.firebaseapp.com",

    projectId: "raterhood-547b8",

    storageBucket: "raterhood-547b8.appspot.com",

    messagingSenderId: "290444437143",

    appId: "1:290444437143:web:f9201bcc115b08cef0abd2",

    measurementId: "G-SFJHJYM256"

};
firebase.initializeApp(firebaseConfig);

export  default firebase;