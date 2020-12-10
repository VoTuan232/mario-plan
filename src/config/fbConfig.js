import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBJLWNO3rpgFxQegyP6LW7YvPVYhVOB8SE",
  authDomain: "votuan-mario.firebaseapp.com",
  projectId: "votuan-mario",
  storageBucket: "votuan-mario.appspot.com",
  messagingSenderId: "341273657937",
  appId: "1:341273657937:web:e4e4b3283ea91b67e0ae70",
  measurementId: "G-ZG1958YH0M",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
