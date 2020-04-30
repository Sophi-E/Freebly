import React from 'react';
import PostContainer from '../../reusables/PostContainer';
import styles from './PostsPage.module.css';

const PostsArray = [
  {
    id: 1,
    imageUrl:
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Wristwatch',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 2,
    imageUrl:
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Camera',
    postDate: '21st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 3,
    imageUrl:
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Strap bag',
    postDate: '5th April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 4,
    imageUrl:
      'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Backpack',
    postDate: '1st March 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 5,
    imageUrl:
      'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Backpack',
    postDate: '5th March 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 6,
    imageUrl:
      'https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Dress shoes',
    postDate: '21st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 7,
    imageUrl:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Sneakers',
    postDate: '7th April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
  {
    id: 8,
    imageUrl:
      'https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Heels',
    postDate: '1st April 2020',
    location: 'Woji Estate, Port Harcourt',
  },
];
const PostsPage = () => {
  return (
    <>
      {/* <div>
        <input type='search' placeholder='search' />
        <button>Filter</button>
      </div> */}
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
    </>
  );
};

export default PostsPage;
