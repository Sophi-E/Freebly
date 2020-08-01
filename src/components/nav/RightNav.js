import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { signInViaGoogle, signOut } from '../../services/firestore';
import { AuthContext } from '../Auth';
import 'antd/dist/antd.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 14px;

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
  const { currentUser } = useContext(AuthContext);

  const loginHandler = () => signInViaGoogle();

  const logoutHandler = () => signOut();

  return (
    <Ul open={open}>
      <Link to='/about'>About</Link>
      <Link to='/view-posts'>Products</Link>
      {!!currentUser ? (
        <>
          <Link to='/create-post'>Add New</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Button
            type='primary'
            style={{ background: 'var(--primary-color)' }}
            onClick={logoutHandler}
          >
            Log out
          </Button>
        </>
      ) : (
        <Button
          type='primary'
          style={{ background: 'var(--primary-color)' }}
          onClick={loginHandler}
        >
          Log in
        </Button>
      )}
    </Ul>
  );
};

export default RightNav;
