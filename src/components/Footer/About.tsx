import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {AuthContext} from '../Auth';
import Nav from '../Nav/Nav';
import Footer from '../Footer';
import styles from './FooterLinks.module.css';

const About = () => {
  const {currentUser} = useContext(AuthContext);
  const history = useHistory();

  const loginHandler = (result:any) =>{
    history.push('/Dashboard');
  }

  const logoutHandler = () =>{
    history.push('/');
  }


  return (
    <>
    {!!currentUser
      ? <Nav logout='LOGOUT' logoutCallback={logoutHandler} />
      : <Nav login='LOGIN' loginCallback={loginHandler} />
    }
      <div className={styles.faqWrapper}>
        <h1>About Freebli - Frequently Asked Questions</h1>
        <div>
          <h3>What is Freebli?</h3>
          <p>
            We're a non-profit that gives you an opportunity to declutter your
            home while also giving other people things that'll be of use to them
          </p>
        </div>
        <div>
          <h3>Is Freebli really free?</h3>
          <p>Yes. Everything on Freebli is 100% free</p>
        </div>
        <div>
          <h3>How can i support Freebli?</h3>
          <p>
            You can support us by signing up and posting those items in your
            homes/offices that you no longer use and also telling your friends
            and family about Freebli.
          </p>
        </div>
        <div>
          <h3>Does Freebli have a mobile app?</h3>
          <p>No. for now, Freebli is only available on the web.</p>
        </div>
        <div>
          <h3>Can my company advertise on Freebli?</h3>
          <p>Yes. We show ads to support bts running of Freebli.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
