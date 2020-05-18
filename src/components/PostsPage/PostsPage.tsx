import React, { useEffect, useState } from 'react';
import PostContainer from '../../reusables/PostsContainer/PostContainer';
import styles from './PostsPage.module.css';
import Footer from '../../reusables/Footer/Footer';
import axios from 'axios';
import { Spin } from 'antd';
import Spinner from '../../reusables/Spinner/Spinner';

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(posts);
  return (
    <>
      {posts.length === 0 ? (
        <Spinner />
      ) : (
        <div className={styles.postContainer}>
          {posts.map((post) => (
            <div className={styles.card} key={post.id}>
              <PostContainer
                imageUrl={post.imageUrl}
                title={post.title}
                postDate={post.postDate}
                location={post.location}
                shipping={post.shipping}
              />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default PostsPage;
