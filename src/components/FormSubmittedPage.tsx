import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  max-width: 700px;
  margin: 7rem auto;
  text-align: center;

  h1 {
    padding: 1em 0;
  }
`;
const FormSubmittedPage: React.FC = () => {
  return (
    <StyledDiv>
      <h1>Your post has been submitted</h1>
      <p>
        Go back to the <Link to='/'>homepage</Link> or keep exploring latest{' '}
        <Link to='/view-posts'>posts</Link>
      </p>
    </StyledDiv>
  );
};

export default FormSubmittedPage;
