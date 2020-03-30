import React from 'react';
import styles from './dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avi}>
        <p>Logout</p>
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
        <button className={styles.createBtn}>Create Post</button>
        <button className={styles.viewBtn}>View All Post</button>
      </div>
      <p className={styles.delAcct}>Delete Account?</p>
    </div>
  );
};

export default Dashboard;
