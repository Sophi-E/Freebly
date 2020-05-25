import React from 'react';
import Config from '../../config';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../reusables/Footer/Footer';
// import { PostsArray } from '../PostsPage/PostsPage';
import styles from '../PostsPage/PostsPage.module.css';
//import PostContainer from '../../reusables/PostsContainer/PostContainer';
import Nav from '../../reusables/Nav/Nav';

const Dashboard: React.FC = () => {
  return (
    <>
      <Nav logout='LOGOUT' />
      <div className={classes.dashboardContainer}>
        {/* <div className={classes.avi}>
          <button onClick={() => Config.auth().signOut()}>Logout</button>
        </div> */}
        <div className={classes.profile}>
          <div className={classes.avatar}></div>
          <p>John Doe</p>
          <div className={classes.actions}>
            <Link to='/create-post' className={classes.createBtn}>
              Create Post
            </Link>
            <Link to='/view-posts' className={classes.viewBtn}>
              View All Post
            </Link>
          </div>
        </div>
        <p>Recent Posts</p>
        {/* <div className={styles.postContainer}>
          {PostsArray.map((post) => (
            <div className={styles.card} key={post.id}>
              <PostContainer
                imageUrl={post.imageUrl}
                title={post.title}
                postDate={post.postDate}
                location={post.location}
              />
            </div>
          ))}
        </div> */}
        <p className={styles.delAcct}>Delete Account?</p>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
