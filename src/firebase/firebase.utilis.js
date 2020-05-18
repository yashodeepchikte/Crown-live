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

export const createUserProfileDoc = async (userAuth, otherData) => {
  if (!userAuth) {
    console.log("Signed out")
    return
  }
  // console.log(userAuth)
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  // console.log(snapshot)
  if (!snapshot.exists){
    const {email, displayName} = userAuth;
    const createdAt = new Date()
    try {
      await userRef.set(
        {
          email,
          displayName,
          createdAt,
          ...otherData
        }
        
      )
    }catch(err){
      console.log("there was an error", err)
    }
  }

return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


