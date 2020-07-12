import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CreatePost.module.css';
import * as DataStore from '../../services/firestore';

import Footer from '../../components/Footer';
import Layout from '../../components/layout';

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [shipping, setShipping] = useState('');
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleLogout = () => {
    history.push('/');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      title,
      location,
      shipping,
      comment,
      imageUrl,
      postDate: Date.now(),
    };
    const newPost = DataStore.addPost(data);
    console.log(data);
    console.log(newPost);

    history.push('/thank-you');
  };

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Create new post</h2>
        <form id='postForm' className={styles.postForm} onSubmit={handleSubmit}>
          {/* <h1>Create Post</h1> */}
          <label htmlFor='imageUrl'>Upload Photos:</label>
          <input
            type='file'
            name='imageUrl'
            id='imageUrl'
            multiple
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <label htmlFor='title'> Item Name:</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Enter Item Name'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='location'> Location:</label>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Enter Item Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor='comment'> Comment:</label>
          <input
            type='text'
            name='comment'
            id='comment'
            placeholder='Enter any comment/info about the item'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <label htmlFor='shipping'>Free Shipping?</label>
          <input
            type='text'
            name='shipping'
            id='shipping'
            placeholder='Willing to pay for shipping fees if applicable?'
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
          />

          <button className={styles.postBtn}>Submit Post</button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
