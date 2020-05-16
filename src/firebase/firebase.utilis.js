import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBD11QGPjmfTqaUCSDO21-fXCxu_mB-aDg",
  authDomain: "crown-db-9613c.firebaseapp.com",
  databaseURL: "https://crown-db-9613c.firebaseio.com",
  projectId: "crown-db-9613c",
  storageBucket: "crown-db-9613c.appspot.com",
  messagingSenderId: "434431003266",
  appId: "1:434431003266:web:b6db22e7756c500310429b",
  measurementId: "G-51LVS28R9E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;