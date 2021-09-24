import firebase from "firebase/app";
import { useObjectVal } from 'react-firebase-hooks/database';
import "firebase/database";

export const useData = (path) =>
  useObjectVal(firebase.database().ref(path));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYgXCK11pLbIih6fb3PTGGRWdE7e4BpCY",
  authDomain: "scheduler-221b7.firebaseapp.com",
  databaseURL: "https://scheduler-221b7-default-rtdb.firebaseio.com",
  projectId: "scheduler-221b7",
  storageBucket: "scheduler-221b7.appspot.com",
  messagingSenderId: "809229492052",
  appId: "1:809229492052:web:31ab66af04ffb2115872c1",
  measurementId: "G-B4HCSG6J42",
};

firebase.initializeApp(firebaseConfig);
