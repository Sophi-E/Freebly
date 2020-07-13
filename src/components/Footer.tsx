import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';
import styled from '@emotion/styled';

const StyledBio = styled.div``;
const SocialLinks = styled.div``;

const Footer = () => {
  return (
    <div>
      <div className={styles.bottomNav}>
        <StyledBio>
          <p>
            FREEBLI. is a non-profit that gives you an opportunity to declutter
            your home while also giving other people things that'll be of use to
            them
          </p>
        </StyledBio>
        <div className={styles.footerLinks}>
          <ul>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
            <Link to='/terms'>Terms of Use</Link>
          </ul>
        </div>
        <SocialLinks>
          <p>Follow us</p>
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </SocialLinks>
      </div>
      <p className={styles.copyright}>copyright @FREEBLI. 2020</p>
    </div>
  );
};

export default Footer;
