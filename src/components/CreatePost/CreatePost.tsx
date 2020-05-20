import React from 'react';
import styles from './CreatePost.module.css';
import axios from 'axios';

const CreatePost = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    //@ts-ignore
    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    //@ts-ignore
    console.log(...formData);

    axios({
      method: 'post',
      url: 'http://localhost:5000/posts',
      //@ts-ignore
      data: [...formData],
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <div>
      <form id='postForm' className={styles.postForm} onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <label htmlFor='imageUrl'>Upload Photos:</label>
        <input type='file' name='imageUrl' id='imageUrl' />
        <label htmlFor='title'> Item Name:</label>
        <input type='text' name='title' id='title' />
        <label htmlFor='location'> Location:</label>
        <input type='text' name='location' id='location' />
        <label htmlFor='comment'> Comment:</label>
        <input type='text' name='comment' id='comment' />
        <label htmlFor='shipping'>Free Shipping?</label>
        <input type='text' name='shipping' id='shipping' />

        <button className={styles.postBtn}>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
