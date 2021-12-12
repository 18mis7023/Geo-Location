import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAxvX3mIB99cZUGILSpnz53vQbb_1XdNuI",
    authDomain: "vtrack-dcb0b.firebaseapp.com",
    databaseURL: "https://vtrack-dcb0b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vtrack-dcb0b",
    storageBucket: "vtrack-dcb0b.appspot.com",
    messagingSenderId: "723927070090",
    appId: "1:723927070090:web:8596fe689fc602c922c473",
    measurementId: "G-RTNVYGDF2F"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;