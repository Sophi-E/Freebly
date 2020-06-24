import React from 'react';

import styles from './Nav.module.css';
//import Config from '../../config';
import { signOut, signInViaGoogle } from '../../services/firestore';

type NavProps = {
  login?: string;
  logout?: string;
};
const Nav: React.FC<NavProps> = ({ login, logout }: NavProps) => {
  return (
    <nav className={styles.navWrapper}>
      <a className={styles.logo} href='/'>
        FREEBLI.
      </a>

      <button onClick={signInViaGoogle}>{login}</button>

      <button onClick={signOut}>{logout}</button>
    </nav>
  );
};

export default Nav;
