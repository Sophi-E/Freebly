import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as DataStore from '../services/firestore';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import InputComponent from '../components/FormComponent/InputComponent';
import ImageUploader from '../components/ImageUploader';


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
  background-color: #093142;
  color: white;
  padding: 10px 0;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1d3742;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const initialState = {
  images: [],
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
  const [ images, setImages ] = useState<Array<string>>([]);

  const {
    submitted,
    error,
    title,
    location,
    description,
    shipping,
  } = post;

  const isInvalid =
    // images.length === 0 ||
    title === '' ||
    location === '' ||
    description === '' ||
    shipping === '';

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
      images,
      postDate: Date.now(),
    };
    const newPost = DataStore.addPost(data);
    setPost({ ...post, submitted: true });

    //console.log(data);

    //history.push('/thank-you');
  };

  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Create new post</h2>

        <ImageUploader 
        onRequestSave={(image:any) => setImages(prev=>{
          // so the find function here should disallow
          // adding the same image mult times. I think
          return prev.find((img:any) =>img.id === image.id) 
               ? [...prev] 
               : [...prev, image];
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
