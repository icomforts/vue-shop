import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCATZiZROZGJ_WoNfcekTKMtek8aMGVrs0",
  authDomain: "vue-shop-65048.firebaseapp.com",
  databaseURL: "https://vue-shop-65048.firebaseio.com",
  projectId: "vue-shop-65048",
  storageBucket: "vue-shop-65048.appspot.com",
  messagingSenderId: "401934269274",
  appId: "1:401934269274:web:6d3d9f7f42ee4992bb5163",
  measurementId: "G-E3F1LECNMY"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();
export {
  fb,
  db
}