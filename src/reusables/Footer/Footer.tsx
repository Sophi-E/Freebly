import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.bottomNav}>
        <div className={styles.footerLinks}>
          <ul>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
            <Link to='/terms'>Terms of Use</Link>
          </ul>
        </div>
        <div className={styles.subscribeBtn}>
          <input className='input' type='email' placeholder='Newsletter' />
          <button>Subscribe</button>
        </div>
      </div>
      <p className={styles.copyright}>copyright @FREEBLI. 2020</p>
    </div>
  );
};

export default Footer;
