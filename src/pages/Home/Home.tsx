import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../components/Auth';
import { User } from '../../datatypes/User';

import styles from './home.module.css';
import boxes from '../../images/boxes.jpg';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
const Home: React.FC = () => {
  const history = useHistory();
  const currentUser = useContext<Partial<User>>(AuthContext);

  const handleLogin = (result: any) => history.push('/dashboard');

  const handleLogout = () => history.push('/');

  return (
    <>
      {!!currentUser.currentUser ? (
        <Nav logout='LOGOUT' logoutCallback={handleLogout} />
      ) : (
        <Nav login='LOGIN' loginCallback={handleLogin} />
      )}

      <div className={styles.homeContainer}>
        <div className={styles.intro}>
          <h1>All things have value</h1>
          <p>
            {/* Choose to give something of value to someone at no extra cost to you */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore
            ipsam
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
