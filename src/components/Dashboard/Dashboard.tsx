import React from 'react';
import Config from '../../config';
import styles from './dashboard.module.css';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avi}>
        <button onClick={() => Config.auth().signOut()}>Logout</button>
        <div className={styles.headerAvi}></div>
      </div>
      <div className={styles.profile}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}></div>
          <p>John Doe</p>
        </div>
        <div className={styles.bio}>
          <p>Email</p>
          <p>Location</p>
          <p>Phone</p>
        </div>
        <button className={styles.editBtn}>Edit Profile</button>
      </div>

      <div className={styles.actions}>
        <Link to='/create-post' className={styles.createBtn}>
          Create Post
        </Link>
        <Link to='/view-posts' className={styles.viewBtn}>
          View All Post
        </Link>
      </div>
      <p className={styles.delAcct}>Delete Account?</p>
    </div>
  );
};

export default Dashboard;
