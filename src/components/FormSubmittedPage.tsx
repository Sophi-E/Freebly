import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Box from '../images/value.svg';

const StyledDiv = styled.div`
  max-width: 700px;
  margin: 5rem auto;
  text-align: center;

  /* .imgCon {
    width: 500px;
  } */
  img {
    width: 100%;
  }
  h1 {
    padding: 0.5em 0;
  }
  a {
    text-decoration: underline;
  }
`;
const FormSubmittedPage: React.FC = () => {
  return (
    <StyledDiv>
      <div className='imgCon'>
        <img src={Box} alt='box' />
      </div>
      <h1>Your post has been submitted</h1>
      <p>
        Go back to the <Link to='/'>homepage</Link> or keep exploring latest{' '}
        <Link to='/view-posts'>posts</Link>
      </p>
    </StyledDiv>
  );
};

export default FormSubmittedPage;
