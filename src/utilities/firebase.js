import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useState, useEffect } from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYgXCK11pLbIih6fb3PTGGRWdE7e4BpCY",
  authDomain: "scheduler-221b7.firebaseapp.com",
  databaseURL: "https://scheduler-221b7-default-rtdb.firebaseio.com",
  projectId: "scheduler-221b7",
  storageBucket: "scheduler-221b7.appspot.com",
  messagingSenderId: "809229492052",
  appId: "1:809229492052:web:31ab66af04ffb2115872c1",
  measurementId: "G-B4HCSG6J42"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const setData = (path, value) => (
  set(ref(database, path), value)
);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      }
    );
  }, [path, transform]);

  return [data, loading, error];
};
