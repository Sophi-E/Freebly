import React from 'react';

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
        <input type='file' name='itemImage' id='itemImage' />
      </form>
    </div>
  );
};

export default CreatePost;
