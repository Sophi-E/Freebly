import React from 'react';
import styles from './dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avi}>
        <p>Logout</p>
        <div className={styles.headerAvi}></div>
      </div>
      <div>
        <div className={styles.avatar}></div>
        <p>John Doe</p>
      </div>
      <button>Edit Profile</button>
      <div className={styles.actions}>
        <button>Create Post</button>
        <button>View All Post</button>
      </div>
    </div>
  );
};

export default Dashboard;
