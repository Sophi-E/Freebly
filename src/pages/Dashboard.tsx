import React, { useContext } from 'react';
import { AuthContext } from '../components/Auth';

import { User } from '../datatypes/User';
import { useHistory } from 'react-router-dom';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import Button from '../components/Button';

const StyledContainer = styled.div`
  display: flex;
  margin: 10rem 0;

  .user-profile {
    width: 30%;
    text-align: center;
  }
  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
  }
`;
const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    console.log('you are now logged out!');
    history.push(`/`);
  };
  let { currentUser } = useContext<Partial<User>>(AuthContext);
  console.log(currentUser?.photoURL);
  return (
    <Layout>
      <StyledContainer>
        <div className='user-profile'>
          <div className='card'>
            <img src={currentUser?.photoURL} alt={currentUser?.displayName} />
            <p>{currentUser?.displayName}</p>
            <p>{currentUser?.email}</p>
            <p>Location</p>
            <p>No of posts: 15</p>
            <p>Connections: 10</p>
            <Button text='Create Post' bgColor='red' textColor='white' />
            <Button onClick={handleLogout} text='Logout' />
          </div>
        </div>

        <div>
          <h3>Your most recent posts</h3>
        </div>
      </StyledContainer>
    </Layout>
  );
};

export default Dashboard;
