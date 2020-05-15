import React from 'react';
import styles from './home.module.css';
import boxes from '../../images/boxes.jpg';
import Footer from '../../reusables/Footer/Footer';
import Nav from '../../reusables/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div className={styles.homeContainer}>
        <div className={styles.intro}>
          <h1>All things have value</h1>
          <p>
            Choose to give something of value to someone at no extra cost to you
          </p>
        </div>

        <img src={boxes} alt='deliveryBox' />
      </div>
      <div className={styles.iconWrapper}>
        <div>
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
          <p>Give away stuff you no longer need</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPeopleCarry} className={styles.icon} />
          <p>Reduce clutter in your home and offices</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faGifts} className={styles.icon} />
          <p>Add value to others while also getting stuffs you need</p>
        </div>
      </div>

      <p className={styles.cta}>Signup now to get started</p>

      <Footer />
    </>
  );
};

export default Home;
