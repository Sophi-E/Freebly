import React from 'react';
import Nav from '../../reusables/Nav/Nav';
import Footer from '../../reusables/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faLocationArrow,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Nav logout='LOGOUT' />
      <div>
        <h4>For more info, contact us</h4>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>Phone</p>
          <p>+2349059146315</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>Address</p>
          <p>#26, Woji Estate, Port Harcourt. Rivers State, Nigeria</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faMousePointer} />
          <p>Email</p>
          <p>info@freebli.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
