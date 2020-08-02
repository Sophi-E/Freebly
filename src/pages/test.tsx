//@ts-nocheck

import React, { useContext, useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { AuthContext } from '../components/Auth';
import { User } from '../datatypes/User';
import * as DataSource from '../services/firestore';

const Test = () => {
  let { currentUser } = useContext<Partial<User>>(AuthContext);
  const db = firebase.firestore();
  const [posts, setPosts] = useState([]);

  //get posts by users
  //let fullDate = firebase.firestore.Timestamp.fromDate(new Date(1590998505486));

  const getUserPost = async () => {
    let userPost = [];
    await db
      .collection('posts')
      .where('postDate', '==', '1590944479139')
      // .where('postDate', '<=', '1590944479139')
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => {
          userPost = [...userPost, { id: doc.id, data: doc.data() }];
        })
      );
    return userPost;
  };

  useEffect(() => {
    const getUserPosts = async () => {
      const userPost = await getUserPost();
      setPosts(userPost);
    };
    getUserPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <p>{post.data.title}</p>
      ))}
    </div>
  );
};

export default Test;
