import React from 'react';
import PostContainer from '../../reusables/PostContainer';
import styles from './PostsPage.module.css';

const PostsPage = () => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.card}>
        <PostContainer
          title='Wristwatch'
          postDate='1st April 2020'
          location='Woji Estate, Port Harcourt'
        />
      </div>

      <div className={styles.card}>
        <img src='https://via.placeholder.com/200' alt='' />
        <PostContainer
          title='Wristwatch'
          postDate='1st April 2020'
          location='Woji Estate, Port Harcourt'
        />
      </div>

      <div className={styles.card}>
        <img src='https://via.placeholder.com/200' alt='' />
        <PostContainer
          title='Wristwatch'
          postDate='1st April 2020'
          location='Woji Estate, Port Harcourt'
        />
      </div>
      <div className={styles.card}>
        <img src='https://via.placeholder.com/200' alt='' />
        <PostContainer
          title='Wristwatch'
          postDate='1st April 2020'
          location='Woji Estate, Port Harcourt'
        />
      </div>
    </div>
  );
};

export default PostsPage;
