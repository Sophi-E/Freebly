import React, { useEffect, useState } from 'react';

import PostContainer from '../../components/PostContainer';
import styles from './PostsPage.module.css';
import box from '../../images/box.jpg';
import * as DataSource from '../../services/firestore';
import styled from '@emotion/styled';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
const StyledImage = styled.img`
  width: 100%;
  margin: 1em 0;
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
      {posts.length === 0 ? (
        <Spinner />
      ) : (
        <div className={styles.postContainer}>
          {posts.map((post) => (
            <div className={styles.card} key={post.id}>
              <Link to={`/view-posts/${post.id}`} className={styles.postLink}>
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
        </div>
      )}
    </Layout>
  );
};

export default PostsPage;
