import React, { useState } from 'react';
import styles from './CreatePost.module.css';
// import axios from 'axios';
import * as DataStore from '../../services/firestore';
import Nav from '../../reusables/Nav/Nav';
import Footer from '../../reusables/Footer/Footer';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [shipping, setShipping] = useState('');
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      title,
      location,
      shipping,
      comment,
      imageUrl,
      postDate: new Date().toLocaleDateString(),
    };
    const newPost = DataStore.addPost(data)
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:5000/posts',
    //   data: data,
    // })
    console.log(newPost);
    setComment('');
    setImageUrl('');
    setLocation('');
    setTitle('');
    setShipping('');
  };
  return (
    <div>
      <Nav logout='LOGOUT' />
      <div className={styles.formContainer}>
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
      <Footer />
    </div>
  );
};

export default CreatePost;

