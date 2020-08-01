import React, { useState, useEffect } from 'react';
import * as DataSource from '../services/firestore';
import { Link } from 'react-router-dom';
import giftBox from '../images/gift-box.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import PostContainer from '../components/PostContainer';
import Spinner from '../components/Spinner/Spinner';
import GridContainer from '../components/GridContainer';

const HomeContainer = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #000;
  }
  .wrapper {
    margin: 8em 0;
  }
`;
export const StyledImage = styled.img`
  margin: 1em auto;
  width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 800px;
    max-height: 600px;
  }
`;

const BlurbWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    padding: 0 1em;
    width: 300px;
  }
  p {
    padding: 0.5em 0;
  }
  .icon {
    color: #1d3742;
    margin: 1em 0;
    font-size: 5em;
  }
  @media screen and (max-width: 664px) {
    flex-direction: column;
  }
`;
const Home: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await DataSource.getAllPosts();
      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <Layout>
      <HomeContainer>
        <StyledImage src={giftBox} alt='Box' />
        <div className='wrapper'>
          <h1>
            Freebli helps to recirculate items that still have value in them
          </h1>
          <BlurbWrapper>
            <div>
              <FontAwesomeIcon icon={faCoffee} className='icon' />
              <h2>Its easy</h2>
              <p>Give away stuff you no longer need</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPeopleCarry} className='icon' />
              <h2>It aids decluttering</h2>
              <p>Reduce clutter in your home and offices</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faGifts} className='icon' />
              <h2>It brings value</h2>
              <p>Add value to others while also getting stuffs you need</p>
            </div>
          </BlurbWrapper>
        </div>
        <h4>Recent posts</h4>
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
                    // postDate={new Date(
                    //   post.data.postDate
                    // ).toLocaleDateString()}
                    // location={post.data.location}
                    // shipping={post.data.shipping}
                  />
                </Link>
              </div>
            ))}
          </GridContainer>
        )}

        <p>
          <Link to='/signup'>Signup now to get started</Link>
        </p>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
