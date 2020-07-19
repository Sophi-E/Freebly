// import React from 'react';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import { Redirect } from 'react-router-dom';

const freebliConfig = {
  apiKey: 'AIzaSyC07b5BHcNWuUGd4bkMA1P7a-bjrewaUVQ',
  authDomain: 'freebly.firebaseapp.com',
  databaseURL: 'https://freebly.firebaseio.com',
  projectId: 'freebly',
  storageBucket: 'freebly.appspot.com',
  messagingSenderId: '681902899769',
  appId: '1:681902899769:web:1364a22155ac42853c43e8',
};
const tobyDevConfig = {
  apiKey: 'AIzaSyAWo0ZWObKQYijaeWRvT5ygQeDSR21rnxk',
  authDomain: 'sharing-stuff-3ccd8.firebaseapp.com',
  databaseURL: 'https://sharing-stuff-3ccd8.firebaseio.com',
  projectId: 'sharing-stuff-3ccd8',
  storageBucket: 'sharing-stuff-3ccd8.appspot.com',
  messagingSenderId: '313621377942',
  appId: '1:313621377942:web:ea5f0002ff393bdecc63b7',
};

export const Config = firebase.initializeApp(
  tobyDevConfig
  // freebliConfig
);

const db = firebase.firestore();

// Used for the file upload bits...
export const storage = firebase.storage();

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

export const signInViaGoogle = (callback) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(callback)
    .catch((error) => console.error(error));
};

export const signOut = (callback) => {
  console.log(callback);
  return firebase.auth().signOut().then(callback);
};

export const getAllPosts = async () => {
  let allPosts = [];

  await db
    .collection('posts')
    .get()
    .then((querySnapshot) =>
      querySnapshot.forEach((doc) => {
        allPosts = [...allPosts, { id: doc.id, data: doc.data() }];
      })
    );
  return allPosts;
};

export const findPostById = async (id) => {
  let result;
  await db
    .collection('posts')
    .doc(id)
    .get()
    .then((doc) => {
      result = { id, data: doc.data() };
    });
  return result;
};

export const addPost = async (dataObj) => {
  // do this to create a unique id for this post
  const newPostRef = await db.collection('posts').add(dataObj);
  return newPostRef.id;
};

export const updatePost = (postId, dataObj) => {
  db.collection('posts').doc(postId).update(dataObj);
};

export const deletePost = (postId) => {
  db.collection('posts').doc(postId).remove();
};
