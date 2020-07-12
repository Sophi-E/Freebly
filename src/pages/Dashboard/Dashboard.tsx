//@ts-nocheck

import React, { useContext } from 'react';
// import Config from '../../config';

import { AuthContext } from '../../components/Auth';

import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
// import { PostsArray } from '../PostsPage/PostsPage';
import styles from '../PostsPage/PostsPage.module.css';
//import PostContainer from '../../reusables/PostsContainer/PostContainer';

import { User } from '../../datatypes/User';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push(`/`);
  };
  let { currentUser } = useContext<Partial<User>>(AuthContext);
  return (
    <>
      <div className={classes.dashboardContainer}>
        {/* <div className={classes.avi}>
          <button onClick={() => DataStore.signOut()}>Logout</button>
        </div> */}
        <div className={classes.profile}>
          <div className={classes.avatar}></div>
          <p>{currentUser.displayName}</p>
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

        <p className={styles.delAcct}>Delete Account?</p>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
