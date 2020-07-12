import React from 'react';
import styled from '@emotion/styled';
import Burger from './Burger';

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
  .logo {
    padding: var(--spacing-xl);
    color: #006aff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>FREEBLI.</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
