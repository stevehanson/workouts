import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyABAEJL3PRe41jVWB3gs782995AGxx_USc",
  authDomain: "workouts-cfabe.firebaseapp.com",
  databaseURL: "https://workouts-cfabe.firebaseio.com",
  storageBucket: "workouts-cfabe.appspot.com",
  messagingSenderId: "1056741898"
};

firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const workoutsRef = rootRef.child('workouts');
//export const timeRef = firebase.database.ServerValue.TIMESTAMP;