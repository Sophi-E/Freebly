import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
//import Config from '../../config';
import { signOut, signInViaGoogle } from '../../services/firestore';

type NavProps = {
  login?: string;
  logout?: string;
  signup?: string;
};
const Nav: React.FC<NavProps> = ({ login, signup, logout }: NavProps) => {
  return (
    <nav className={styles.navWrapper}>
      <a className={styles.logo} href='/'>
        FREEBLI.
      </a>

      <button onClick={signInViaGoogle}>{login}</button>
      <button onClick={signOut}>{logout}</button>

      <button>{signup}</button>
    </nav>
  );
};

export default Nav;
