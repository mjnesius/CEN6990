import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyAxyi62I9IhFWGyjexgoWk6ocE0nOLFgPw",
  authDomain: "uwf-empower.firebaseapp.com",
  databaseURL: "https://uwf-empower.firebaseio.com",
  projectId: "uwf-empower",
  storageBucket: "uwf-empower.appspot.com",
  messagingSenderId: "113320420042"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
