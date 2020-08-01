import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/Auth';

import { User } from '../datatypes/User';
import { useHistory, Link } from 'react-router-dom';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import Button from '../components/Button';
import GridContainer from '../components/GridContainer';
import PostContainer from '../components/PostContainer';
import Spinner from '../components/Spinner/Spinner';
import * as DataSource from '../services/firestore';

const StyledContainer = styled.div`
  display: flex;
  margin: 10rem 0;
  position: relative;

  .user-profile {
    width: 300px;
    text-align: center;
    padding: 5rem 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;

    cursor: pointer;
  }
  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;

    .user-profile {
      width: 70%;
    }
  }
`;
const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    console.log('your account has been deleted!');
    history.push(`/`);
  };
  let { currentUser } = useContext<Partial<User>>(AuthContext);

  return (
    <Layout>
      <StyledContainer>
        <div className='user-profile'>
          <img src={currentUser?.photoURL} alt={currentUser?.displayName} />
          <p>{currentUser?.displayName}</p>
          <p>{currentUser?.email}</p>
          <p>Location</p>
          <p>No of posts: 15</p>
          <p>Connections: 10</p>

          <button onClick={handleLogout}>Delete Acount?</button>
        </div>

        <div>
          <h3>Your most recent posts</h3>

          <Spinner />
        </div>
      </StyledContainer>
    </Layout>
  );
};

export default Dashboard;
