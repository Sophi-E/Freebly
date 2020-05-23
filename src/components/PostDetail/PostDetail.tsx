import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PostDetail.module.css';

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
    <div className={styles.postDetail}>
      <img src={post.imageUrl} alt='post-pic' />
      <h2>{post.title}</h2>
      <p>Location: {post.location}</p>
      <p>Free shipping: {post.shipping}</p>
      <p>Posted on: {post.postDate}</p>
      <p>Comment: {post.comment}</p>
      <button className={styles.reqBtn}>Request Item</button>
    </div>
  );
};

export default PostDetail;
