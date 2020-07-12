import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PostContainer from '../../components/PostsContainer/PostContainer';
import styles from './PostsPage.module.css';
import Footer from '../../components/Footer';

import * as DataSource from '../../services/firestore';
//import * as DataSource from '../../services/freebli';

//import { Pagination } from 'antd';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';

const PostsPage = () => {
  const history = useHistory();

  const [posts, setPosts] = useState<any[]>([]);

  const handleLogout = () => {
    history.push(`/`);
  };

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await DataSource.getAllPosts();
      console.log(allPosts);
      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return (
    <>
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

      <Footer />
    </>
  );
};

export default PostsPage;
