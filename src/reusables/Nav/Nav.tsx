import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

type NavProps = {
  login?: string;
  signup?: string;
};
const Nav: React.FC<NavProps> = ({ login, signup }: NavProps) => {
  return (
    <nav className={styles.navWrapper}>
      <a className={styles.logo} href='/'>
        FREEBLY
      </a>

      <Link to='/login'>{login}</Link>

      <Link to='/signup'>{signup}</Link>
    </nav>
  );
};

export default Nav;
