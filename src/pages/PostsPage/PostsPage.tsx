import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PostContainer from '../../reusables/PostsContainer/PostContainer';
import styles from './PostsPage.module.css';
import Footer from '../../reusables/Footer/Footer';

import * as DataSource from '../../services/firestore';
//import * as DataSource from '../../services/freebli';

//import { Pagination } from 'antd';
import Spinner from '../../reusables/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Nav from '../../reusables/Nav/Nav';

const PostsPage = () => {
  const history = useHistory();

  const [posts, setPosts] = useState<any[]>([]);

  const handleLogout = ()=>{
    history.push(`/`);
  }

  useEffect(() => {
    const getAllPosts = async()=>{
      const allPosts = await DataSource.getAllPosts();
      console.log(allPosts);
      setPosts(allPosts);
    }

    getAllPosts();
  }, []);


  return (
    <>
      <Nav logout='LOGOUT' logoutCallback={handleLogout} />
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
                  postDate={new Date(post.data.postDate).toLocaleDateString() }
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
