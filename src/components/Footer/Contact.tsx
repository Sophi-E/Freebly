import React from 'react';
import Nav from '../../reusables/Nav/Nav';
import Footer from '../../reusables/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
import styles from './FooterLinks.module.css';

const Contact = () => {
  return (
    <>
      <Nav logout='LOGOUT' />
      <div className={styles.contactWrapper}>
        <h3>For more info, contact us</h3>
        <div>
          <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
          <p>Phone</p>
          <p>+2349059146315</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className={styles.contactIcon}
          />
          <p>Address</p>
          <p>#26, Woji Estate, Port Harcourt. Rivers State, Nigeria</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMousePointer}
            className={styles.contactIcon}
          />
          <p>Email</p>
          <p>info@freebli.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
