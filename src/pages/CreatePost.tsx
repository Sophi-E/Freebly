import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as DataStore from '../services/firestore';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import InputComponent from '../components/FormComponent/InputComponent';

const FormContainer = styled.form`
  border-radius: 5px;
  padding: 1em 3em;
  max-width: 700px;
  margin: 8rem auto;
  h2 {
    padding-bottom: 1em;
    text-align: center;
  }
`;
const StyledButton = styled('button')`
  width: 100%;
  background-color: #6c63ff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: #000;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const initialState = {
  imageUrl: '',
  title: '',
  location: '',
  description: '',
  shipping: '',
  submitted: false,
  error: null,
};

const CreatePost = () => {
  const history = useHistory();
  const [post, setPost] = useState(initialState);
  const {
    imageUrl,
    submitted,
    error,
    title,
    location,
    description,
    shipping,
  } = post;

  const isInvalid =
    title === '' || location === '' || description === '' || shipping === '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      title,
      location,
      shipping,
      description,
      imageUrl,
      postDate: Date.now(),
    };
    const newPost = DataStore.addPost(data);
    setPost({ ...post, submitted: true });
    console.log(data);
    console.log(newPost);
    history.push('/thank-you');
  };

  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Create new post</h2>

        <InputComponent
          name='photo'
          placeholder='photo'
          inputType='file'
          label='Upload Photos'
          id='imageUrl'
          // multiple
          value={imageUrl}
          onChange={handleChange}
        />
        <InputComponent
          name='title'
          placeholder='Enter item name'
          inputType='text'
          label='item Name'
          id='title'
          value={title}
          onChange={handleChange}
        />
        <InputComponent
          name='location'
          placeholder='Enter item location'
          inputType='text'
          label='Location'
          id='location'
          value={location}
          onChange={handleChange}
        />
        <InputComponent
          name='description'
          placeholder='Enter any info/description about the item'
          inputType='text'
          label='Description'
          value={description}
          id='comment'
          onChange={handleChange}
        />
        <InputComponent
          name='shipping'
          placeholder='Willing to ship items/s if required?'
          inputType='text'
          label='Shipping available?'
          value={shipping}
          id='shipping'
          onChange={handleChange}
        />

        {/* {post.error === null ? '' : <p>{error?.message}</p>} */}
        <StyledButton disabled={isInvalid}>Submit Post</StyledButton>
      </FormContainer>
    </Layout>
  );
};

export default CreatePost;
