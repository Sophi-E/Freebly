import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const Config = firebase.initializeApp({
  apiKey: 'AIzaSyC07b5BHcNWuUGd4bkMA1P7a-bjrewaUVQ',
  authDomain: 'freebly.firebaseapp.com',
  databaseURL: 'https://freebly.firebaseio.com',
  projectId: 'freebly',
  storageBucket: 'freebly.appspot.com',
  messagingSenderId: '681902899769',
  appId: '1:681902899769:web:1364a22155ac42853c43e8',
});

const db = firebase.firestore();

export const signInAnonymously = () => {
  return firebase
    .auth()
    .signInAnonymously()
    .then((result) => result.user);
};

export const registerViaEmail = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => result.user)
    .catch((error) => console.error(error));
};

export const signInViaEmail = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => result.user)
    .catch((error) => console.error(error));
};

export const signInViaGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => result.user)
    .catch((error) => console.error(error));
};

export const signOut = () => {
  return firebase.auth().signOut();
};

export const getAllPosts = () => {
  return db
    .collection('posts')
    .get()
    .then((querySnapshot) => querySnapshot);
};

export const addPost = (dataObj) => {
  // do this to create a unique id for this post
  const newPostRef = db.collection('posts').push();
  newPostRef.set(dataObj);
  return newPostRef;
};

export const updatePost = (postId, dataObj) => {
  db.collection('posts').doc(postId).update(dataObj);
};

export const deletePost = (postId) => {
  db.collection('posts').doc(postId).remove();
};
