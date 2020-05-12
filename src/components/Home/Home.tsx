import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import undraw from '../../images/undraw.svg';
import giftbox from '../../images/gift-box.png';
import delivery from '../../images/delivery.png';
import Footer from '../../reusables/Footer/Footer';
import Nav from '../../reusables/Nav/Nav';
const Home: React.FC = () => {
  return (
    <>
      <Nav />

      {/* <div className={styles.homeContainer}>
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
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
