import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/Auth';
import { User } from '../datatypes/User';
import { useHistory, Link } from 'react-router-dom';
import Layout, { StyledContainer } from '../components/layout';
import styled from '@emotion/styled';
import GridContainer from '../components/GridContainer';
import PostContainer from '../components/PostContainer';
import * as DataSource from '../services/firestore';
import * as firebase from 'firebase/app';

const DashboardContainer = styled.div`
  display: flex;
  margin: 6rem 0;

  .delPostBtn {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 3px;
    background: red;
  }

  .user-profile {
    width: 300px;
    text-align: center;
    padding: 5rem 0;
    border-right: 1px solid var(--primary-color);
    margin-right: 5em;
  }
  .profile-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    margin-bottom: 1em;
  }
  button {
    background: var(--primary-color);
    color: #fff;
    padding: 8px 15px;
    border: none;
    border-radius: 3px;
  }
  button:hover {
    background: #b01c0e;
    font-weight: bold;
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;

    .user-profile {
      width: 100%;
      border: none;
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

  let user = firebase.auth().currentUser;
  const handleDeleteAccount = () => {
    user
      ?.delete()
      .then(() => console.log('User deleted'))
      .catch((error: ErrorEvent) => console.log('An error happened', error));
    history.push(`/`);
  };

  const deletePost = (postId: string) => {
    db.collection('posts')
      .doc(postId)
      .delete()
      .then(() => getUserPost())
      .catch((error) => console.error('Error removing document: ', error));
  };
  let { currentUser } = useContext<Partial<User>>(AuthContext);

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
            <p>No of posts: {posts.length}</p>
            {/* <p>Connections: 10</p> */}

            <button onClick={handleDeleteAccount}>Delete Account</button>
          </div>

          <div>
            <h3>Your posts</h3>
            {posts.length === 0 ? (
              <p>You have no posts yet.</p>
            ) : (
              // <Spinner />
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
                    {/* @ts-ignore */}
                    <button
                      onClick={() => deletePost(post.id)}
                      className='delPostBtn'
                    >
                      X
                    </button>
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
