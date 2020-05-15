import React from 'react';
import Config from '../../config';
import styles from './dashboard.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../reusables/Footer/Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.avi}>
          <button className={styles.editBtn}>Edit Profile</button>
          <button onClick={() => Config.auth().signOut()}>Logout</button>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <p>John Doe</p>
          <div className={styles.actions}>
            <Link to='/create-post' className={styles.createBtn}>
              Create Post
            </Link>
            <Link to='/view-posts' className={styles.viewBtn}>
              View All Post
            </Link>
          </div>
        </div>

        <p className={styles.delAcct}>Delete Account?</p>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
