//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import styled from '@emotion/styled';

const FooterContainer = styled.div`
  background-color: #1d3742;

  padding: 3rem 3rem 1rem 3rem;
`;
const Copyright = styled.p`
  margin-top: 50px;
  text-align: center;
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
  @media screen and (max-width: 760px) {
    flex-direction: column;
    text-align: left;

    div {
      width: 100%;
      margin: 20px 0;
    }
  }
`;
const StyledBio = styled.div`
  padding-right: 30px;
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
    padding-bottom: 10px;
  }
  a {
    padding: 20px;
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
        <FooterLinks>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/privacypolicy'>Privacy Policy</Link>
          <Link to='/terms'>Terms of Use</Link>
        </FooterLinks>

        <SocialLinks>
          <p>Follow us on our social media accounts</p>

          <a href='facebook'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='socialmedia'>
            {' '}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='socialmedia'>
            {' '}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='socialmedia'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </SocialLinks>
      </FooterWrapper>
      <Copyright>All rights reserved @FREEBLI. 2020</Copyright>
    </FooterContainer>
  );
};

export default Footer;
