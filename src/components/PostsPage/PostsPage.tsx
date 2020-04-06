import React from 'react';
import PostContainer from '../../reusables/PostContainer';
import styles from './PostsPage.module.css';

const PostsArray = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/200',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
];
const PostsPage = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='search' />
        <button>Filter</button>
      </div>
      <div className={styles.postContainer}>
        {PostsArray.map((post) => (
          <div className={styles.card} key={post.id}>
            <PostContainer
              imageUrl={post.imageUrl}
              title={post.title}
              postDate={post.postDate}
              location={post.location}
            />
          </div>
        ))}
      </div>
      <p className={styles.copyright}>@ copyright 2020</p>
    </>
  );
};

export default PostsPage;
