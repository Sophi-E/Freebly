import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as DataStore from '../services/firestore';
import styled from '@emotion/styled';
import Layout, { StyledContainer } from '../components/layout';
import InputComponent from '../components/FormComponent/InputComponent';
import ImageUploader from '../components/ImageUploader';
import Addfile from '../images/addfile.svg';
import { AuthContext } from '../components/Auth';

const CreatePostContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  .form-div {
    margin-left: 3rem;
  }
  @media screen and (max-width: 966px) {
    flex-direction: column;
    h2 {
      text-align: center;
    }
    .form-div {
      margin: 2em 0;
    }
  }
`;
const IllustrationDiv = styled.div`
  align-self: center;

  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 1em 3em;

  @media screen and (max-width: 664px) {
    width: 100%;
    padding: 1em 0;
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
  userId: '',
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
  const [images, setImages] = useState<Array<string>>([]);
  const { currentUser } = useContext(AuthContext);

  const { title, location, description, shipping } = post;

  const isInvalid =
    title === '' || location === '' || description === '' || shipping === '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      userId: currentUser.uid,
      title,
      location,
      shipping,
      description,
      images,
      postDate: Date.now(),
    };

    const newPost = DataStore.addPost(data);
    console.log(newPost);

    setPost({ ...post, submitted: true });

    //console.log(data);

    history.push('/thank-you');
  };

  return (
    <Layout>
      <StyledContainer>
        <CreatePostContainer>
          <IllustrationDiv>
            <img src={Addfile} alt='add-file-illustration' />
          </IllustrationDiv>
          <div className='form-div'>
            <h2>Create A New Post</h2>
            <FormContainer onSubmit={handleSubmit}>
              <ImageUploader
                onRequestSave={(image: any) =>
                  setImages((prev) => {
                    // so the find function here should disallow
                    // adding the same image mult times. I think
                    return prev.find((img: any) => img.id === image.id)
                      ? [...prev]
                      : [...prev, image];
                  })
                }
                onRequestClear={() => setImages([])}
                defaultFiles={
                  images
                    ? [
                        {
                          source: images,
                          options: {
                            type: 'local',
                          },
                        },
                      ]
                    : []
                }
              />

              <InputComponent
                name='title'
                placeholder='Enter item name'
                inputType='text'
                // label='item Name'
                id='title'
                value={title}
                onChange={handleChange}
              />
              <InputComponent
                name='location'
                placeholder='Enter item location'
                inputType='text'
                // label='Location'
                id='location'
                value={location}
                onChange={handleChange}
              />
              <InputComponent
                name='description'
                placeholder='Enter any info/description about the item'
                inputType='text'
                // label='Description'
                value={description}
                id='description'
                onChange={handleChange}
              />
              <InputComponent
                name='shipping'
                placeholder='Willing to ship items/s if required?'
                inputType='text'
                // label='Shipping available?'
                value={shipping}
                id='shipping'
                onChange={handleChange}
              />

              {/* {post.error === null ? '' : <p>{error?.message}</p>} */}
              <StyledButton disabled={isInvalid}>Submit Post</StyledButton>
            </FormContainer>
          </div>
        </CreatePostContainer>
      </StyledContainer>
    </Layout>
  );
};

export default CreatePost;
