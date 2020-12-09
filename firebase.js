import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCE9Y0S3_hctLNoi-RF3dFNmylBzWYVUUQ",
  authDomain: "carbide-haven-280722.firebaseapp.com",
  databaseURL: "https://carbide-haven-280722.firebaseio.com",
  projectId: "carbide-haven-280722",
  storageBucket: "carbide-haven-280722.appspot.com",
  messagingSenderId: "568715330638",
  appId: "1:568715330638:web:406249a953870587426f1f",
  measurementId: "G-1P4XHWCEML",
};

let mowch;
try {
  mowch = firebase.initializeApp(firebaseConfig);
} catch (err) {}

const fireDb = mowch.database();
// route number
// admin
// headadmin

const fireAuth = firebase.auth();

export { fireDb, fireAuth };
