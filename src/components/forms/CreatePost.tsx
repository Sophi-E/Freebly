import React from 'react';
import styles from '../forms/formStyles.module.css';

const CreatePost = () => {
  return (
    <div>
      <h1>Create Post</h1>
      <form>
        <label htmlFor='itemName'> Item Name:</label>
        <input type='text' name='itemName' />
        <label htmlFor='location'> Location:</label>
        <input type='text' name='location' />
        <label htmlFor='upload'>Upload Photos:</label>
      </form>
    </div>
  );
};

export default CreatePost;
