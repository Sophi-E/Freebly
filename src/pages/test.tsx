// //@ts-nocheck
// import React, { useContext, useState, useEffect } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// import { AuthContext } from '../components/Auth';
// import { User } from '../datatypes/User';

// const Test = () => {
//   let { currentUser } = useContext<Partial<User>>(AuthContext);
//   const db = firebase.firestore();
//   const [posts, setPosts] = useState([]);

//   const getUserPost = async () => {
//     let userPost = [];
//     await db
//       .collection('posts')
//       .where('postDate', '==', '1590944479139')
//       .get()
//       .then((querySnapshot) =>
//         querySnapshot.forEach((doc) => {
//           userPost = [...userPost, { id: doc.id, data: doc.data() }];
//         })
//       );
//     return userPost;
//   };

//   useEffect(() => {
//     const getUserPosts = async () => {
//       const userPost = await getUserPost();
//       setPosts(userPost);
//     };
//     getUserPosts();
//   }, []);

//   console.log(posts);

//   return (
//     <div>
//       {posts.map((post) => (
//         <p>{post.data.title}</p>
//       ))}
//     </div>
//   );
// };

// export default Test;

import React, { useState, useEffect } from 'react';
import * as DataSource from '../services/firestore';
import { Link } from 'react-router-dom';
import deliveries from '../images/deliveries.svg';
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
  padding: 3rem 0;
  a {
    text-decoration: none;
    color: #000;
  }
  .wrapper {
    margin: 8em 0;
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
      margin-top: 3em;
    }
  }
  @media screen and (max-width: 640px) {
    .bio {
      text-align: center;
    }
  }
`;

export const StyledImage = styled.img`
  margin: 1.5em auto;
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
  h2 {
    text-decoration: underline;
    font-weight: bold;
    color: #8f5c22;
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
                    postDate={new Date(post.data.postDate).toLocaleDateString()}
                    location={post.data.location}
                    shipping={post.data.shipping}
                  />
                </Link>
              </div>
            ))}
          </GridContainer>
        )}

        <h2>Login now to get started</h2>
      </HomeContainer>
    </Layout>
  );
};

export default Test;
