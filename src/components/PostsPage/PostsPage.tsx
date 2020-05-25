import React, { useEffect, useState } from 'react';
import PostContainer from '../../reusables/PostsContainer/PostContainer';
import styles from './PostsPage.module.css';
import Footer from '../../reusables/Footer/Footer';
import axios from 'axios';
//import { Pagination } from 'antd';
import Spinner from '../../reusables/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Nav from '../../reusables/Nav/Nav';

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts', {
        params: {
          //_limit: 8,
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Nav login='Logout' />
      {posts.length === 0 ? (
        <Spinner />
      ) : (
        <div className={styles.postContainer}>
          {posts.map((post) => (
            <div className={styles.card} key={post.id}>
              <Link to={`/view-posts/${post.id}`} className={styles.postLink}>
                <PostContainer
                  imageUrl={post.imageUrl}
                  title={post.title}
                  postDate={post.postDate}
                  location={post.location}
                  shipping={post.shipping}
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
