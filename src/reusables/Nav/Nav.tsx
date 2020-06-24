import React from 'react';

import styles from './Nav.module.css';
//import Config from '../../config';
import { signOut, signInViaGoogle } from '../../services/firestore';
import { useHistory } from 'react-router-dom';

type NavProps = {
  login?: string;
  logout?: string;
};
const Nav: React.FC<NavProps> = ({ login, logout }: NavProps) => {
  const history = useHistory();

  return (
    <nav className={styles.navWrapper}>
      <a className={styles.logo} href='/'>
        FREEBLI.
      </a>

      <button onClick={() => signInViaGoogle(history)}>{login}</button>

      <button onClick={signOut}>{logout}</button>
    </nav>
  );
};

export default Nav;
