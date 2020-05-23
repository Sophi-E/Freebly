import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PostDetail.module.css';
import Footer from '../../reusables/Footer/Footer';
import Nav from '../../reusables/Nav/Nav';

//@ts-ignore
const PostDetail = ({ match }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts?id=${match.params.id}`)
      .then((res) => {
        setPost(res.data[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const [post, setPost] = useState<any>({});
  console.log(post);
  return (
    <>
      <Nav login='Logout' />
      <div className={styles.postDetail}>
        <h2>{post.title}</h2>
        <img src={post.imageUrl} alt='post-pic' />
        <div className={styles.thumbnail}>
          <img src={post.imageUrl} alt='post-pic' />
          <img src={post.imageUrl} alt='post-pic' />
          <img src={post.imageUrl} alt='post-pic' />
          <img src={post.imageUrl} alt='post-pic' />
        </div>
        <p>Location: {post.location}</p>
        <p>Free shipping: {post.shipping}</p>
        <p>Posted on: {post.postDate}</p>
        <p>Comment: {post.comment}</p>
        <button className={styles.reqBtn}>Request Item</button>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
