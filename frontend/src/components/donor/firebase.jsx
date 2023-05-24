import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig={
  apiKey: "AIzaSyB6VJglTXJ2OUAXjiRa9Sivd7TAJfftLy0",
  authDomain: "fir-login-react-8118e.firebaseapp.com",
  projectId: "fir-login-react-8118e",
  storageBucket: "fir-login-react-8118e.appspot.com",
  messagingSenderId: "196638388250",
  appId: "1:196638388250:web:c1c0e83c32f4d07883e1a3",
  measurementId: "G-GMW0G8RGPE"

}

firebase.initializeApp(firebaseConfig);

export default firebase;