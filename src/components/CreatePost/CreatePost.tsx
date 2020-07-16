import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './CreatePost.module.css';
import * as DataStore from '../../services/firestore';
import Nav from '../../reusables/Nav/Nav';
import Footer from '../../reusables/Footer/Footer';


import ImageUploader from '../ImageUploader';

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [shipping, setShipping] = useState('');
  const [comment, setComment] = useState('');

  const [ images, setImages ] = useState<Array<string>>([]);


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
      images,
      postDate: Date.now(),
    };
    const newPost = DataStore.addPost(data);
    console.log(data);
    console.log(newPost);

    history.push('/thank-you');
  };

  return (
    <div>
      <Nav logout='LOGOUT' logoutCallback={handleLogout} />
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Create new post</h2>
        <form id='postForm' className={styles.postForm} onSubmit={handleSubmit}>
          {/* <h1>Create Post</h1> */}
          <ImageUploader 
            onRequestSave={(id:string) => setImages(prev=>{
              return prev.includes(id) 
                   ? [...prev] 
                   : [...prev, id];
            })}
            onRequestClear={() =>setImages([]) }
            defaultFiles={
              images
                ? [{
                  source: images,
                  options: {
                    type: 'local'
                  }
                }]
                : []
            }
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
