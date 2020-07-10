import React from 'react';

import styles from './Nav.module.css';
//import Config from '../../config';
import { signOut, signInViaGoogle } from '../../services/firestore';
 
type NavProps = {
  login?: string;
  logout?: string;
  loginCallback?: Function;
  logoutCallback?: Function;
};
const Nav: React.FC<NavProps> = ({ login, logout, loginCallback, logoutCallback }: NavProps) => {

//  console.log(loginCallback ? `login: ${loginCallback}` : `logout: ${logoutCallback} ` );
  return (
    <nav className={styles.navWrapper}>
      <a className={styles.logo} href='/'>
        FREEBLI.
      </a>

      <button onClick={() => signInViaGoogle(loginCallback)}>{login}</button>

      <button onClick={()=>signOut(logoutCallback)}>{logout}</button>
    </nav>
  );
};

export default Nav;
