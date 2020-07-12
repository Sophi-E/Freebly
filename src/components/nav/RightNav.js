import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 80px;

  a {
    padding: 7px 15px;
    text-decoration: none;
    color: var(--color-text);
  }
  .contact {
    background-color: var(--accent-color);
    color: #fff;
    border-radius: 2rem;
    border: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 3.5rem 0 0 0;

    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
      padding: 10px;
    }
    .contact {
      background: none;
      /* color: #fff; */
      border-radius: none;
      border: none;
      margin: 0;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/company">Company</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link className="contact" to="/contact">
        Contact Us
      </Link>
    </Ul>
  );
};

export default RightNav;
