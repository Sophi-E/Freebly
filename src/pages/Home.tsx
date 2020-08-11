import React, { useState, useEffect, useContext } from 'react';
import * as DataSource from '../services/firestore';
import { Link } from 'react-router-dom';

import deliveries from '../images/deliveries.svg';
import gift from '../images/giving-gift.png';
import online from '../images/online.png';
import Layout, { StyledContainer } from '../components/layout';
import styled from '@emotion/styled';
import PostContainer from '../components/PostContainer';
import Spinner from '../components/Spinner/Spinner';
import GridContainer from '../components/GridContainer';
import { AuthContext } from '../components/Auth';

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

    button,
    .start-link {
      background: linear-gradient(79.46deg, #302f55 37.36%, #00b213 105.52%);
      color: #fff;
      padding: 10px;
      width: 100%;
      font-weight: bold;
      border-radius: 15px;
      border: none;
    }

    button:hover {
      background: #302f55;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 966px) {
    flex-direction: column;
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
    color: #3f3d56;
  }
  p {
    padding: 0.5em 0;
    line-height: 1.8;
  }

  @media screen and (max-width: 664px) {
    /* text-align: center; */
    flex-direction: column;

    .blurb-text {
      text-align: center;
    }
    div {
      padding: 1em;
    }
  }
`;

const Home: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const loginButtonHandler = () => DataSource.signInViaGoogle(() => {});
  let { currentUser } = useContext(AuthContext);

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
              <h1>Convenience & Community</h1>
              <p>
                Freebli is a community of people giving and recieving stuffs for
                free. Freebli is about recirculation and maximizing the lifetime
                of items by giving out those things that we leave laying around
                in our homes and offices without use.
              </p>
              {currentUser ? (
                <a href='/dashboard' className='start-link'>
                  Go to Dashboard
                </a>
              ) : (
                <button onClick={loginButtonHandler}>Get Started</button>
              )}
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
                <h2>It's Easy</h2>
                <p>
                  The recirculation process is really easy. Designed in such a
                  way to give you the most control. No shipping if you don't
                  want. Just take a snapshot of stuff you want to give away and
                  list on Freebli. Interested users request for them and once
                  you're both agreed, items are picked up. No hassle.
                </p>
              </div>
            </BlurbWrapper>
          </div>
          <div className='row-2'>
            <BlurbWrapper>
              <div className='blurb-text'>
                <h2>It aids decluttering</h2>
                <p>
                  Do you always have loads of stuff just laying around,
                  collecting dust in your home/office? Stuff just taking up
                  precious space without use? Listing on Freebli helps you clear
                  out the clutter, making room for new and useful items. Giving
                  others the opportunity to get something of value in the
                  process. It's win! win!. 🙂
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

export default Home;
