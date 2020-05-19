import React from 'react';
import styles from './CreatePost.module.css';
import axios from 'axios';

//@ts-ignore

const CreatePost = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // let postForm = document.getElementById('postForm');
    //@ts-ignore
    // let formData = new FormData(postForm);
    const data = new FormData(e.target);
    axios
      .post('http://localhost:5000/posts', {
        data: data,
        headers: { 'content-type': 'multipart/form-data' },
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
        <label htmlFor='title'> Item Name:</label>
        <input type='text' name='title' id='title' />
        <label htmlFor='location'> Location:</label>
        <input type='text' name='location' id='location' />
        <label htmlFor='imageUrl'>Upload Photos:</label>
        <input type='file' name='imageUrl' id='imageUrl' />
        <label htmlFor='itemDescription'>Description</label>
        <textarea
          name='description'
          id='description'
          cols={30}
          rows={10}
        ></textarea>
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
