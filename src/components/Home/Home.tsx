import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import undraw from '../../images/undraw.svg';
import giftbox from '../../images/gift-box.png';
import delivery from '../../images/delivery.png';
const Home: React.FC = () => {
  return (
    <>
      <nav className={styles.navWrapper}>
        <a className={styles.logo} href='/'>
          FREEBLY
        </a>
        <div className={styles.navLinks}>
          <Link className={styles.two} to='/login'>
            LOGIN
          </Link>

          <Link to='/signup'>SIGNUP</Link>
        </div>
      </nav>

      <div className={styles.homeContainer}>
        <div className={styles.headerContainer}>
          <img
            className={styles.headerImg}
            src={undraw}
            alt='illustration from undraw'
          />
          <div className={styles.intro}>
            <h3 className={styles.heading}>Website Caption</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              felis tristique, suscipit felis vitae, laoreet dui. Sed malesuada
              varius ante id ultricies. Etiam consequat sollicitudin
              scelerisque. Vestibulum{' '}
            </p>
            <button className={styles.cta}>Get started</button>
          </div>
        </div>
        <div className={styles.containerTwo}>
          <div className={styles.containerP}>
            <img className={styles.fullWidth} src={giftbox} alt='random' />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus iaculis risus ante,
              sed cursus tortor posuere a. Proin tristique, elit ut volutpat
              mollis
            </p>
          </div>
          <div className={styles.containerP}>
            <img className={styles.fullWidth} src={delivery} alt='random' />
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus iaculis risus ante,
              sed cursus tortor posuere a. Proin tristique, elit ut volutpat
              mollis
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomNav}>
        <div className={styles.footerLinks}>
          <ul>
            <Link to='/about us'>About Us</Link>
            <Link to='/contact us'>Contact Us</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
            <Link to='/terms'>Terms of Use</Link>
          </ul>
        </div>
        <div className={styles.subscribeBtn}>
          <input className='input' type='email' placeholder='Newsletter' />
          <button>Subscribe</button>
        </div>
      </div>
      <p className={styles.copyright}>@ copyright 2020</p>
    </>
  );
};

export default Home;
