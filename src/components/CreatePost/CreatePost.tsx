import React from 'react';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  return (
    <div>
      <form className={styles.postForm}>
        <h1>Create Post</h1>
        <label htmlFor='itemName'> Item Name:</label>
        <input type='text' name='itemName' />
        <label htmlFor='location'> Location:</label>
        <input type='text' name='location' />
        <label htmlFor='upload'>Upload Photos:</label>
        <input type='file' name='itemImage' id='itemImage' />
        <label htmlFor='itemDescription'>Description</label>
        <textarea
          name='description'
          id='description'
          cols={30}
          rows={10}
        ></textarea>
        <label htmlFor='comment'> Comment:</label>
        <input type='text' name='comment' />
        <label htmlFor='shipping'>
          Free Shipping?
          <input type='text' name='shipping' id='shipping' />
        </label>
        <button className={styles.postBtn}>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
