import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navWrapper}>
      <a className={styles.logo} href='/'>
        FREEBLY
      </a>

      <Link to='/login'>LOGIN</Link>

      <Link to='/signup'>SIGNUP</Link>
    </nav>
  );
};

export default Nav;
