// import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// import { removeListener } from 'process';
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
// const tobyDevConfig = {
//   apiKey: 'AIzaSyAWo0ZWObKQYijaeWRvT5ygQeDSR21rnxk',
//   authDomain: 'sharing-stuff-3ccd8.firebaseapp.com',
//   databaseURL: 'https://sharing-stuff-3ccd8.firebaseio.com',
//   projectId: 'sharing-stuff-3ccd8',
//   storageBucket: 'sharing-stuff-3ccd8.appspot.com',
//   messagingSenderId: '313621377942',
//   appId: '1:313621377942:web:ea5f0002ff393bdecc63b7',
// };

export const Config = firebase.initializeApp(
  //tobyDevConfig
  freebliConfig
);

export const db = firebase.firestore();

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

export const signInViaGoogle = (callback = () => {}) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /****
       * Changing here - want to modify the user object returned.
       *   Probably create a custom User object, I think, and simply
       *   compose a class with that functionality? I dunno. I'll
       *   fake it. That always works well.
       */

      return callback(result);
    })
    .catch((error) => console.error(error));
};

export const signOut = (callback = () => {}) => {
  console.log(callback);
  return firebase.auth().signOut().then(callback);
};

// shortcut references to db endpoints
export const posts = () => db.collection('posts');
export const post = (postId) => db.collection('posts').doc(postId);
export const replies = (postId) =>
  db.collection('posts').doc(postId).collection('replies');
export const reply = (postId) => (replyId) =>
  db.collection('posts').doc(postId).collection('replies').doc(replyId);

export const getAllPosts = async (limit) => {
  let allPosts = [];

  await db
    .collection('posts')
    .orderBy('postDate', 'desc')
    .limit(limit)
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
  const user =
    firebase.auth().currentUser ||
    JSON.parse(localStorage.getItem('currentUser'));
  await db
    .collection('posts')
    .doc(id)
    .get()
    .then((doc) => {
      result = { id, data: doc.data() };
    });
  /****
   * Last, we want to append the replies. If the user is
   *  the OP, get all replies. If the user posted a reply,
   *  we get *that* reply, and a count of all replies. If
   *  the user is neither of these, we just get the count
   *  of replies.
   */
  await getAllRepliesFor(id).then((replies) => {
    if (user && user.uid === result.data.userId) {
      result = {
        ...result,
        replies: [...replies],
        totalReplies: replies.length,
      };
    } else if (
      user &&
      replies.filter((reply) => reply.data.userId === user.uid).length === 1
    ) {
      result = {
        ...result,
        replies: replies.filter((reply) => reply.data.userId === user.uid),
        totalReplies: replies.length,
      };
    } else {
      result = { ...result, replies: [], totalReplies: replies.length };
    }
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

/****
 * Later on, like version two, I'd like to make a Post object.
 * Using that, we'd simply create a new post and either pass
 * in an object to create a new one, or pass in a uid to find
 * an existing one.
 *
 * The Post class should handle the save(), read(), and delete()
 *   in itself. Additionally, we could attach methods for children
 *   in there. For example:
 *
 * // to get an existing post...
 * const post = new Post(posts.where({"uid", "===", uid});
 *
 * // to update a property on that post
 * post.set({shipping: false}) // or something similar, doing a setState
 *                             // kind of thing
 * post.save();
 * const replies = post.replies;
 * // or even
 * const {replies} = post; // to deconstruct the replies property.
 *
 * that would also let us do things to create a NEW post:
 * const post = new Post({
 *   title,
 *   description,
 *   userId,
 *   images
 * }).save();
 *
 * // I think the mechanism would be to check if a post HAS a uid
 *    assigned and, if not, then it would be a "create this post"
 *    rather than an update. But a simplified interface for each
 *
 */

export const getAllRepliesFor = async (postUid) => {
  let allReplies = [];
  await replies(postUid)
    .orderBy('postDate', 'asc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allReplies = [...allReplies, { id: doc.id, data: doc.data() }];
      });
    })
    .catch((err) => console.log(err.message));
  return allReplies;
};

export const addReply = (postId) => async (dataObj) => {
  const replyReference = await replies(postId).add(dataObj);

  await replyReference.update({
    postDate: firebase.firestore.FieldValue.serverTimestamp(),
  });
  return replyReference.id;
};

export const editReply = (postId) => async (replyId, updateObject) => {
  await reply(postId)(replyId).update(updateObject);
};

export const deleteReply = (postId) => (replyId) => {
  return reply(postId)(replyId).remove();
};
