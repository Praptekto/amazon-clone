// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCQQACayjTDmNSN0nVYdIZAuJVwkkbLRd8",
  authDomain: "prap-clone.firebaseapp.com",
  projectId: "prap-clone",
  storageBucket: "prap-clone.appspot.com",
  messagingSenderId: "232229688470",
  appId: "1:232229688470:web:b1bdb3423e02b694dc9eb7",
  measurementId: "G-TEH8HPKYM6"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};  