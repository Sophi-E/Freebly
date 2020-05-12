import React from 'react';
import styles from './home.module.css';
import giftbox from '../../images/gift-box.png';
import Footer from '../../reusables/Footer/Footer';
import Nav from '../../reusables/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div className={styles.homeContainer}>
        <h1>All things have value</h1>
        <p>
          Choose, today, to give something of value to someone at no extra cost
        </p>
        <img src={giftbox} alt='deliveryBox' />
      </div>
      <div className={styles.iconWrapper}>
        <div>
          <FontAwesomeIcon icon={faCoffee} />
          <p>Give away stuff you no longer need</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} />
          <p>Reduce clutter in your home and offices</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} />
          <p>Add value to others while also getting stuffs you need</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
