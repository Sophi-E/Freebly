import React, { useEffect, useState } from 'react';
import PostContainer from '../components/PostContainer';
import giftBox from '../images/gift-box.svg';
import * as DataSource from '../services/firestore';
import styled from '@emotion/styled';
import Spinner from '../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Layout, { StyledContainer } from '../components/layout';
import GridContainer from '../components/GridContainer';
import InputComponent from '../components/FormComponent/InputComponent';
import { StyledImage } from './Home';

const InputWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 1em 0;
  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  text-align: center;
`;
const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await DataSource.getAllPosts(50);

      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <Layout>
      <StyledContainer>
        {/* <ImageContainer>
          <StyledImage src={giftBox} alt='Box' />
        </ImageContainer> */}
        <InputWrapper>
          <InputComponent
            name='search'
            placeholder='search by location'
            inputType='text'
            id='search'
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </InputWrapper>
        {posts.length === 0 ? (
          <Spinner />
        ) : (
          <GridContainer>
            {posts.map((post) => (
              <div className='card' key={post.id}>
                <Link to={`/view-posts/${post.id}`}>
                  <PostContainer
                    imageUrl={
                      post.data.images
                        ? post.data.images[0].url
                        : post.data.imageUrl
                        ? post.data.imageUrl
                        : null
                    }
                    title={post.data.title}
                    postDate={new Date(post.data.postDate).toLocaleDateString()}
                    location={post.data.location}
                    shipping={post.data.shipping}
                  />
                </Link>
              </div>
            ))}
          </GridContainer>
        )}
      </StyledContainer>
    </Layout>
  );
};

export default PostsPage;
