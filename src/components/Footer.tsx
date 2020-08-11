//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import styled from '@emotion/styled';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.div`
  background-color: #1d3742;
  padding: 3rem 3rem 1rem 3rem;
`;
const Copyright = styled.p`
  margin-top: 30px;
  text-align: center;
  color: #fff;
`;
const FooterWrapper = styled.div`
  color: #fff;
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 33%;
  }
  /* @media screen and (max-width: 960px) {
    text-align: left;

    div {
      width: 45%;
      margin: 1em 2%;
    }
  } */
  @media screen and (max-width: 960px) {
    flex-direction: column;
    text-align: left;

    div {
      width: 100%;
      margin: 20px 0;
    }
  }
`;
const StyledBio = styled.div`
  text-align: justify;
  p {
    width: 300px;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #fff;
    @media screen and (max-width: 760px) {
      padding: 8px 0;
    }
  }
`;
const SocialLinks = styled.div`
  p {
    font-size: 1.4em;
    padding-bottom: 10px;
  }
  a {
    padding: 10px 20px 10px 0;
    color: white;
    text-decoration: none;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <StyledBio>
          <p>
            FREEBLI. is a non-profit that gives you an opportunity to declutter
            your home while also giving other people things that'll be of use to
            them
          </p>
        </StyledBio>

        <SocialLinks>
          <p>FREEBLI.</p>

          <a href='https://www.facebook.com/Freebli1-102559858229316'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.twitter.com/freebli1'>
            {' '}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='https://www.instagram.com/freebli1'>
            {' '}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='/contact'>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </a>
        </SocialLinks>
        <FooterLinks>
          <Link to='/privacypolicy'>Privacy Policy</Link>
          <Link to='/terms'>Terms of Use</Link>
          <Link to='/contact'>Contact Us</Link>
        </FooterLinks>
      </FooterWrapper>
      <Copyright>All rights reserved @FREEBLI. 2020</Copyright>
    </FooterContainer>
  );
};

export default Footer;
