import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/Auth';
import { User } from '../datatypes/User';
import { useHistory, Link } from 'react-router-dom';
import Layout, { StyledContainer } from '../components/layout';
import styled from '@emotion/styled';
import GridContainer from '../components/GridContainer';
import PostContainer from '../components/PostContainer';
import Spinner from '../components/Spinner/Spinner';
import * as DataSource from '../services/firestore';
import * as firebase from 'firebase/app';

const DashboardContainer = styled.div`
  display: flex;
  margin: 10rem 0;
  position: relative;

  .user-profile {
    width: 300px;
    text-align: center;
    padding: 5rem 0;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px; */
    margin-right: 5em;
  }
  .profile-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;

    .user-profile {
      width: 70%;
    }
  }
`;
const Dashboard: React.FC = () => {
  //@ts-ignore
  const db = firebase.firestore();

  const history = useHistory();
  const [posts, setPosts] = useState<any[]>([]);

  //get posts by users
  const getUserPost = async () => {
    const userId = currentUser?.uid;
    let userPost: any = [];
    await db
      .collection('posts')
      .where('userId', '==', userId)
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => {
          userPost = [...userPost, { id: doc.id, data: doc.data() }];
        })
      );
    return userPost;
  };

  useEffect(() => {
    const getUserPosts = async () => {
      const userPost = await getUserPost();
      setPosts(userPost);
    };
    getUserPosts();
  }, []);

  const handleDelete = () => {
    console.log('your account has been deleted!');
    history.push(`/`);
  };
  let { currentUser } = useContext<Partial<User>>(AuthContext);
  console.log(currentUser?.uid);

  return (
    <Layout>
      <StyledContainer>
        <DashboardContainer>
          <div className='user-profile'>
            <img
              src={currentUser?.photoURL}
              alt={currentUser?.displayName}
              className='profile-img'
            />
            <p>{currentUser?.displayName}</p>
            <p>{currentUser?.email}</p>
            <p>Location: Port Harcourt</p>
            <p>No of posts: 15</p>
            <p>Connections: 10</p>

            <button onClick={handleDelete}>Delete Acount?</button>
          </div>

          <div>
            <h3>Your posts</h3>
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
          </div>
        </DashboardContainer>
      </StyledContainer>
    </Layout>
  );
};

export default Dashboard;
