import firebase from "firebase/app";
import firestore from "firebase/firestore";
import auth from "firebase/auth";
import functions from "firebase/functions";

var config = {
  apiKey: "AIzaSyAxyi62I9IhFWGyjexgoWk6ocE0nOLFgPw",
  authDomain: "uwf-empower.firebaseapp.com",
  databaseURL: "https://uwf-empower.firebaseio.com",
  projectId: "uwf-empower",
  storageBucket: "uwf-empower.appspot.com",
  messagingSenderId: "113320420042"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
