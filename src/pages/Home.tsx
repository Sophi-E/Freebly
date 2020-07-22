import React, { useState, useEffect } from 'react';
import * as DataSource from '../services/firestore';
import { Link } from 'react-router-dom';
import box from '../images/box.jpg';
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
`;
const StyledImage = styled.img`
  width: 100%;
  margin: 1em auto;
`;

const BlurbWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  padding: 2em 0;
  margin: 4em 0;
  div {
    padding: 1em;
    width: 200px;
    background-color: var(--accent-color);
    color: #fff;

    @media screen and (max-width: 764px) {
      width: 100%;
    }
  }
  p {
    padding: 0.5em 0;
  }
  .icon {
    font-size: 4em;
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
        <StyledImage src={box} alt='Box' />
        {/* <div className={styles.intro}> */}
        <h1>All things have value</h1>
        <p>
          {/* Choose to give something of value to someone at no extra cost to you */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore
          ipsam
        </p>
        {/* </div> */}
        <BlurbWrapper>
          <div>
            <FontAwesomeIcon icon={faCoffee} className='icon' />
            <p>Give away stuff you no longer need</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPeopleCarry} className='icon' />
            <p>Reduce clutter in your home and offices</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGifts} className='icon' />
            <p>Add value to others while also getting stuffs you need</p>
          </div>
        </BlurbWrapper>
        <h4>Recent posts</h4>
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
