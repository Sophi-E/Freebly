import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import * as DataSource from '../../services/firestore';
//import * as DataSource from '../../services/freebli';

import Spinner from '../../reusables/Spinner/Spinner';

import styles from './PostDetail.module.css';
import Footer from '../../reusables/Footer/Footer';
import Nav from '../../reusables/Nav/Nav';

//@ts-ignore
const PostDetail = ({ match }) => {
  const [post, setPost] = useState<any>({});
  let postId=match.params.id;

    useEffect(() => {
      // Because useEffect doesn't accept asynchronous functions, we have
      //  to define our async function in here, and then call it.
      const findPostById = async (id: string) => {
        const thePost = await DataSource.findPostById(id);
        setPost(thePost)
      }

      findPostById(postId)
    }, [postId]);

  return (
    <>
      <Nav logout='LOGOUT' />
      {console.log(post)===null || !post.hasOwnProperty("id") ? (
        <Spinner />
      ) : (
        <div className={styles.postDetail} id={post.id}>
          <h2>{post.data.title}</h2>
          <img src={post.data.imageUrl} alt='post-pic' />
          <div className={styles.thumbnail}>
            <img src={post.data.imageUrl} alt='post-pic' />
            <img src={post.data.imageUrl} alt='post-pic' />
            <img src={post.data.imageUrl} alt='post-pic' />
            <img src={post.data.imageUrl} alt='post-pic' />
          </div>
          <p>Location: {post.data.location}</p>
          <p>Free shipping: {post.data.shipping}</p>
          <p>Posted on: {post.data.postDate}</p>
          <p>Comment: {post.data.comment}</p>
          <button className={styles.reqBtn}>Request Item</button>
        </div>

      )}
      <Footer />
    </>
  );
};

export default PostDetail;
