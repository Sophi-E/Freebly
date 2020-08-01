import React from 'react';
import styled from '@emotion/styled';
import Burger from './Burger';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #f1f1f1;
  position: fixed;
  margin-bottom: 3rem;
  top: 0;
  left: 0;
  background: #fff;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  .logo {
    padding: var(--spacing-xl);
    color: #006aff;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: underline;
    font-size: var(--title-heading);
  }
  a {
    color: #1d3742;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <Link to='/'>FREEBLI.</Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
