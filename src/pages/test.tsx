import React, { useState, useEffect } from 'react';
import * as DataSource from '../services/firestore';
import { Link } from 'react-router-dom';
import deliveries from '../images/deliveries.svg';
import ease from '../images/ease.svg';
import value from '../images/value.svg';
import recycle from '../images/recycle.svg';
import circulate from '../images/recirculation.png';
import gift from '../images/giving-gift.png';
import online from '../images/online.png';
import Layout, { StyledContainer } from '../components/layout';
import styled from '@emotion/styled';
import PostContainer from '../components/PostContainer';
import Spinner from '../components/Spinner/Spinner';
import GridContainer from '../components/GridContainer';

const HomeContainer = styled.div`
  padding: 3rem 0;
  a {
    text-decoration: none;
    color: #000;
  }
  h3 {
    text-align: center;
  }
  /* .wrapper {
    margin: 4em 0;
  } */
  .row-1 {
    background: #f4f3ff;
    padding: 3em 0;
  }
  .row-2 {
    background: #e9e7ff;
    padding: 3em 0;
  }
`;
const HeaderDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  .bio {
    width: 400px;
    align-self: center;
    text-align: left;

    button {
      background: linear-gradient(79.46deg, #302f55 37.36%, #00b213 105.52%);
      color: #fff;
      padding: 10px;
      width: 100%;
      font-weight: bold;
      border-radius: 15px;
      border: none;
    }
  }

  @media screen and (max-width: 966px) {
    flex-direction: column-reverse;
    .bio {
      width: 100%;
      align-self: flex-start;
      margin-top: 1em;
    }
  }
  @media screen and (max-width: 640px) {
    .bio {
      text-align: center;
      margin-top: 0;
    }
  }
`;

export const StyledImage = styled.img`
  /* margin: 1.5em auto; */
  /* width: 100%; */
  @media screen and (min-width: 1024px) {
    margin-left: 4em;
    /* max-width: 800px;
    max-height: 600px; */
  }
`;

const BlurbWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  /* justify-content: space-between; */

  .blurb-img-container {
    max-width: 500px;
    max-height: 400px;

    img {
      width: 100%;
    }
  }

  .blurb-text {
    align-self: center;
    max-width: 400px;
    padding: 0 1em;
  }

  h2 {
    text-decoration: underline;
    font-weight: bold;
    color: #8f5c22;
  }
  p {
    padding: 0.5em 0;
  }

  @media screen and (max-width: 664px) {
    /* text-align: center; */
    flex-direction: column;

    div {
      padding: 1em;
    }
  }
`;
const Test: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await DataSource.getAllPosts(8);
      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <Layout>
      <HomeContainer>
        <StyledContainer>
          <HeaderDiv>
            <div className='bio'>
              <h1>Lorem ipsum lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing enim quisque hendrerit sagittis ultrices nisi magna
                gravida. Non quis ut dictumst in duis
              </p>
              <button>Get Started</button>
            </div>
            <StyledImage src={deliveries} alt='deliveries' />
          </HeaderDiv>
        </StyledContainer>
        <div className='wrapper'>
          <div className='row-1'>
            <BlurbWrapper>
              <div className='blurb-img-container'>
                <img src={online} alt='online chatting' />
              </div>
              <div className='blurb-text'>
                <h2>It aids decluttering</h2>
                <p>
                  Reduce clutter in your home and offices Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Adipiscing enim quisque
                  hendrerit sagittis ultrices nisi magna gravida. Non quis ut
                  dictumst in duis
                </p>
              </div>
            </BlurbWrapper>
          </div>
          <div className='row-2'>
            <BlurbWrapper>
              <div className='blurb-text'>
                <h2>It aids decluttering</h2>
                <p>
                  Reduce clutter in your home and offices Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Adipiscing enim quisque
                  hendrerit sagittis ultrices nisi magna gravida. Non quis ut
                  dictumst in duis
                </p>
              </div>
              <div className='blurb-img-container'>
                <img src={gift} alt='giving-gift' />
              </div>
            </BlurbWrapper>
          </div>
        </div>
        <StyledContainer>
          <h3>Recent posts</h3>
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
                      postDate={new Date(
                        post.data.postDate
                      ).toLocaleDateString()}
                      location={post.data.location}
                      shipping={post.data.shipping}
                    />
                  </Link>
                </div>
              ))}
            </GridContainer>
          )}
        </StyledContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Test;
