import React from 'react';
import PostContainer from '../../reusables/PostContainer';
import styles from './PostsPage.module.css';

const PostsArray = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt'
  },
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt'
  },
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt'
  },
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt'
  }
];
const PostsPage = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='search' />
      </div>
      <div className={styles.postContainer}>
        {PostsArray.map(post => (
          <div className={styles.card}>
            <PostContainer
              imageUrl={post.imageUrl}
              title={post.title}
              postDate={post.postDate}
              location={post.location}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsPage;
