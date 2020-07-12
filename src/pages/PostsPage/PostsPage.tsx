import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PostContainer from '../../components/PostsContainer/PostContainer';
import styles from './PostsPage.module.css';

import * as DataSource from '../../services/firestore';

import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await DataSource.getAllPosts();
      console.log(allPosts);
      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <Layout>
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
