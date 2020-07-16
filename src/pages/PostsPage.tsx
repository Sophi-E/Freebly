import React, { useEffect, useState } from 'react';
import PostContainer from '../components/PostContainer';
import box from '../images/box.jpg';
import * as DataSource from '../services/firestore';
import styled from '@emotion/styled';
import Spinner from '../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import GridContainer from '../components/GridContainer';
import InputComponent from '../components/FormComponent/InputComponent';
const StyledImage = styled.img`
  width: 100%;
  margin: 1em 0;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 40%;
`;
const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await DataSource.getAllPosts();
      //console.log(allPosts);
      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <Layout>
      <StyledImage src={box} alt='Box' />
      <InputWrapper>
        <InputComponent
          name='search'
          placeholder='search by location'
          type='text'
        />
        {/* <InputComponent name='sort' placeholder='sort' type='text' /> */}
      </InputWrapper>
      {posts.length === 0 ? (
        <Spinner />
      ) : (
        <GridContainer>
          {posts.map((post) => (
            <div className='card' key={post.id}>
              <Link to={`/view-posts/${post.id}`}>
                <PostContainer
                  imageUrl={post.data.imageUrl}
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
    </Layout>
  );
};

export default PostsPage;
