import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* padding: 80px; */

  a {
    padding: 7px 15px;
    text-decoration: none;
    color: var(--color-text);
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
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to='/about'>About</Link>
      <Link to='/view-posts'>Products</Link>
      <Link to='/create-post'>Add New</Link>
    </Ul>
  );
};

export default RightNav;
